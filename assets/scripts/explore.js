// explore.js

window.addEventListener('DOMContentLoaded', init);

var synth, voices, utterance;
var text = '';

function init() {
  loadVoices();

  let inputText = document.getElementById('text-to-speak');
  let button = document.querySelector('button');
  let img = document.querySelector('img');

  inputText.addEventListener('input', function(){
    text = inputText.value;
  });

  button.addEventListener('click', function(){
    utterance = new SpeechSynthesisUtterance(text);
    let selectedOption = document.getElementById('voice-select').selectedOptions[0].getAttribute('data-name');

    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    img.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);
    utterance.addEventListener('end', () => {
      img.src = 'assets/images/smiling.png';
    });
  });
}


function loadVoices(){
  synth = window.speechSynthesis;

  setTimeout(() => {
    voices = synth.getVoices();

    for (var i = 0; i < voices.length; i++){
      var opt = document.createElement('option');
      opt.textContent = voices[i].name + ' (' + voices[i].lang + ' )';
      opt.setAttribute('data-name', voices[i].name);

      document.getElementById('voice-select').appendChild(opt);
    }
  }, 50);
}