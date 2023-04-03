// Assignment code here
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter a password length between 8 and 128 characters."))
  if (passwordLength < 8 || passwordLength > 128) {
      alert("Error: Password must be between 8 and 128 characters in length.")
    }
  var lowercase = confirm
}

// Get references to the #generate element
var generateBtn = document.quegirySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
