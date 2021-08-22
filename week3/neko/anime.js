// const kenma = document.getElementByClassName('kenma');
// const kuro = docment.getElementByClassName('kuro');
// const yaku = docment.getElementByClassName('yaku');
// const shiba = docment.getElementByClassName('shiba');
// const riefu = docment.getElementByClassName('riefu');
// const kai = docment.getElementByClassName('kai');
// const tora = docment.getElementByClassName('tora');
// const fuku = docment.getElementByClassName('fuku');
// const nyan = docment.getElementByClassName('nyan');

// let member = [kenma, kuro, yaku, shiba, riefu, kai, tora, fuku, nyan];

// onload = function() {
//     for(let i = 0; i > member.length; i++){

//     }
// }









var start = 0;

window.onload = function() {
    start = 1;
}

let count = 0;
const kenma = document.getElementById('kenma');
const kuro = document.getElementById('kuro');
const orig_k_width = kenma.naturalWidth;
const orig_ku_width = kuro.naturalWidth;
var current_k_width = kenma.Width;
var current_ku_width = kuro.Width;
var val_k = current_k_width;
var val_ku = current_ku_width;

const countUp = () =>{
    current_k_width = kenma.Width;
    current_ku_width = kuro.Width;
    console.log(count++);
    if(current_k_width > orig_k_width) {
        val_k -= 100;
        console.log(String(val_k));
        document.getElementById('kenma').style.width = String(val_k) + 'px';
    } else if(current_ku_width > orig_ku_width) {
        kuro.style.visibility = 'visible'
        val_ku -= 100;
        console.log(String(val_ku));
        document.getElementById('kuro'),style.width = String(val_ku) + 'px';
    }
}

const intervalId = setInterval(() => {
    if(start === 1) countUp();
    if(count > 15){
        clearInterval(intervalId);
    }
}, 500);