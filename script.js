// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordLength = undefined;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","#","$","%","&","*","+",":",";","?","@","^","-","_","="];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// MAY USE THIS IN THE FUTURE TO JUST CHANGE THE CODE TO CAPS.  MAY RETURN LATER IN PROJECT TO TRY
// for (let i = 0; i < lowerCase.length; i++) {
//   lowerCase[i] = lowerCase[i].toUpperCase();
// concat?????
//  }

// sudo  do you want this?  yes add to list
var choices = 0;

function generatePassword() {
  console.log("test")
  var newPassword = "";
  var usedChars = [];
  passwordLength = prompt("Welcome to my password generator!  Let's get started.  First off, how many digits long would you like your password to be?  (Must be between 8 & 128)");
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) {
    passwordLength = prompt("Invalid response.  Please enter a number between 8 - 128")
  };
  if (confirm("Would you like to include lower case letters in your password?  If so, click \"Confirm\".  If not, click \"Cancel\"")) {
    usedChars = usedChars.concat(lowerCase);
    choices++;
  };
  if (confirm("Would you like to include UPPER CASE LETTERS in your password?  If so, click \"Confirm\".  If not, click \"Cancel\"")) {
    usedChars = usedChars.concat(lowerCase.map(function(x){ return x.toUpperCase()}));
    array2 = array2.map(function(x){ return x.toUpperCase() })
    choices++;
  };
  if (confirm("Would you like to include special characters (e.g. - #$?%^) in your password?  If so, click \"Confirm\".  If not, click \"Cancel\"")) {
    usedChars = usedChars.concat(specialChar);
    choices++;
  };
  if (confirm("Would you like to include numbers in your password?  If so, click \"Confirm\".  If not, click \"Cancel\"")) {
    usedChars = usedChars.concat(numbers)
    choices++;
  };
  if (choices < 1) {
    alert("Please select at least one type of character to use!");
    generatePassword();
  }
  for (i = 0; i < passwordLength; i++) {
    //this will randomly select which group the character will be chosen from
    var charGroupSelector = usedChars[Math.floor(Math.random() * usedChars.length ) ];
    //this will randomly select which individual character will be chosen
    var specificCharSelector = charGroupSelector[Math.floor(Math.random() * charGroupSelector.length) ];
    //this will assign the new character to the newPassword
    newPassword = newPassword.concat(specificCharSelector)
  }
  return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
  var element = document.querySelector("#password");
  element.select();
  document.execCommand('copy');
  // const copyToClipboard = str => {
  //   const el = document.createElement('textarea');
  //   el.value = str;
  //   document.body.appendChild(el);
  //   el.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(el);
  // };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);