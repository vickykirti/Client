const inputnumber = document.getElementById("inputnumber");
const buttonsubmit = document.getElementById("buttonsubmit");

buttonsubmit.addEventListener("click", function () {
let randomnumber = Math.floor(Math.random() * 1000) + 1;
inputnumber.value = randomnumber;
})

//generates number between 1-100