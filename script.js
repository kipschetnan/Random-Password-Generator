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
  let lowerCase = confirm('Do you want to include lowercase letters?');
  return lowerCase;
}

function includeUpper() {
  let upperCase = confirm('Do you want to include uppercase letters?');
  return upperCase;
}

function includeNumeric() {
  let numeric = confirm('Do you want to include numbers?');
  return numeric;
}

function includeSpecialChars() {
  let specialChars = confirm('Do you want to include special characters?');
  return specialChars; 
}

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const chars = ['!','@','#','$','%','^','&','*','(',')'];

function generatePassword() {
  const length = promptLength();
  let lower = includeLower();
  let upper = includeUpper();
  let numeric = includeNumeric();
  let specialChars = includeSpecialChars();
  let mainArray = [];
  let password = ''

  if (lower === false && upper === false && numeric === false && specialChars === false) {
    alert('Pick at least one special character.');
    generatePassword();
  }

  if (lower) {
    mainArray = mainArray.concat(lowerAlpha);
  }
  if (upper) {
    mainArray = mainArray.concat(upperAlpha);
  }
  if (numeric) {
    mainArray = mainArray.concat(numbers);
  }
  if (specialChars) {
    mainArray = mainArray.concat(chars);
  }
  
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * mainArray.length);
    password += mainArray[randomNumber];
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
