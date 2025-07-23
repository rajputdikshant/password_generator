const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

function generatePassword(length = 14) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

document.addEventListener('DOMContentLoaded', () => {
  // Panel 1
  const generateBtn1 = document.getElementById('generate-btn-1');
  const passwordField1a = document.getElementById('generated-password-1a');
  const passwordField1b = document.getElementById('generated-password-1b');
  generateBtn1.addEventListener('click', () => {
    passwordField1a.value = generatePassword();
    passwordField1b.value = generatePassword();
  });

  // Panel 2
  const generateBtn2 = document.getElementById('generate-btn-2');
  const passwordField2a = document.getElementById('generated-password-2a');
  const passwordField2b = document.getElementById('generated-password-2b');
  generateBtn2.addEventListener('click', () => {
    passwordField2a.value = generatePassword();
    passwordField2b.value = generatePassword();
  });
}); 