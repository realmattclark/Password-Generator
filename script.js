var generateBtn = document.querySelector("#generate");
var lowerCaseletters = ['a','b','c','d','e','f','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['@','!','#','$','%','^','&','*','(',')','\\','[',']','-','{','}'];

confirm('Capital Letters?')
if(true) {
  characters.toUpperCase(i = 0, i < 9, i++)
}
confirm('Special Characters?')
if(true) {
  var fullPassword = [numbers + characters];
}

function getPassword() {
  var length = parseInt(
    prompt('How long would you like your new password to be?')
  )

  if (isNaN(length) === true) {
    alert('Password length must be number')
    return;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters.')
  }

  if (length > 129) {
    alert('Password can not exceed 129 characters.');
    return;
  }

  var withSpecialCharacters = confirm(
    'Press OK to include special characters.'
  );

  var hasNumbers = confirm(
    'Press OK to include numbers'
  );

  var hasLowercase = confirm(
    'Press OK to include lowercase letters.'
  );

  var hasUppercase = confirm(
    'Press OK to include uppercase letters.'
  );

  if (
    withSpecialCharacters === false &&
    hasNumbers === false &&
    hasLowercase === false &&
    hasUppercase === false
  ) {
    alert('You must select one character type!');
    return;
  }
var passwordReturn = {
  length = length,
  hasNumbers = hasNumbers,
  withSpecialCharacters = withSpecialCharacters,
  hasLowercase = hasLowercase,
  hasUppercase = hasUppercase
};

return passwordReturn;
};

function makeRandom(arr) {
  var randomindex = Math.floor(math.Random() * arr.length);
  var randomElement = arr[randomindex];

  return randomElement;
};

function generatePassword() {
  var options = getPassword();
  

  var result = [];
  var allCharacters = [];
  var actualCharacters = [];

  if (options.withSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
    actualCharacters = actualCharacters.push(getRandom(numbers));
  }

  if (options.hasLowercase) {
    allCharacters = allCharacters.concat(lowerCaseletters);
    actualCharacters = actualCharacters.push(getRandom(lowerCaseletters));
  }

  if (options.hasUpperCasedCharacters) {
    allCharacters = possibleCharacters.concat(upperCaseletters);
    actualCharacters.push(getRandom(upperCaseletters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
  } 
  
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}



generateBtn.addEventListener("click", writePassword);

