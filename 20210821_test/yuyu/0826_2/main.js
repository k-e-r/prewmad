/* --------- lording ---------- */
// onload = function() {
//     const gao = this.document.getElementById('loading');
//     gao.classList.add('loaded');
// }

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
// --------- click event ----------
function mouseOver() {
    console.log('over');
    document.getElementById('slideimg').classList.add('slideIn');
    document.getElementById('moji').classList.add('slide-in');
}
function mouseLeave() {
    document.getElementById('slideimg').classList.remove('slideIn');
    document.getElementById('moji').classList.remove('slide-in');
}