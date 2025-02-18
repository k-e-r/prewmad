/* --------- lording ---------- */
onload = function() {
    // const gao = document.getElementById('loading');
    // gao.classList.add('loaded');
}

/* --------- ham icon ---------- */
// let icon = document.querySelector('.icon');
// icon.addEventListener('click', () => {
//     icon.classList.toggle('show');
// })


// --------- click event ----------
const con1 = document.getElementById('con1');
con1.addEventListener('mouseover', function() {
    mouseOver();
}, false);
con1.addEventListener('mouseleave', function() {
    mouseLeave();
}, false);


// function mouseOver () {
//     console.log('slide-in1');
//     document.getElementById('slideimg').classList.add('slide-in', 'extend');
// }
// function mouseLeave () {
//     document.getElementById('slideimg').classList.remove('slide-in','extend');
// }

function mouseOver () {
    document.getElementById('slideimg').classList.add('slide-in', 'extend');
    document.getElementById('moji').classList.add('slideIn');
}
function mouseLeave () {
    document.getElementById('slideimg').classList.remove('slide-in','extend');
    document.getElementById('moji').classList.remove('slideIn');
}