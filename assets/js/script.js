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
var char = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"

generateBtn.addEventListener("click", writePassword);

// create the generatePassword function that will create a random set of characters
// based on what the user determines they want to use from prompts & confirms
var generatePassword = function(){


// creates first prompt for user to enter the length of the password. If answer is outside
// params, asks them to enter again & closes if outside again.
// stores answer in a variable called passLen

    var passLen = prompt("How many characters would you like your password to have? (Must be between 8 & 128 characters.");
        if(passLen < 8 || passLen > 128){
            passLen = prompt("Must be between 8 & 128. How many characters would you like in your password?")
        }
        if(passLen < 8 || passLen > 128){
            return;
        }

// stores true or false for each confirm choice
    var numbers =  confirm("Would you like numbers in your password?");
    var upper =  confirm("Would you like uppercase letters in your password?");
    var lower = confirm("Would you like lowercase letters in your password?");
    var specialChar = confirm("Would you like special characters in your password?");

// stops function from running if non variables are selected so program
// does not freeze
    if(!numbers && !upper && !lower && !!specialChar){
        return;
    }

// sets a password1 value equal to an empty string
    var password1 = ""

// creates loop to go through only one conditional per loop until it runs the
// amount of times the length of the password reaches the user length

    for(var i=0; password1.length < passLen; i++){
        if(numbers && i%4==0){
            password1 += Math.floor(Math.random() * 10);
        } 

        if(upper && i%4==1){
            password1 += upperAlph[Math.floor(Math.random() * upperAlph.length)];
        } 

        if(lower && i%4==2){
            password1 += lowerAlph[Math.floor(Math.random() * lowerAlph.length)];
        } 

        if(specialChar && i%4==3){
            password1 += char[Math.floor(Math.random() * char.length)];
        }

        console.log(password1)
        console.log(i)
    }

// creates the generated password
    return password1

}



    



// pseudo code for password generator code struction

// structure
// ask how many characters - store this number as length
// ask if they want numbers - store true or false as numbers
// ask if they want uppercase - store true or false upper
// ask if they want lowercase - store true or false as lower
// ask if they want special characters - store true or false as lower
// for true values values generate random for each variable
// have it loop with random until character length is hit
// print password in password area