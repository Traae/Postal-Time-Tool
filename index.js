// USPS Time Tool

// CLOCK
function startTime() {
  var time = new Date();
  var clock = time.toLocaleTimeString("en-US", { hour12: true });

  var h = time.getHours();
  var m = time.getMinutes();

  document.getElementById("uspsclock").innerHTML = convertToPostalTime(h, m);
  document.getElementById("normalclock").innerHTML = clock;

  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();

// CONVERT TO POSTAL
function convertToPostalTime(hour, minute) {
  var h = formatNumber(hour);

  var m = Math.floor((minute / 60) * 100);
  m = formatNumber(m);

  return h + m;
}
function convertToPostalButton() {
  var input = document.getElementById("timeInput");
  var output = convertToPostalTime(
    parseInt(input.value.slice(0, 2)),
    parseInt(input.value.slice(3, 5))
  );
  document.getElementById("convertToPostal").innerHTML = output;
}
function formatNumber(n) {
  if (n < 10) {
    return "0" + n;
  }
  return "" + n;
}

// CONVERT TO NORMAL
function convertToNormalTime(postal) {
  // expecting a 4 character string representing postal time
  var t = new Date();

  var h = parseInt(postal.slice(0, 2));
  var m = parseInt(postal.slice(2, 4));

  t.setHours(h);
  t.setMinutes(Math.floor((m / 100) * 60));

  return t.toLocaleTimeString("en-US", { hour12: true, timeStyle: "short" });
}
function convertToNormalButton() {
  var input = document.getElementById("postalInput");
  // input should only be 4 characters
  document.getElementById("convertToNormal").innerHTML = convertToNormalTime(
    input.value
  );
}

// // STOP WATCH
// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop');
// let resetBtn = document.getElementById('reset');

// let hour = 00;
// let minute = 00;
// let second = 00;
// let count = 00;

// startBtn.addEventListener('click', function () {
//     timer = true;
//     stopWatch();
// });

// stopBtn.addEventListener('click', function () {
//     timer = false;
// });

// resetBtn.addEventListener('click', function () {
//     timer = false;
//     hour = 0;
//     minute = 0;
//     second = 0;
//     count = 0;
//     document.getElementById('hr').innerHTML = "00";
//     document.getElementById('min').innerHTML = "00";
//     document.getElementById('sec').innerHTML = "00";
//     document.getElementById('count').innerHTML = "00";
// });

// function stopWatch() {
//     if (timer) {
//         count++;

//         if (count == 100) {
//             second++;
//             count = 0;
//         }

//         if (second == 60) {
//             minute++;
//             second = 0;
//         }

//         if (minute == 60) {
//             hour++;
//             minute = 0;
//             second = 0;
//         }

//         let hrString = hour;
//         let minString = minute;
//         let secString = second;
//         let countString = count;

//         if (hour < 10) {
//             hrString = "0" + hrString;
//         }

//         if (minute < 10) {
//             minString = "0" + minString;
//         }

//         if (second < 10) {
//             secString = "0" + secString;
//         }

//         if (count < 10) {
//             countString = "0" + countString;
//         }

//         document.getElementById('hr').innerHTML = hrString;
//         document.getElementById('min').innerHTML = minString;
//         document.getElementById('sec').innerHTML = secString;
//         document.getElementById('count').innerHTML = countString;
//         setTimeout(stopWatch, 10);
// }

/*
const displayInput = document.getElementById("inputValue");

//Variables
const operators = ["-", "+", "%", "*", "/"];
let operations = [];
let currValue = "";

//Functions & Operations
function handleInteraction(value) {
  if (operators.includes(value)) {
    console.log("Clicked an operator: ", value);
    handleOperatorInput(value);
  } else {
    console.log("Clicked a numeric value: ", value);
    handleNumericInput(value);
  }
  updateUI();
}

function handleNumericInput(value) {
  if (value === "." && currValue.includes(".")) {
    return;
  }
  currValue += value;
}

function handleOperatorInput(value) {
  if (!currValue) {
    return;
  }
  if (value === "%") {
  }
  operations.push(currValue);
  operations.push(value);
  currValue = "";
}

function handleEvaluate() {
  if (operations.length === 0) {
    return;
  }
  let finalAmount = operations[0];
  let prevOperator = null;
  if (!currValue) {
    operations.pop();
  } else {
    operations.push(currValue);
    currValue = "";
  }
  for (let i = 1; i < operations.length; i++) {
    if (i % 2 === 0) {
      //Numeric value
      finalAmount = eval(`${finalAmount} ${prevOperator} ${operations[i]}`);
    } else {
      //Operator value
      prevOperator = operations[i];
    }
  }
  operations = [];
  currValue = finalAmount.toFixed(2);
  updateUI();
}

function handleReset() {
  currValue = "";
  operations = [];
  updateUI();
}

function updateUI() {
  const displayString = operations.join(" ") + " " + currValue;
  displayInput.innerText = displayString.trim() ? displayString : "0";
}

*/
