// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
var select = document.getElementById('voice-select');
let arr;

setTimeout(() => {
  arr = synth.getVoices();
  console.log(arr);
  for (var i = 0; i <= arr.length; i++){
    var opt = document.createElement('option');
    opt.value = arr[i].name;
    opt.innerHTML = arr[i].name; // show the option
    select.appendChild(opt);
  }
}, 50)

function init() {
}