// Assignment code here

// Declare variables
var passwordMinLength = prompt("What do you want the minimum length of the password to be?");
var passwordMaxLength = prompt("What do you want the maximum length of the password to be?");
var lowercaseCharacters = confirm("Would you like lowercase characters to be included?")
var uppercaseCharacters = confirm("Would you like uppercase characters to be included?")
var specialCharacters = confirm("Would you like special characters to be included?")

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
