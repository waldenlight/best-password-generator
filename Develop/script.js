// Assignment code here

// Declare variables
var passwordMinLength = prompt("What do you want the minimum length of the password to be?");
var passwordMaxLength = prompt("What do you want the maximum length of the password to be?");
var lowercaseCharacters = confirm("Would you like lowercase characters to be included?")
var uppercaseCharacters = confirm("Would you like uppercase characters to be included?")
var specialCharacters = confirm("Would you like special characters to be included?")

// Set password length
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var passwordLength = randomNum(passwordMinLength, passwordMaxLength);

// Declare arrays to pull from
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseAlphabet = uppercaseAlphabet.toLocaleString().toLowerCase().split(',');

// Generate password
var generatePassword = function () {
  password = []
  for (var i = 0; i < passwordLength; i++) {
  }
}

generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
