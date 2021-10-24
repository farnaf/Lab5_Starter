// expose.js

window.addEventListener('DOMContentLoaded', init);
var confettiFlag = false;
const canvas = document.querySelector('body');
const jsConfetti = new JSConfetti(canvas);

function init() {
  dropdown();
}

function dropdown(){
  const selectElement = document.getElementById('horn-select');
  const button = document.querySelector('button');
  const vol = document.getElementById('volume');

  selectElement.addEventListener('change', (event) => {changeImage(event)});
  selectElement.addEventListener('change', (event) => {changeSound(event)});
  button.addEventListener('click', event => {playSound()});
  vol.addEventListener('input', updateIcon);
}

function updateIcon(e){
  if (e.target.value < 1){
    document.getElementById('volume-controls').querySelector('img').setAttribute('src', 'assets/icons/volume-level-0.svg');
  } else if (e.target.value < 33){
    document.getElementById('volume-controls').querySelector('img').setAttribute('src', 'assets/icons/volume-level-1.svg');
  } else if (e.target.value < 67){
    document.getElementById('volume-controls').querySelector('img').setAttribute('src', 'assets/icons/volume-level-2.svg');
  } else {
    document.getElementById('volume-controls').querySelector('img').setAttribute('src', 'assets/icons/volume-level-3.svg');
  } 
}

function changeImage(event){
  if (event.target.value == 'air-horn'){
    const img = document.querySelector('img');
    img.setAttribute('src', 'assets/images/air-horn.svg');
  } else if (event.target.value == 'car-horn'){
    const img = document.querySelector('img');
    img.setAttribute('src', 'assets/images/car-horn.svg');
  } else if (event.target.value == 'party-horn'){
    const img = document.querySelector('img');
    img.setAttribute('src', 'assets/images/party-horn.svg');
  }
}

function changeSound(event){
  const audio = document.querySelector('audio');
  if (event.target.value == 'air-horn'){
    audio.setAttribute('src', 'assets/audio/air-horn.mp3');
    confettiFlag = false;
  } else if (event.target.value == 'car-horn'){
    audio.setAttribute('src', 'assets/audio/car-horn.mp3');
    confettiFlag = false;
  } else if (event.target.value == 'party-horn'){
    audio.setAttribute('src', 'assets/audio/party-horn.mp3');
    confettiFlag = true;
  }
}

function playSound(){
  var audio = new Audio(document.querySelector('audio').src);
  audio.volume = document.getElementById('volume').value / 100;
  
  if (confettiFlag && audio.volume > 0){
    jsConfetti.addConfetti();
  }

  audio.play();
}

// function changeSoundImage(event){
//   if (event.target.value == 0){
//     let image = document.getElementById('volume-controls').getElementsByTagName('img');
//     image.setAttribute('src','assets/icons/volume-level-0.svg');
//   }
// }