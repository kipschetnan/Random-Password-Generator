// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptLength(message = "How many characters would you like") {
  let length = prompt(message);
  if (length < 8) {
    length = promptLength('Enter a length of at least 8 characters.');
  } else if (length > 128){
    length = promptLength('Enter a length of no more than 128 character.');
  }
  console.log(length);
  return length;
}

function includeLower() {
  let lowerCase = prompt('Do you want to include lowercase letters? Y/N');
  let lowerBool = false;
  if (lowerCase === 'Y'){
    lowerBool = true;
  } 
  return lowerBool;
}

function includeUpper() {
  let upperCase = prompt('Do you want to include uppercase letters? Y/N');
  let upperBool = false;
  if (upperCase === 'Y'){
    upperBool = true;
  } 
  return upperBool;
}

function includeNumeric() {
  let numeric = prompt('Do you want to include numbers? Y/N');
  let numericBool = false;
  if (numeric === 'Y'){
    numericBool = true;
  } 
  return numericBool;
}

function includeSpecialChars() {
  let specialChars = prompt('Do you want to include special characters? Y/N');
  let specialCharsBool = false;
  if (specialChars === 'Y'){
    specialCharsBool = true;
  }
  return specialCharsBool; 
}


function generatePassword() {
  const length = promptLength();
  const lower = includeLower();
  const upper = includeUpper();
  const numeric = includeNumeric();
  const specialChars = includeSpecialChars();

  if (lower === false && upper === false && numeric === false && specialChars === false) {
    alert('Pick at least one special character.')
    generatePassword();
  }
  
}

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
