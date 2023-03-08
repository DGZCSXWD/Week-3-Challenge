"use strict";

// Assignment Code

var generateBtn = document.querySelector("#generate");

const generatePassword = function () {
  const passwordLength = Number(
    prompt(
      `Plese specify the length of the password. \n \n(The length of password should be at least 8 characters but not more than 128 characters.)`
    )
  );

  console.log(typeof passwordLength);
  console.log(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input! Password length must be a number between 8 to 128.");
    return;
  }

  // if (passwordLength < 8 || passwordLength > 128) {
  //   const check = confirm(
  //     `The length of password should be at least 8 characters but not more than 128 characters!!!`
  //   );
  //   if (check) {
  //     generatePassword();
  //   } else {
  //     return;
  //   }
  // }

  const numerics = confirm(`Do you want the password to contain numerics?`);
  const lowercase = confirm(
    `Do you want the password to contain lowercase letters?`
  );
  const uppercase = confirm(
    `Do you want the password to contain uppercase letters?`
  );
  const specialCharacter = confirm(
    `Do you want the password to contain special characters?`
  );

  if (numerics || lowercase || uppercase || specialCharacter) {
    const check = confirm(
      `Please confirm all the options you have chosen: \n \nCharacter lenght: ${passwordLength} \nNumerics: ${
        numerics ? "yes" : "no"
      } \nLowercase Letters: ${lowercase ? "yes" : "no"} \nUppercase Letters: ${
        uppercase ? "yes" : "no"
      } \nSpecial Characters: ${specialCharacter ? "yes" : "no"} `
    );

    if (!check) {
      generatePassword();
    }
  } else {
    alert(`At least ONE chacracter type should be selected!`);
    generatePassword();
  }

  let finalPassword = "";

  const creatNum = function () {
    const num = Math.floor(Math.random() * 10);
    finalPassword = finalPassword + num;
  };

  const creatLower = function () {
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const lowerLetter = lowers[Math.floor(Math.random() * lowers.length)];
    finalPassword = finalPassword + lowerLetter;
  };

  const creatUpper = function () {
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const upperLetter = uppers[Math.floor(Math.random() * uppers.length)];
    finalPassword = finalPassword + upperLetter;
  };

  const creatSpecial = function () {
    const specials = "~!@#$%^&*";
    const special = specials[Math.floor(Math.random() * specials.length)];
    finalPassword = finalPassword + special;
  };

  let numOfCharType = 0;
  let arrFunction = [];

  if (numerics) {
    numOfCharType++;
    arrFunction.push(creatNum);
  }

  if (lowercase) {
    numOfCharType++;
    arrFunction.push(creatLower);
  }

  if (uppercase) {
    numOfCharType++;
    arrFunction.push(creatUpper);
  }

  if (specialCharacter) {
    numOfCharType++;
    arrFunction.push(creatSpecial);
  }

  for (const i of arrFunction) {
    i();
  }

  for (let i = 1; i <= passwordLength - arrFunction.length; i++) {
    const n = Math.floor(Math.random() * numOfCharType);
    arrFunction[n]();
  }

  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
