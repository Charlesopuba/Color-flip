const colors = ["green", "red", "rgba(133,122,200)"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click', function(){
//get random number btn 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//generate a function that shows random numbers
function getRandomNumber(){
    return Math.random()*colors.length;
}