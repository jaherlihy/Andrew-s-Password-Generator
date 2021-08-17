
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//you're going to need loops and arrays / strings and indexing to make it work according to theo conditionals too



var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"]



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


  // function storeLower() { 
    
  //   if (alphabetLower == true) {
  //     var alphabetLower = true

  //   } else if (
  //     alphabetLower == false) {
  //     var alphabetLower = false
  //   }

  // } 

  var alphabetUpper = window.confirm("Do you want to use uppercase characters for this password?");
  console.log(alphabetUpper);

      
        // function storeUpper() { 
        
        //   if (alphabetUpper == true) {
        //     var alphabetUpper = true
      
        //   } else if (
        //     alphabetUpper == false) {
        //     var alphabetUpper = false
        //   } 
        // }  

  var numeric = window.confirm("Do you want to use numbers for this password?");
  console.log(numeric);
          
      
          // function storeNumeric() { 
              
          //   if (numeric == true) {
          //     var numeric = true

          //   } else if (
          //     numeric == false) {
          //     var numeric = false
          //   }

          // } 

  var characters = window.confirm("Do you want to use special characters for this password?");
  console.log(characters);
          
          
          //   function storeCharacters() { 
              
          //   if (characters == true) {
          //     var characters = true

          //   } else if (
          //     characters == false) {
          //     var characters = false
          //   }

          // } 


          if (
            alphabetUpper == false &&
            alphabetLower == false &&
            numeric == false &&
            characters == false) {
              window.alert ("You must select at least one of four password criteria.")
              characterSelect()

            } else {
            generate() 
            }
 

            function generate(){
              var passwordKey = ((passwordLength) / ((alphabetLower) + (alphabetUpper) + (numeric) + (characters)));
              console.log (passwordLength);
              console.log(alphabetLower + alphabetUpper + numeric + characters);
              console.log(passwordKey);

              if ((passwordKey) % (1 != 0) == true) {
                console.log((passwordKey) % (1 != 0)); 
                passwordKey = Math.round(passwordKey) 
                console.log(Math.round(passwordKey));

              } else {
                continueOn()
              }
               // (passwordKey) % (1 != 0) == false){
                // passwordKey     

                // }
                
      
            

            function continueOn() {
            if (alphabetLower == true) {
              var randomItem = ((passwordKey)*(alphaLower[Math.floor(Math.random()*alphaLower.length)]));
              console.log (randomItem);

              

              var lcPWsegment = ((randomItem) * (passwordKey))
              console.log(lcPWsegment);



              // lowercasePW = (Math.floor(Math.random()) * alphabetLower.length);
              //             console.log(lowercasePW);


            // } else if (alphabetUpper == true) 



                




















            }
          
          }           

            

            // function generate(alphabetLower) {
  }
            //   return (alphabetLower ? "1" : "0")
}         //   if (alphabetLower == 1){
            //     var lower = alphabetLower * userPWlength 
                
            //   } else if (
            //     alphabetLower == 0)
            //     var lower = alphabetLower * userPWlength

            //   }

           

            
            // function generate(alphabetUpper) {

            //   return (alphabetUpper ? "1" : "0")
            //   if (alphabetUpper == 1){
            //     var upper = alphabetUpper * userPWlength 

            //   }

            // }


            // function generate(numeric) {

            //   return (numeric ? "1" : "0")
            //   if (numeric == 1){
            //     var nummer = numeric * userPWlength 

            //   }

            // }

            // function generate(characters) {

            //   return (characters ? "1" : "0")
            //   if (characters == 1){
            //     var chars = characters * userPWlength 

            //   }

            // }


            // upper + lower + nummer + chars = x



 











  


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