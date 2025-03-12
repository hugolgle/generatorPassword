const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

const password = document.querySelector("#password");
const generateButton = document.querySelector("#generate-button");

// Password parameters
const passwordLength = document.querySelector("#password-length");
const passwordLower = document.querySelector("#password-lowercase");
const passwordUpper = document.querySelector("#password-uppercase");
const passwordNumber = document.querySelector("#password-number");
const passwordSymbol = document.querySelector("#password-symbol");

document.addEventListener("DOMContentLoaded", () => {
  generateButton.addEventListener("click", displayPassword);
  passwordLength.addEventListener("change", displayPassword);
  passwordLower.addEventListener("change", displayPassword);
  passwordUpper.addEventListener("change", displayPassword);
  passwordNumber.addEventListener("change", displayPassword);
  passwordSymbol.addEventListener("change", displayPassword);

  displayPassword();
});

function displayPassword() {
  password.textContent = generatePassword(
    passwordLength.value,
    passwordLower.checked,
    passwordUpper.checked,
    passwordNumber.checked,
    passwordSymbol.checked
  );
}

function generatePassword(length, lower, upper, number, symbol) {
  let tempCharacter = "";

  if (lower) tempCharacter += lowercaseLetters;
  if (upper) tempCharacter += uppercaseLetters;
  if (number) tempCharacter += numbers;
  if (symbol) tempCharacter += specialCharacters;

  if (tempCharacter === "") return "";

  let password = "";
  let tempCharacterLength = tempCharacter.length;

  for (let i = 0; i < length; i++) {
    password += tempCharacter[Math.floor(Math.random() * tempCharacterLength)];
  }

  return password;
}
