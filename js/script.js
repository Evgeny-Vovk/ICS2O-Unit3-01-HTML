// Created by: Evgeny
// Created on: mar 2022
// This file contains the JS functions for index.html

'use strict'
/*** This function calculates area and perimeter of trapezoid.***/
function calculate() {
  
  // input
  const lengthA = parseInt(document.getElementById('length-a').value)
  const lengthB = parseInt(document.getElementById('length-b').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = (lengthB + lengthA) / 2 * height

  // output
  document.getElementById('area').innerHTML = '<p>The area is: ' + area + ' cm².</p>'
}
