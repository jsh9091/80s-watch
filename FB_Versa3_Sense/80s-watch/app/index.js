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

function updateDesignColors() {
  let topHalfCircle = "darkorange";
  let bottomHalfCircle = "black";
  let skinnyRects = "greenyellow";
  let bigRectInside = "violet";
  let bigRectoutside = "chartreuse";
  let backgroundCircle = "deepskyblue";
  let bottomHalfNumbers = "white";

  backgroundCircleT.style.fill = topHalfCircle;
  maskRectLeft1_Left.style.fill = topHalfCircle;
  backgroundCircleB2.style.fill = topHalfCircle;

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

  fourLabel.style.fill = bottomHalfNumbers;
  fiveLabel.style.fill = bottomHalfNumbers;
  sixLabel.style.fill = bottomHalfNumbers;
  sevenLabel.style.fill = bottomHalfNumbers;
  eightLabel.style.fill = bottomHalfNumbers;
  nineLabel.style.fill = bottomHalfNumbers;
}
