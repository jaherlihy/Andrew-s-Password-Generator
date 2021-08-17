// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//you're going to need loops and arrays / strings and indexing to make it work according to theo conditionals too

var passwordArray = []

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"]

var bigArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

var passwordLength = window.prompt("Choose a password length of 8-128.");
console.log(passwordLength);

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
    window.alert ("Input must be a number."); 
    writePassword(); 
  }

  
  function characterSelect() { 

  var alphabetLower = window.confirm("Do you want to use lowercase characters for this password?");
  console.log(alphabetLower); 
  
  if (alphabetLower == true) {
    var passwordArray = alphaLower.concat(passwordArray);
    console.log(passwordArray);
  }

  var alphabetUpper = window.confirm("Do you want to use uppercase characters for this password?");
  console.log(alphabetUpper);

  if (alphabetUpper == true) {
    var passwordArray = alphaUpper.concat(passwordArray);
    console.log(passwordArray);
  }

  var numeric = window.confirm("Do you want to use numbers for this password?");
  console.log(numeric);
          
  if (numeric == true) {
    var passwordArray = numbers.concat(passwordArray);
    console.log(passwordArray);
  }

  var characters = window.confirm("Do you want to use special characters for this password?");
  console.log(characters);
          
  if (characters == true) {
    var passwordArray = specialChar.concat(passwordArray);
    console.log(passwordArray);
  }
  

          if (
            alphabetUpper == false &&
            alphabetLower == false &&
            numeric == false &&
            characters == false) {
              window.alert ("You must select at least one of the four password criteria.")
              characterSelect()

            } else {
            generate() 
            }
 

            function generate(){
              
             var randomItem = (passwordArray[Math.floor(Math.random()*passwordArray.length)]);
                  console.log (randomItem);

                  function buildPassword(randomItem) {
                    let randomPassword = 0;
                    for (let i = 0; i < passwordArray.length; i++) {
                      (passwordArray[Math.floor(Math.random()*passwordArray.length)])


                      
                    }
                    return randomPassword;
                    console.log(randomPassword);
                  }






                  // if (selectObject.options[i].selected) {
                  //   randomPassword++;
                  // }







              // let i = 0;
              // do {
              //   i += 1;
              //   console.log(i);
              // } while (i < passwordLength);
            
              
          //   function continueOn() {
          //   if (alphabetLower == true) {
          //     var randomItem = ((passwordKey)*(passwordArray[Math.floor(Math.random()*passwordArray.length)]));
          //     console.log (randomItem);
              
              
            
             

            
            
          //   }

             

          // }  
              



















            
          
                   

            

          
  }
            
}         

 











  


var password = generatePassword();
var passwordText = document.querySelector("#password");
 
passwordText.value = password;  




// Add event listener to generate button










}
generateBtn.addEventListener("click", writePassword);

















// var foo = [];
// var foo = array.prototype.fill()

// foo.length = 26;

// foo.fill("A");


// for (var i = 0; i < howeverLong; i++) {
// 	//pick something random
// 	foo.push(someRandomData);
// }