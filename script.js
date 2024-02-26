// build arrays
var Upper_Case = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(Upper_Case);
var lower_Case = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "q",
  "r",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(lower_Case);
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(Numbers);
var Special_char = [
  "!",
  "#",
  "$",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
];
console.log(Special_char);
//merge arrays
var merged = [];
console.log(merged);

//var output = "";
min_length = 7;
max_length = 129;
//check the prompt is beetween 8 and 128
function generatePassword() {
  var enter_pw_length = prompt(
    "Please enter password length between 8 and 128 characters "
  );

  if (enter_pw_length > min_length && enter_pw_length < max_length) {
    alert("Hello! I will make you a password");
    var want_uppercase = confirm("Do you want upper case letters");
    if (want_uppercase === true) {
      merged = merged.concat(Upper_Case);
      console.log(merged);
    }
    var want_lowercase = confirm("Do you want lower case letters");
    if (want_lowercase === true) console.log(merged);
    {
      merged = merged.concat(lower_Case);
      console.log(merged);
    }
    var want_numbers = confirm("Do you want numbers");
    if (want_numbers === true) {
      merged = merged.concat(Numbers);
      console.log(merged);
    }
    var want_symbols = confirm("Do you want symbols");
    if (want_symbols === true) {
      merged = merged.concat(Special_char);
      console.log(merged);
    }
  } else {
    alert("password length is incorrect");
  }
  var output = "";
  for (i = 0; i < enter_pw_length; i++) {
    output += merged[Math.floor(Math.random() * merged.length)];
    //var output = "";
    console.log(output);
  }
  return output;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
