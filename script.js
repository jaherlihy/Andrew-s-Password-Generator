// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//you're going to need loops and arrays / strings and indexing to make it work according to theo conditionals too


  var length = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128]
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"]
  


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  
  var passwordLength = window.prompt("Choose a password length of 8-128 (the default is 12).");

  if (!passwordLength) {
    return;
  }

  if (passwordLength <= 128 && passwordLength >= 8){
    characterSelect()

} else if (
  (passwordLength > 128) ) {
  window.alert ("That password length is too long.") 
  writePassword(); 

  } else if (
    passwordLength < 8) {
  window.alert ("That password length is too short."); 
  writePassword();

  } else if (
    typeof(passwordLegnth) !== 'number') {
      window.alert ("That input is not a number."); 
      writePassword(); 
    }

    
 function characterSelect() { 
   
  var alphabetLower = window.confirm("Do you want to use lowercase characters for this password?");

  if (!alphabetLower) {
    return;
  }

  function storeLower() { //I would just repeat this method for the rest of the yes/no questions and eventually have a combination of different booleans to use 
    
    if (alphabetLower == true) {
      var alphabetLower = true

    } else if (
      alphabetLower == false) {
      var alphabetLower = false
    }

  } 

    // var alphabetUpper = window.confirm("Do you want to use uppercase characters for this password?");

    // if (!alphabetUpper) {
    //   return;
    // }
  
    // if ((alphabetUpper == true) || (alphabetUpper == false )) {

    //   var numeric = window.confirm("Do you want to use numbers for this password?");
      
    //   if (!numeric) {
    //     return;
    //   }
    // }
    //   if ((numeric == true) || (numeric == false )) {

    //   var characters = window.confirm("Do you want to use special characters for this password?");
      
    //     if (!characters) {
    //      return;
    //     }
    //   }

    //   if ((characters == true) || (characters == false )) {

    //     generate()

    // }


    // function generate() {




    // }







}


  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  // var passwordLength = [];
  // var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

  

  // var passwordLength = window.prompt("Choose a password length of 6-128 (deault 12) ");







  passwordText.value = password;  



}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];




// var foo = [];
// var foo = array.prototype.fill()

// foo.length = 26;

// foo.fill("A");


// for (var i = 0; i < howeverLong; i++) {
// 	//pick something random
// 	foo.push(someRandomData);
// }
