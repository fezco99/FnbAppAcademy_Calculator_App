const add = document.querySelector("#add");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const minus = document.querySelector("#minus");
const equals = document.querySelector("#equals");
let newLine = true;
function digitBtnPressed(button) {
  if (newLine) {
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    let num = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = num + button;
  }
}

function AcButtonClick() {
  document.getElementById("inputBox").value = 0;
  newLine = true;
}
let value1;
let currentOperator;
function operatorBtnPressed(sign) {
  currentOperator = sign;
  value1 = parseInt(document.getElementById("inputBox").value);
  newLine = true;
}

function equalsBtnPressed() {
  let value2 = parseInt(document.querySelector("#inputBox").value);
  let final;
  switch (currentOperator) {
    case "+":
      final = value1 + value2;
      break;
    case "x":
      final = value1 * value2;
      break;
    case "/":
      final = value1 / value2;
      break;
    case "-":
      final = value1 - value2;
      break;
  }
  document.querySelector("#inputBox").value = final;
}
