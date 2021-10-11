// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = 8;
  var chars1 = ("0123456789");
  var chars2 = ("abcdefghijklmnopqrstuvwxyz");
  var chars3 = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var chars4 = ("!@#$%^&*(')';");
for ( var i = 0; i <== passwordLength i++){
  
}

  



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
