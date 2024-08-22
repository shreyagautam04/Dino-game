var character = document.querySelector('#character');
var cactus = document.querySelector('#cactus');
var result=document.getElementById("result");
var score=document.getElementById("score");
var sound=document.getElementById("sound");
var count=0;
// var html = document.querySelector('html');

function jump(){
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
    setTimeout(()=>{
      character.classList.remove("animate");
    },1000)
    count++;
    sound.play()
}
var gameOver = setInterval(()=>{
  var dinoTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if(cactusLeft<70 && cactusLeft>0 && dinoTop>=110){
    cactus.style.animation = "none";
    cactus.style.display = "none";
    document.querySelector('.result').style.display = "block";
    score.innerHTML=`Score: ${count}`;
  }
},10);