var generateBtn = document.querySelector("#generate");
var characters = 'abcdefghijklmnopqrstuvwxyz' 
var numbers = '0123456789'


confirm('Capital Letters?')
if(true) {
  characters.toUpperCase(i = 0, i < 9, i++)
}
confirm('Special Characters?')
if(true) {
  var fullPassword = [numbers + characters];
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}



generateBtn.addEventListener("click", writePassword);

