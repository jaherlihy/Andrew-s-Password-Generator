
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "012345678901234567890123456789";
var specialChar = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

var passwordLength = '';
var passwordArray = '';
var randomPassword = '';



var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function generatePassword() {

  //Password length prompt starts here 
  passwordLength = window.prompt("Choose a password length of 8-128.");
  console.log("passwordLength: ", passwordLength);


  if (passwordLength === null ) {
    return;
  }

  if ((passwordLength > 128) ) {
    window.alert ("That password length is too long.") 
    generatePassword(); 
  }

  if ((passwordLength < 8) || (passwordLength === null)) {
    window.alert ("That password length is too short."); 
    generatePassword();
  }

  if (isNaN(passwordLength) == true)  {
    window.alert ("Input must be a number."); 
    generatePassword(); 
  }

 
// 4 password criteria prompts start here
  var alphabetLower = window.confirm("Do you want to use lowercase characters for this password?");
  console.log("Do you want to use lowercase characters for this password? " + alphabetLower); 
  
  if (alphabetLower === true) {
    passwordArray += alphaLower; 
    console.log("passwordArray: ", passwordArray);    
  }


  var alphabetUpper = window.confirm("Do you want to use uppercase characters for this password?");
  console.log("Do you want to use uppercase characters for this password? " + alphabetUpper);

  if (alphabetUpper === true) {
   passwordArray += alphaUpper; 
   console.log("passwordArray: ", passwordArray);    
  }


  var numeric = window.confirm("Do you want to use numbers for this password?");
  console.log("Do you want to use numbers for this password? " + numeric);
          
  if (numeric === true) {
   passwordArray += numbers;
   console.log("passwordArray: ", passwordArray);    
  }


  var characters = window.confirm("Do you want to use special characters for this password?");
  console.log("Do you want to use special characters for this password? " + characters);
          
  if (characters === true) {
   passwordArray += specialChar;
   console.log("passwordArray: ", passwordArray);    
  }
  
  if (
    alphabetUpper == false &&
    alphabetLower == false &&
    numeric == false &&
    characters == false) {
      window.alert ("You must select at least one of the four password criteria.")
    } 

    if (passwordLength >= 8 && passwordLength <= 128 && isNaN(passwordLength) == false){
      
    for (let i = 0; i < passwordLength; i++){
      ((randomPassword) += passwordArray[Math.floor(Math.random()*passwordArray.length)]);
    }
    console.log("randomPassword: ",randomPassword, randomPassword.length)

    // window.alert(randomPassword);
    // writePassword();
    return randomPassword;
    }

    
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);


