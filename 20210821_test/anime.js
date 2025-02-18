var start = 0;

window.onload = function() {
  start = 1;
}


let count = 0;
const kenma = document.getElementById('kenma');
const kuro = document.getElementById('kuro');
const orig_k_width = kenma.naturalWidth;
const orig_ku_width = kuro.naturalWidth;
var current_k_width = kenma.width;
var current_ku_width = kuro.width;
var val = current_k_width;
var val_ku = current_ku_width;

const countUp = () =>{
  current_k_width = kenma.width;
  current_ku_width = kuro.width;
  console.log(count++);
  if (current_k_width > orig_k_width) {
    val -= 100;
    console.log(String(val));
    // kenma.width = 100;
    document.getElementById('kenma').style.width = String(val) + 'px';
  } else if (current_ku_width > orig_ku_width) {
    kuro.style.visibility = 'visible';
    val_ku -= 100;
    console.log(String(val_ku));
    // kenma.width = 100;
    document.getElementById('kuro').style.width = String(val_ku) + 'px';

  }
}

const intervalId = setInterval(() =>{
  if (start === 1) countUp();
  if(count > 15){　
    clearInterval(intervalId);　//intervalIdをclearIntervalで指定している
  }}, 500);
