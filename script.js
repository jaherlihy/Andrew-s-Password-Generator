


// var passwordArray = [];

const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"];

let alphaLowAmount = 0;
let alphaUpAmount = 0;
let numbersAmount = 0;
let characterAmount = 0;

let lengthDivisor = 0;
// let remainder = passwordLength % lengthDivisor 
// var remainderArray 

let randomPassword = "";
let filterPassword = "";


// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  var passwordLength = window.prompt("Choose a password length of 8-128.");
  console.log(passwordLength);


  if (passwordLength === null ) {
    return;
  }

  if ((passwordLength > 128) ) {
    window.alert ("That password length is too long.") 
    writePassword(); 
  }

  if ((passwordLength < 8) || (passwordLength === null)) {
    window.alert ("That password length is too short."); 
    writePassword();
  }

  if (isNaN(passwordLength) == true)  {
    window.alert ("Input must be a number."); 
    writePassword(); 
  }

 


  var alphabetLower = window.confirm("Do you want to use lowercase characters for this password?");
  console.log("Do you want to use lowercase characters for this password? " + alphabetLower); 
  
  if (alphabetLower === true) {
    lengthDivisor += 1;
   
    console.log("length divisor = " + lengthDivisor);
  }


  var alphabetUpper = window.confirm("Do you want to use uppercase characters for this password?");
  console.log("Do you want to use uppercase characters for this password? " + alphabetUpper);

  if (alphabetUpper === true) {
    lengthDivisor += 1;
    
    console.log("length divisor = " + lengthDivisor);
  }


  var numeric = window.confirm("Do you want to use numbers for this password?");
  console.log("Do you want to use numbers for this password? " + numeric);
          
  if (numeric === true) {
    lengthDivisor += 1;
    console.log("length divisor = " + lengthDivisor);
  }

  var characters = window.confirm("Do you want to use special characters for this password?");
  console.log("Do you want to use special characters for this password? " + characters);
          
  if (characters === true) {
    lengthDivisor += 1;
    
    console.log("length divisor = " + lengthDivisor);
  }
  
  if (
    alphabetUpper == false &&
    alphabetLower == false &&
    numeric == false &&
    characters == false) {
      window.alert ("You must select at least one of the four password criteria.")
    } 

    if (passwordLength >= 8 && passwordLength <= 128 && isNaN(passwordLength) == false){
      generatePassword()
    }

    function generatePassword () {

    if (alphabetLower == true) {
      // alphaLowAmount = (passwordLength / lengthDivisor);
      alphaLowAmount += Math.floor(passwordLength / lengthDivisor);
      // filterPassword = randomPassword.filter(x => x !== undefined);
      console.log("lowercase alphabet characters amount to be used in PW: " + alphaLowAmount);

    
      for (let i = 0; i < alphaLowAmount; i++){
        ((randomPassword) += alphaLower[Math.floor(Math.random()*alphaLower.length)]);
        }
      

      // randomPassword = alphaLower.filter(x => x !== undefined);
      console.log("randomPassword: ", randomPassword, randomPassword.length)
    } 
 
    if (alphabetUpper == true) {
      // alphaUpAmount += (passwordLength / lengthDivisor);
      alphaUpAmount += Math.floor(passwordLength / lengthDivisor);
      // randomPassword.filter(x => x !== undefined);
      console.log("uppercase alphabet characters amount to be used in PW: " + alphaUpAmount);

      for (let i = 0; i < alphaLowAmount; i++){
        ((randomPassword) += alphaUpper[Math.floor(Math.random()*alphaUpper.length)]);
        }
      console.log("randomPassword: ",randomPassword, randomPassword.length)
    } 
 
    if (numeric == true) {
      // numbersAmount += (passwordLength / lengthDivisor);
      numbersAmount += Math.floor(passwordLength / lengthDivisor);
      console.log("numbers amount to be used in PW: " + numbersAmount);

      for (let i = 0; i < numbersAmount; i++){
        ((randomPassword) += numbers[Math.floor(Math.random()*numbers.length)]);
        }
      console.log("randomPassword: ",randomPassword, randomPassword.length)
    } 

    if (characters == true) {
      // characterAmount += (passwordLength / lengthDivisor);
      characterAmount += Math.floor(passwordLength / lengthDivisor);
      // randomPassword = specialChar.filter(x => x !== undefined);
      console.log("special characters amount to be used in PW: " + characterAmount);

      for (let i = 0; i < characterAmount; i++){
        ((randomPassword) += specialChar[Math.floor(Math.random()*specialChar.length)]);
        }
      console.log("randomPassword: ",randomPassword, randomPassword.length)
    } 
    

    // const numbers = [1,-1, 2, 3];

    // numbers.filter(function(value){
    //   return value >= 0;
    // });



    // if (randomPassword.includes(undefined)); {

    //   filterPassword = randomPassword.filter(x => x !== undefined);
    //   console.log("filtered password: ", filterPassword);

    // }












   ((randomPassword.length) - (passwordLength))
  console.log("(randomPassword.length) - passwordLength: "(randomPassword.length) - passwordLength);




  }

  



    var randomPassword = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = randomPassword;
  










removeItems(numbers, 2);


     randomPassword.splice(0,)


 















    

            
}    
  
            
          



// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
