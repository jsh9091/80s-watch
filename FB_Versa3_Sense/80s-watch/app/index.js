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
let backgroundCircleT = document.getElementById("backgroundCircleT"); // yellow
let backgroundCircleB = document.getElementById("backgroundCircleB"); // orange
let innerCircle = document.getElementById("innerCircle"); // black
let maskRectRight_Right = document.getElementById("maskRectRight_Right"); // red
let maskRectRight_Left = document.getElementById("maskRectRight_Left"); // green
let maskRectLeft1_Left = document.getElementById("hourHand"); // yellow
let maskRectLeft1_Right = document.getElementById("maskRectLeft1_Right"); // green
let maskRectLeft2_Left = document.getElementById("maskRectLeft2_Left"); // orange 
let maskRectLeft2_Right = document.getElementById("maskRectLeft2_Right"); // green
let maskRectLeft3_Left = document.getElementById("maskRectLeft3_Left"); // orange 
let maskRectLeft3_Right = document.getElementById("maskRectLeft3_Right"); // orange 
let maskRectLeft4_Left = document.getElementById("maskRectLeft4_Left"); // orange 
let maskRectLeft4_Right = document.getElementById("maskRectLeft4_Right"); // orange 

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

