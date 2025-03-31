// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the salary.
 */
function hoursWorked() {
  // input
  let hoursWorked = parseFloat(document.getElementById('hours-worked').value);
  let hourlyRate = parseFloat(document.getElementById('hourly-rate').value);
    const TAX = 20.05;
  

  // process
    let gross = hoursWorked * hourlyRate;
    let govPay = gross * TAX / 100;
    let net = gross - govPay;

  // output
    document.getElementById("gov-pay").innerHTML = "The Government Takes: " + gross.toFixed(2) + "$";
    document.getElementById("net-pay").innerHTML = "Your net pay is: " + net.toFixed(2) + "$";
}
