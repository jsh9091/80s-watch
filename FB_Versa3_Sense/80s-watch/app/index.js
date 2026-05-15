/*
 * MIT License
 *
 * Copyright (c) 2026 Joshua Horvath
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clock from "clock";
import * as document from "document";
import { display } from "display";
import { me as appbit } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { today as activity } from "user-activity";

// Tick every second
clock.granularity = "seconds";

// Get handles on GUI label elements
let hourHand = document.getElementById("hourHand");
let hourHandShadow = document.getElementById("hourHandShadow");
let minuteHand = document.getElementById("minuteHand");
let minuteHandShadow = document.getElementById("minuteHandShadow");
let secondHand = document.getElementById("secondHand");
let secondHandShadow = document.getElementById("secondHandShadow");

// Get handles on background design elements 
let backgroundCircleT = document.getElementById("backgroundCircleT");
let backgroundCircleB = document.getElementById("backgroundCircleB");
let backgroundCircleB2 = document.getElementById("backgroundCircleB2");
let innerCircle = document.getElementById("innerCircle");
let maskRectRight_Right = document.getElementById("maskRectRight_Right");
let maskRectRight_Left = document.getElementById("maskRectRight_Left");
let maskRectLeft1_Left = document.getElementById("maskRectLeft1_Left");
let maskRectLeft1_Right = document.getElementById("maskRectLeft1_Right");
let maskRectLeft2_Left = document.getElementById("maskRectLeft2_Left"); 
let maskRectLeft2_Right = document.getElementById("maskRectLeft2_Right");
let maskRectLeft3_Left = document.getElementById("maskRectLeft3_Left"); 
let maskRectLeft3_Right = document.getElementById("maskRectLeft3_Right"); 
let maskRectLeft4_Left = document.getElementById("maskRectLeft4_Left"); 
let maskRectLeft4_Right = document.getElementById("maskRectLeft4_Right");
let nineCircle = document.getElementById("nineCircle");
let stepsIcon = document.getElementById("stepsIcon");
let stepCountLabel = document.getElementById("stepCountLabel");
let heartIcon = document.getElementById("heartIcon");
let heartRateLabel = document.getElementById("heartRateLabel");
let clickRect = document.getElementById("clickRect");

let oneLabel = document.getElementById("oneLabel");
let twoLabel = document.getElementById("twoLabel");
let threeLabel = document.getElementById("threeLabel");
let fourLabel = document.getElementById("fourLabel");
let fiveLabel = document.getElementById("fiveLabel");
let sixLabel = document.getElementById("sixLabel");
let sevenLabel = document.getElementById("sevenLabel");
let eightLabel = document.getElementById("eightLabel");
let nineLabel = document.getElementById("nineLabel");
let tenLabel = document.getElementById("tenLabel");
let elevenLabel = document.getElementById("elevenLabel");
let twelveLabel = document.getElementById("twelveLabel");

let colorState = 0;
const maxColorState = 6;

/**
 * Rotates the clock hands to show the curent time.
 */
function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  hourHandShadow.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  minuteHand.groupTransform.rotate.angle = minutesToAngle(mins);
  minuteHandShadow.groupTransform.rotate.angle = minutesToAngle(mins);
  secondHand.groupTransform.rotate.angle = secondsToAngle(secs);
  secondHandShadow.groupTransform.rotate.angle = secondsToAngle(secs);

  updateDesignColors();
  updateStepsField();
}

// Update the clock every tick event
clock.addEventListener("tick", updateClock);


/**
 * Returns an angle (0-360) for the current hour in the day.
 * Also adjust the hour hand for minutes past the hour.
 * @param {*} hours
 * @param {*} minutes
 * @returns
 */
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

/**
 * Returns an angle (0-360) for minutes
 * @param {*} minutes
 * @returns
 */
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

/**
 * Returns an angle (0-360) for seconds
 * @param {*} seconds
 * @returns
 */
function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

/**
 * Determines the correct color set and calls that color set to be rendered. 
 */
function updateDesignColors() {
  if (colorState === undefined || colorState === null || colorState > maxColorState) {
    colorState = 0;
  }

  switch (colorState) {
    case 0:
      renderColorSetOne();
      break;
    case 1:
      renderColorSetTwo();
      break;
    case 2:
      renderColorSetThree();
      break;
    case 3:
      renderColorSetFour();
      break;
    case 4: 
      renderColorSetFive();
    break;
    case 5:
      renderColorSetSix();
    break;
    case 6: 
    renderColorSetSeven();
  }
}

function renderColorSetOne() {
  const topHalfCircle = "darkorange";
  const bottomHalfCircle = "black";
  const skinnyRects = "greenyellow";
  const bigRectInside = "violet";
  const bigRectoutside = "greenyellow";
  const backgroundCircle = "deepskyblue";
  const topHalfNumbers = "black";
  const bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = topHalfNumbers;
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "black";
  heartIcon.style.fill = "black";
}

function renderColorSetTwo() {
  const paleYellow = "#ffce00";
  const paleBlue = "#94fffc";
  const redish = "#f640c1";
  const blueGreen = "#01eaa9";
  const purple = "#9e00b2";

  let topHalfCircle = purple;
  let bottomHalfCircle = "black";
  let skinnyRects = blueGreen;
  let bigRectInside = redish;
  let bigRectoutside = paleBlue;
  let backgroundCircle = paleYellow;
  let topHalfNumbers = "white";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = "black";
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "black";
  heartIcon.style.fill = "black";
}

function renderColorSetThree() {
  const pink = "#f7adce";
  const blue = "#7fd3f7";
  const green = "#84f2b3";
  const purple = "#c49bdf";
  const yellow = "#ffde17";

  let topHalfCircle = purple;
  let bottomHalfCircle = "black";
  let skinnyRects = yellow;
  let bigRectInside = pink;
  let bigRectoutside = green;
  let backgroundCircle = blue;
  let topHalfNumbers = "black";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = "black";
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "black";
  heartIcon.style.fill = "black";
}

function renderColorSetFour() {
  const bluegreen = "#309898";
  const yellow = "#FF9F00";
  const orange = "#F4631E";
  const red = "#CB0404";

  let topHalfCircle = red;
  let bottomHalfCircle = "black";
  let skinnyRects = bluegreen;
  let bigRectInside = bluegreen;
  let bigRectoutside = orange;
  let backgroundCircle = yellow;
  let topHalfNumbers = "white";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = "black";
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "black";
  heartIcon.style.fill = "black";
}

function renderColorSetFive() {
  const white = "#F5F2F2";
  const orange = "#FEB05D";
  const blue = "#5A7ACD";
  const black = "#2B2A2A";

  let topHalfCircle = blue;
  let bottomHalfCircle = black;
  let skinnyRects = white;
  let bigRectInside = white;
  let bigRectoutside = orange;
  let backgroundCircle = orange;
  let topHalfNumbers = "white";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = "black";
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "black";
  heartIcon.style.fill = "black";
}

function renderColorSetSix() {
  const darkPurple = "#450693";
  const purple = "#8C00FF";
  const red = "#FF3F7F";
  const yellow = "#FFC400";

  let topHalfCircle = purple;
  let bottomHalfCircle = "black";
  let skinnyRects = darkPurple;
  let bigRectInside = purple;
  let bigRectoutside = red;
  let backgroundCircle = yellow;
  let topHalfNumbers = "white";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = "black";
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "white";
  heartIcon.style.fill = "white";
}

function renderColorSetSeven() {
  const green = "#66cc33";
  const blue = "#02a5ff";
  const yellow = "#ffcc00";
  const red = "#ff3300";

  let topHalfCircle = blue;
  let bottomHalfCircle = "black";
  let skinnyRects = red;
  let bigRectInside = red;
  let bigRectoutside = green;
  let backgroundCircle = yellow;
  let topHalfNumbers = "white";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;
  nineCircle.style.fill = topHalfCircle;

  backgroundCircleB.style.fill = bottomHalfCircle;
  maskRectLeft2_Left.style.fill = bottomHalfCircle;
  maskRectLeft3_Left.style.fill = bottomHalfCircle;
  maskRectLeft4_Left.style.fill = bottomHalfCircle;

  maskRectLeft1_Right.style.fill = skinnyRects;
  maskRectLeft2_Right.style.fill = skinnyRects;
  maskRectLeft3_Right.style.fill = skinnyRects;
  maskRectLeft4_Right.style.fill = skinnyRects;

  maskRectRight_Left.style.fill = bigRectInside;
  maskRectRight_Right.style.fill = bigRectoutside;

  innerCircle.style.fill = backgroundCircle;

  oneLabel.style.fill = topHalfNumbers;
  twoLabel.style.fill = topHalfNumbers;
  threeLabel.style.fill = "black";
  nineLabel.style.fill = topHalfNumbers;
  tenLabel.style.fill = topHalfNumbers;
  elevenLabel.style.fill = topHalfNumbers;
  twelveLabel.style.fill = topHalfNumbers;

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;

  heartRateLabel.style.fill = "white";
  heartIcon.style.fill = "white";
}

/**
 * Listens for user to click the watch screen to update color state.
 */
clickRect.addEventListener("click", (evt) => {
  colorState++;
  if (colorState > maxColorState) {
    colorState = 0;
  }
  updateDesignColors();
});

////////////////////////
// HeartRateSensor code
////////////////////////
// default value for heart rate label
heartRateLabel.text = "";

if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
  if (HeartRateSensor) {
    heartIcon.image = "heart.png"
    let hrm = new HeartRateSensor();
    
    hrm.onreading = function () {
      // Peek the current sensor values
      let rate = hrm.heartRate;

      // guard against values we don't want to display
      if (rate === undefined || rate === null || rate < 0) {
        rate = "?"
      }

      heartRateLabel.text = rate;
    }

    display.addEventListener("change", () => {
      // Automatically stop the sensor when the screen is off to conserve battery
      display.on ? hrm.start() : hrm.stop();
    });
    hrm.start();

    // And update the display every 1 second
    setInterval(hrm.onreading, 1000);
  }
} else {
    heartRateLabel.text = "";
    heartIcon.image = ""
}

/**
 * Sets the steps field. 
 */
function updateStepsField() {
  if (appbit.permissions.granted("access_activity")) {
    stepCountLabel.text = getSteps().formatted;
    stepsIcon.image = "steps.png"

  } else {
    stepCountLabel.text = "";
    stepsIcon.image = ""
  }
}

/**
 * Gets and formats user step count for the day.
 * @returns 
 */
function getSteps() {
    let val = activity.adjusted.steps || 0;
    return {
        raw: val,
        formatted:
            val > 999
                ? `${Math.floor(val / 1000)},${("00" + (val % 1000)).slice(-3)}`
                : val,
    };
}