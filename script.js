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
var specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", ";", ":"];

// Generate password
var generatePassword = function () {
  // Declare empty string
  var password = ""

  // Check if lowercaseCharacters are wanted
  // Create a base password with lowercase characters
  if (lowercaseCharacters) {
    for (i = 0; i < passwordLength; i++) {
      var newCharacter = lowercaseAlphabet[randomNum(0, 25)];
      var password = password + newCharacter;
    }
    // Split password into an array of characters (as arrays are mutable)
    password = password.split("")
    // If uppercase characters are wanted, turn half of the password into uppercase letters
    if (uppercaseCharacters) {
      for (i = 0; i < passwordLength / 2; i++) {
        password[randomNum(0, passwordLength - 1)] = uppercaseAlphabet[randomNum(0, 25)];
      }
    }
    // Check if special characters are wanted in addition to the other characters
    if (specialCharacters) {
      for (i = 0; i < passwordLength / 4; i++) {
        password[randomNum(0, passwordLength - 1)] = specialCharactersArray[randomNum(0, 14)];
      }
    }
  } else if (uppercaseCharacters) {
    // Check if only uppercase characters are wanted
    // Create a base password with uppercase characters
    for (i = 0; i < passwordLength; i++) {
      var newCharacter = uppercaseAlphabet[randomNum(0, 25)];
      var password = password + newCharacter;
    }
    // Split password into an array of characters (as arrays are mutable)
    password = password.split("")
    // Check if special characters are wanted in addition to the uppercase characters
    if (specialCharacters) {
      for (i = 0; i < passwordLength / 4; i++) {
        password[randomNum(0, passwordLength)] = specialCharactersArray[randomNum(0, 14)];
      }
    }
  } else if (specialCharacters) {
    // Check if only special characters are wanted
    // Create a password with just special characters
    for (i = 0; i < passwordLength; i++) {
      var newCharacter = specialCharactersArray[randomNum(0, 14)];
      var password = password + newCharacter;
    }
  }

  // Message if no characters are selected
  if (!lowercaseCharacters && !uppercaseCharacters && !specialCharacters) {
    alert("You must enter some character criteria")
  }

  // Turn array of characters back into a string
  var finalPassword = password[0]

  for (i = 1; i < passwordLength; i++) {
    var finalPassword = finalPassword + password[i]
  }

  return finalPassword;
}

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
