//Draws the current value to the screen
function draw(){
  view[0].innerHTML = value;
}

//Adds two numbers together
function add(num1,num2){
 return num1 + num2;
}

//Subtracts number 2 from number 1
function sub(num1, num2){
  return num1 - num2;
}

//Multiplies two numbers together
function mult(num1, num2){
  return num1*num2;
}

//Divides number 2 from number 1
function divide(num1, num2){
  return num1/num2;
}

//Mods num2 with num1
function mod(num1, num2){
  return num1%num2;
}

//Saves the current value and given opperation for later use
function saveState(operation){
  savedValue = value;
  savedOperation = operation;
  value = 0;
  draw();
}

//clears the current value
function clearValue(){
  value = 0;
  draw();
}

//Uses the saved operation to decide what math function to use and outputs that result
function equals(){
  switch(savedOperation) {
    case '/':
      value = divide(savedValue, value);
      break;
    case '*':
      value = mult(savedValue, value);
      break;
    case '-':
      value = sub(savedValue,value);
      break;
    case '+':
      value = add(savedValue, value);
      break;
  }
  savedOperation = 'none';
  savedValue = 0;
  draw();
}

//Appends the digit to the current value
function addDigit(num){
  value = Number(value.toString() + num.toString());
  draw();
}

//Initialize the variables
var view = document.getElementsByClassName("text-screen");
var value = 0;
var savedValue = 0;
var savedOperation = 'none';
draw();
