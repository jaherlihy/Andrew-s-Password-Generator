
//These are the 4 strings that will be used to assemble a custom password 
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "012345678901234567890123456789";
var specialChar = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

//this is a blank value waitng for the user input PW length
var passwordLength = '';
//this has an empty value and is filled with 1-4 of the 4 strings at the top, based on what the user selects
var passwordArray = '';
//this variable is blank and is where the randomly generated PW is assigned
var randomPassword = '';



// Write password to the #password input
function generatePassword() {
  //Password length prompt starts here, it contains several if statements to ensure that the password is between 8-128 and is not a string or empty
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
//this is specifically here to make sure that the only input is numerical in value
  if (isNaN(passwordLength) == true)  {
    window.alert ("Input must be a number."); 
    generatePassword(); 
  }
 
// 4 password criteria prompts start here, it's more if statements that take user input in boolean form to add assign 1-4 of the arrays at the top into a new array that the random password will be generated from
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
  //this last part is to make sure that at least 1 of the 4 password criteria is selected
  if (
    alphabetUpper == false &&
    alphabetLower == false &&
    numeric == false &&
    characters == false) {
      window.alert ("You must select at least one of the four password criteria.")
    } 


    if (passwordLength >= 8 && passwordLength <= 128 && isNaN(passwordLength) == false){
    //Here is where the random password generation takes place
    for (let i = 0; i < passwordLength; i++){
      ((randomPassword) += passwordArray[Math.floor(Math.random()*passwordArray.length)]);
    }
    console.log("randomPassword: ",randomPassword, randomPassword.length)

    //this returns the randomly generated PW to the function variable generatePassword 
    return randomPassword;
    }    
}
//password is writen to the browser window here
function writePassword() {
  //the returned results of the generatePassword function are assigned to this variable
  var password = generatePassword();
  //this variable  is assigned the password ID from the HTML document
  var passwordText = document.querySelector("#password");
  //this makes the text value of the selected ID above fill with the randomly generated password 
  passwordText.value = password;
  
}

//I placed both listeners here for ease of maintenance in attempt to observe good javascript practices, one wouldn't work when placed at the top of page which is why they're here at the bottom
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);