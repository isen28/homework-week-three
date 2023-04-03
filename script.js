// Generates a random password based on inputs
function generatePassword() {
  // Determines the password length and errors if it is outside the scope
  var password = "";
  var passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters."))
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Error: Password must be between 8 and 128 characters in length.")
      return "Error: Please try again";
    }
  // Gathers password parameters
  var lowercase = confirm("Use lowercase letters?")
  var uppercase = confirm("Use uppercase letters?")
  var numeric = confirm("Use numeric characters?")
  var special = confirm("Use special characters?")
  // Returns an error if no parameters are checked
  if (lowercase == false &&
      uppercase == false &&
      numeric == false &&
      special == false) {
        alert("Error: You must choose at least one parameter.")
        return "Error: Please try again";
      }
  //Finds characters for each position in length
  for (var i = 0; i < passwordLength; i++) {
    var charType = Math.floor(4 * Math.random());
    if (lowercase && charType == 0) {
      password = password + randomLowercase();
    } else if (uppercase && charType == 1) {
      password = password + randomUppercase();
    } else if (numeric && charType == 2) {
      password = password + randomNumeric();
    } else if (special && charType == 3) {
      password = password + randomSpecial();
    } else {
      i--;
    }

  }
  return password;
}
// Chooses a random lowercase letter
function randomLowercase() {
  var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
}
// Chooses a random uppercase letter
function randomUppercase() {
  var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
}
// Chooses a random number
function randomNumeric() {
  var numberList = "123456789";
  return numberList[Math.floor(Math.random() * numberList.length)];
}
// Chooses a random special character
function randomSpecial() {
  var specialList = "!@#$%^&*()_-`~':;{}[]+=|\"\\<>,.?/";
  return specialList[Math.floor(Math.random() * specialList.length)];
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
