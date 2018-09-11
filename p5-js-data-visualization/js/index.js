let populations;
let objArray = [];
var dataPop = [];
var data = [];
var maxData;
var maxNum = 0;


// var nums = [1,5,3,6,4,3];
// var maxNum;
// for (var i = 0; i < nums.length; i++) {
//   maxNum = (nums[i].estimate > maxNum) ? nums[i].estimate : maxNum;
// }


function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);
  rectMode(BOTTOM);

  loadJSON("simpleData_noRegions.json", callback);

  // for (var i = 0; i < 100; i = i + 1) {
  //   var randomNumber = random(20, 80);
  //   data.push(randomNumber);
  // }
  // maxData = max(data);
}





function callback(data) {
  // console.log('done loading data');
  // console.log(data);
  populations = data;

  //if the data is loaded, start working with it
  if (populations) {
    for (let i = 0; i < populations.length; i++) {
      //console.log(populations[i]);

      // let name = populations[i].country;
      // let population = populations[i].estimate;
      // //sampling error of the estimate, estimate could be + or - the margin of error
      // let error = populations[i].marginOfError;

      //get magnitude of error compared to population estimate;
      // let errorFraction = populations[i].marginOfError / population;
      //console.log(errorFraction);

      // console.log(name, population, error)


      // var nums = [1, 5, 3, 6, 4, 3];

      // for (var i = 0; i < populations.length; i++) {
      var estimate = +populations[i].estimate;
      maxNum = (estimate > maxNum) ? estimate : maxNum;
      // }

    }
  }
  //
  // console.log(populations);

}



function draw() {
  if (!populations) return;

  background(30, 39, 78);
  fill(50, 195, 202);
  // rgb(209, 218, 78)
  // stroke(89, 86, 74);
  noStroke();
  var angleSeparation = 360 / populations.length;
  var padding = 10;

  if (frameCount <= 400) {
    maxValue = constrain(frameCount * 2, 0, 400);
  } else {
    maxValue = 400;
  }
  var offset = 220;
  // var dataMultiplier = (height / 2 - offset - padding) / Math.log(maxNum, 1.1);
  // var dataMultiplier = (height / 2 - offset - padding) / Math.log(2, maxNum);
  var dataMultiplier = (height / 2 - offset - padding) / maxNum;


  for (var i = 0; i < populations.length; i = i + 1) {
    push();
    // var currentpop = Math.log(+populations[i].estimate, 1.1);
    // var currentpop = Math.log(2, +populations[i].estimate);
    var currentpop = +populations[i].estimate;

    var currentName = populations[i].country;

    var finalHeight = currentpop * dataMultiplier;
    var animatedHeight = map(maxValue, 0, 400, 0, finalHeight);
    translate(width / 2, height / 2);
    rotate(angleSeparation * i);
    rect(0, offset + 100, angleSeparation * 2, animatedHeight);
    text((currentName), offset - 20, 0);
    pop();
  }



  // background(43, 53, 63);
  //   fill(139, 171, 203);
  //   stroke(89, 86, 74);
  //
  //   var angleSeparation = 360 / data.length;
  //   var padding = 10;
  //
  //   if (frameCount <= 400) {
  //     maxValue = constrain(frameCount * 2, 0, 400);
  //   } else {
  //     maxValue = 400;
  //   }
  //   var offset = 200;
  //   var dataMultiplier = (height/2-offset-padding) / maxData;
  //
  //
  //   for (var i = 0; i < data.length; i = i + 1) {
  //     push();
  //     var currentData = data[i];
  //     var finalHeight = currentData * dataMultiplier;
  //     var animatedHeight = map(maxValue, 0, 400, 0, finalHeight);
  //     translate(width / 2, height / 2);
  //     rotate(angleSeparation * i);
  //     rect(0, offset, angleSeparation*2, animatedHeight);
  //     text(Math.floor(currentData), offset-20, 0);
  //     pop();
  //   }







}
