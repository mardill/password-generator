// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

var lowerAlph = "abcdefghijklmnopqrstuvwxyz"
var upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var char = "!@#$%^&*()"

generateBtn.addEventListener("click", writePassword);

var generatePassword = function(){

    var passLen = prompt("How many characters would you like your password to have? (Must be between 8 & 128 characters.");
    var numbers =  confirm("Would you like numbers in your password?");
    var upper =  confirm("Would you like uppercase letters in your password?");
    var lower = confirm("Would you like lowercase letters in your password?");
    var specialChar = confirm("Would you like special characters in your password?");

    var password1 = ""

    
    for(var i=0; i < passLen; i++){
        if(numbers){
            password1 += Math.floor(Math.random() * 10);
        } 

        if(upper){
            password1 += upperAlph[Math.floor(Math.random() * upperAlph.length)];
        } 

        if(lower){
            password1 += lowerAlph[Math.floor(Math.random() * lowerAlph.length)];
        } 

        if(specialChar){
            password1 += char[Math.floor(Math.random() * char.length)];
        }

        console.log(password1)
    }

    password2 = ""

    for(var i=0; i < passLen; i++){
        password2 += password1[Math.floor(Math.random() * password1.length)];
    }

    return password2

}



    


// return password1


// for(var i=0; i < passLen; i++){



            // if (numbers === true){
            // return Math.floor(Math.random() * 10) 
            // }

                        // if (upper === true){
            // return upperAlph[Math.floor(Math.random() * upperAlph.length)];
            // }

                //         if (lower === true){
    //         return lowerAlph[Math.floor(Math.random() * lowerAlph.length)];
    // }

// var generatePassword = function(){

  
//     confirm("Would you like numbers in your password?");
//           if (numbers === true){
//             return Math.floor(Math.random() * 10) 
//           }
  

// var passLen = prompt("How many characters would you like your password to have? (Must be between 8 & 128 characters.")
//     if(passLen < 8 || passLen > 128){
//         var passLen = prompt("Must be between 8 & 128. How many characters would you like in your password?")
//     }


// structure
// ask how many characters - store this number as length
// ask if they want numbers - store true or false as numbers
// ask if they want uppercase - store true or false upper
// ask if they want lowercase - store true or false as lower
// ask if they want special characters - store true or false as lower
// for true values values generate random for each variable
// have it loop with random until character length is hit
// print password in password area