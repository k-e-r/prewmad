const nishi_box = document.getElementById('nishi_box');
const nishi = document.getElementById('nishi');
var current_z = nishi.style.zIndex;
nishi_box.addEventListener('mouseover', function() {
  mouseOver(nishi);
}, false);
nishi_box.addEventListener('mouseleave', function() {
  mouseLeave(nishi);
}, false);

const tuki_box = document.getElementById('tuki_box');
const tuki = document.getElementById('tuki');
tuki_box.addEventListener('mouseover', function() {
  mouseOver(tuki);
}, false);
tuki_box.addEventListener('mouseleave', function() {
  mouseLeave(tuki);
}, false);

const yama_box = document.getElementById('yama_box');
const yama = document.getElementById('yama');
yama_box.addEventListener('mouseover', function() {
  mouseOver(yama);
}, false);
yama_box.addEventListener('mouseleave', function() {
  mouseLeave(yama);
}, false);

const tanaka_box = document.getElementById('tanaka_box');
const tanaka = document.getElementById('tanaka');
tanaka_box.addEventListener('mouseover', function() {
  mouseOver(tanaka);
}, false);
tanaka_box.addEventListener('mouseleave', function() {
  mouseLeave(tanaka);
}, false);

const hinata_box = document.getElementById('hinata_box');
const hinata = document.getElementById('hinata');
hinata_box.addEventListener('mouseover', function() {
  mouseOver(hinata);
}, false);
hinata_box.addEventListener('mouseleave', function() {
  mouseLeave(hinata);
}, false);

const kage_box = document.getElementById('kage_box');
const kage = document.getElementById('kage');
kage_box.addEventListener('mouseover', function() {
  mouseOver(kage);
}, false);
kage_box.addEventListener('mouseleave', function() {
  mouseLeave(kage);
}, false);

const suga_box = document.getElementById('suga_box');
const suga = document.getElementById('suga');
suga_box.addEventListener('mouseover', function() {
  mouseOver(suga);
}, false);
suga_box.addEventListener('mouseleave', function() {
  mouseLeave(suga);
}, false);

const azuma_box = document.getElementById('azuma_box');
const azuma = document.getElementById('azuma');
azuma_box.addEventListener('mouseover', function() {
  mouseOver(azuma);
}, false);
azuma_box.addEventListener('mouseleave', function() {
  mouseLeave(azuma);
}, false);

const sawa_box = document.getElementById('sawa_box');
const sawa = document.getElementById('sawa');
sawa_box.addEventListener('mouseover', function() {
  mouseOver(sawa);
}, false);
sawa_box.addEventListener('mouseleave', function() {
  mouseLeave(sawa);
}, false);

// マウスが要素上に入った時
function mouseOver (chara) {
  current_z = chara.style.zIndex;
  chara.style.filter = "contrast(100%)";
  chara.style.zIndex = '10';
}

// マウスが要素上から離れた時
function mouseLeave (chara) {
  chara.style.filter = "contrast(55%)";
  chara.style.zIndex = current_z;
}
