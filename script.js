// Assignment code here
var passwordLengthC = [];
var passwordUpperC = ["Q","W","E","R","T","Y","U","I","O","P","L","K","J","H","G","F","D","S","A","Z","X","C","V","B","N","M"];
var passwordLowerC = ["q","w","e","r","y","u","i","o","p","l","k","j","h","g","f","d","s","a","z","x","c","v","b","n","m"];
var passwordSpecialC = ["!","#","$","%","&","(",")","*","+",",","-",".","/",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var passwordNumberC = ["1","2","3","4","5","6","7","8","9","0"];

var randomNumber = function () {
  var item = passwordLengthC[Math.floor(Math.random()*passwordLengthC.length)];
  return item;
};



var passwordLength = function(){
  var length = window.prompt("What is the desired length of the password?");
  if (length < 8 ){
    window.alert("minimum length 8");
     passwordLength();
  }
  else if(length > 128 ){
    window.alert("maximum length 128");
    passwordLength();
  }
  else  {
    return length;
  };
};


var passwordUpper = function(){
  
  
   var upperPrompt= window.confirm("Include uppercase characters?");
    if(upperPrompt) {
      passwordLengthC = passwordLengthC.concat(passwordUpperC);
    }
};

var passwordLower = function() {
  
  var lowerPrompt = window.confirm("Include lower case characters?");
  if(lowerPrompt){
    // add lowercase
     passwordLengthC = passwordLengthC.concat(passwordLowerC) ;
  }

};


var passwordSpecial = function() {
  
  var specialPrompt = window.confirm("Include special characters?");
  if (specialPrompt) {
    // add special
    passwordLengthC = passwordLengthC.concat(passwordSpecialC);
  }
};

var passwordNumber = function(){
  
  var numberPrompt = window.confirm("Include numbers?");
  if (numberPrompt) {
    // add number
    passwordLengthC = passwordLengthC.concat(passwordNumberC);
  }
};


var generatePassword = function(){
  var length = passwordLength();
  passwordUpper();
  passwordLower();
  passwordSpecial();
  passwordNumber();
  console.log(passwordLengthC);
  var passwordInput = "";
  for (let i = 0; i < length; i++) {
    passwordInput += randomNumber();
    
  }
  return passwordInput;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  passwordLengthC = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
