//!!!!!!!!TW0 GLOBAL ARRAYS
  //Here we are setting up an array for holding the objects
//There will be one object per country
  let arrayOfObjects = [];
  //an array of Years -- use this for your mean line
  // you also use it for building your axes
  let monthArray = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

function setup() {


//BUILDING AN ARRAY OF OBJECTS
   
createCanvas(windowWidth, windowHeight);
//Here is an array for countries (by rownumber)
//the loop below loops through the five rows and sets up an object for each country
//the object includes the country's name and three arrays: xpoints, ypoints, and yvalues
//these are parallel arrays with one value for each year
//xpoints and ypoints are the actual mapped values on the screen for each year
//yvalues are the original yvalues (not mapped to the screen) it is useful checking for zero values
     // for (let i = 0; i < breitbart.length; i++) {
     //   //setting up the Object values
     //   breitbart.xpoints = [];
     //   breitbart.ypoints = [];
     //   //looping through the columns to push the proper values into the arrays
     //   // make sure the year exists, because often there are empty columns in between each year column.
     //       countryObject.xpoints.push(map(theYear,1990,2016,150,width-50));
     //       countryObject.ypoints.push(map(Yvalue,0,100,height-50,50));
     //       countryObject.yvalues.push(Yvalue);
     //     // this line loads the years into the arrayOfYears 
     //      if (i==0) {arrayOfYears.push(theYear);}
     //      }

     //    }
        //once the inner loop is done, the object for that country is pushed into the arrayOfObjects for later use
    	// arrayOfObjects.push(countryObject)


 // for (let i = 0; i < breitbart.length; i++) {
 //    let pub_date = new Date(breitbart[i].pubDate).getTime()
 // //       countryObject.xpoints = [];
 //       countryObject.ypoints = [];
 //       countryObject.yvalues = [];
 //           countryObject.xpoints.push(map(theYear,1990,2016,150,width-50));
 //           countryObject.ypoints.push(map(Yvalue,0,100,height-50,50));
 //           countryObject.yvalues.push(Yvalue);
 //         // this line loads the years into the arrayOfYears 
 //          if (i==0) {arrayOfYears.push(theYear);}
 //          }

 //        }
 //        //once the inner loop is done, the object for that country is pushed into the arrayOfObjects for later use
 //      arrayOfObjects.push(countryObject)


//simple drawing stuff
 background('#03009B')  //#065C3E  //#D8F6E8
        noFill();
       
 //I put the drawing of the axis into a separate function
  makeAxis();
//I also put the drawing of the points and lines in a separate function
buildScreenPos();
buildScreenPos2();
buildScreenPos3();
}
// function draw() {
 //DON'T DO ANYTHING IN DRAW!!! 
// }

let sel;

function dropdown() {
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Negative Sentiment');
  sel.option('Positive Sentiment');
  sel.option('Neutral Sentiment');
  sel.selected('Negative Sentiment');
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();
  background(200);
  //text('It is a ' + item + '!', 50, 50);
}

function buildScreenPos() {
//You only need to have one loop here. So you want to access each property in order to build the X and Y positions.
//
	for(let i=0; i < breitbart.length;i++) {
  		//Get the property you want to base those positions on and then map them.
      let pub_date = new Date(breitbart[i].pubDate).getTime()
      let sentNeg = breitbart[i].sentiment.negative
      let sentPos = breitbart[i].sentiment.positive
      let sentNeu = breitbart[i].sentiment.neutral
  		breitbart[i].xpos = map(pub_date,1627790400000,1651377600000,50,width-50)
      breitbart[i].ypos = map(sentNeg,0,1,height-50,50)
      fill('#FF4945')
      noStroke();
      ellipse(breitbart[i].xpos,breitbart[i].ypos,5,5)
   }
}

function buildScreenPos2() {
//You only need to have one loop here. So you want to access each property in order to build the X and Y positions.
//
  for(let i=0; i < hrc.length;i++) {
      //Get the property you want to base those positions on and then map them.
      let pub_date = new Date(hrc[i].pubDate).getTime()
      let sentNeg = hrc[i].sentiment.negative
      let sentPos = hrc[i].sentiment.positive
      let sentNeu = hrc[i].sentiment.neutral
      hrc[i].xpos = map(pub_date,1627788771000,1651375971000,50,width-50)
      hrc[i].ypos = map(sentNeg,0,1,height-50,50)
      fill('#B365EF')
      noStroke();
      ellipse(hrc[i].xpos,hrc[i].ypos,5,5)
   }
}

function buildScreenPos3() {
//You only need to have one loop here. So you want to access each property in order to build the X and Y positions.
//
  for(let i=0; i < nytimes.length;i++) {
      //Get the property you want to base those positions on and then map them.
      let pub_date = new Date(nytimes[i].pubDate).getTime()
      let sentNeg = nytimes[i].sentiment.negative
      let sentPos = nytimes[i].sentiment.positive
      let sentNeu = nytimes[i].sentiment.neutral
      nytimes[i].xpos = map(pub_date,1627788771000,1651375971000,50,width-50)
      nytimes[i].ypos = map(sentNeg,0,1,height-50,50)
      fill('#DEF542')
      noStroke();
      ellipse(nytimes[i].xpos,nytimes[i].ypos,5,5)
   }
}

// you will need to adjust this so that it corresponds properly to your dataset
// make sure to change the text and the scale of the Y axis if values don't go from 0 to 1
// as well as the range of years

function makeAxis() {
  textAlign(LEFT)
  fill('#CDF5ED')
  textStyle(BOLDITALIC);
  textSize(16);
     text("Trans Media Coverage: Negative Sentiment",Math.round(width/3.1),30)
     textStyle(BOLD);
     fill('#B365EF')
     text("HRC",390,90)
     fill('#FF4945') 
     text("Breitbart",440,90)
     fill('#DEF542')
     text("New York Times",520,90)
     stroke(0);
     fill('#CDF5ED');
     textStyle(BOLDITALIC);
     textSize(12);
     text("Measured 0-1 - Articles from Aug 2021 - April 2022",Math.round(width/3),50)
    
    //draw xaxis
    stroke('#CDF5ED');
    line(50,height-50,width-50,height-50);
    //draw yaxis
    line(50,50,50,height-50);
    textSize(12);

    //yaxis vaules
    for(let i = 0; i < 3; i += 0.25) {
      //rounding is here because of floating point issue
      let rounded = i;
      yvalue = map(rounded,0,1,height-50,50);
      textAlign(RIGHT,CENTER)
      text(rounded,45,yvalue);
      line(50,yvalue,60,yvalue);
    }
    //xaxis values
      let year = 2021;
      let i = 7;
      while (i != 6) {
      if (i == 12){
         i = 0;
         year= 2022
       }
      
      let date = new Date(year,i).getTime()
      xvalue = map(date,1627788771000,1651375971000,50,width-50)
       textAlign(CENTER,BOTTOM);
       fill('#80FFD2')
       line(xvalue,height-55,xvalue,height-45);
       text(monthArray[i] + " " + year,xvalue,height-30);
       noFill()
       i++;
     }
 }

//look into plotly
// KEEPING MISTAKES BELOW, FOR REFERENCE: 

// function makeAxis() {
//   textAlign(LEFT)
//   fill('#CDF5ED')
//   textStyle(BOLDITALIC);
//   textSize(16);
//      text("Trans Coverage - Positive Sentiment Tracker",Math.round(width/3),30)
//      textStyle(BOLD);
//      fill('#B365EF')
//      text("HRC",260,60)
//      fill('#FF4945') 
//      text("Breitbart",310,60)
//      fill('#DEF542')
//      text("New York Times",390,60)
//      stroke(0);
//      fill('#CDF5ED');
    
//     //draw xaxis
//     stroke('#CDF5ED');
//     line(50,height-50,width-50,height-50);
//     //draw yaxis
//     line(50,50,50,height-50);
//     textSize(12);

//     //yaxis vaules
//     for(let i = 0; i < 3; i += 0.25) {
//       //rounding is here because of floating point issue
//       let rounded = i;
//       yvalue = map(rounded,0,1,height-50,50);
//       textAlign(RIGHT,CENTER)
//       text(rounded,45,yvalue);
//       line(50,yvalue,60,yvalue);
//     }
//     //xaxis values
//     for (let i = 7; i < 13; i++) {
//       let year = 2021;
//       let i = 7;
//       while (i != 6) {
//       if (i == 12){
//          i = 0;
//          year= 2022
//        }
      
//       let date = new Date(year,i).getTime()
//       xvalue = map(date,1627788771000,1651375971000,50,width-50)
//        textAlign(CENTER,BOTTOM);
//        fill('#80FFD2')
//        //text(pub_date,xvalue,height-30);
//        line(xvalue,height-55,xvalue,height-45);
//        noFill()
       
//      }
//    }
   