let generateButton = document.getElementById('generate');
let numberLength = document.getElementById('length');
let randomNumber = document.getElementById('result');

generateButton.onclick = function () {
  let randomNumberArray = [];

  for (let i = 0; i < numberLength.value; i++) {
    let randomNumber = Math.floor(Math.random() * (numberLength.value - 1) + 1);
    randomNumberArray.push(randomNumber);
  }

  randomNumber.innerText = randomNumberArray.join("");
}

numberLength.onchange = function (e) {
  let randomNumberArray = [];
  
  for (let i = 0; i < Number(e.target.value); i++) {
    let randomNumber = Math.floor(Math.random() * (Number(e.target.value) - 1) + 1);
    randomNumberArray.push(randomNumber);
  }
  return randomNumberArray.join("");
}

