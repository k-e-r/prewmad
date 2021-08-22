console.log('hello');

const img_box = document.getElementById('img_box');
const r_emp_box = document.getElementById('r_emp_box');
const mouse_box = document.getElementById('mouse_box');
const triangle_rs = document.getElementById('triangle_rs');
const triangle_rf = document.getElementById('triangle_rf');
var max_mouse_box = mouse_box.scrollWidth - mouse_box.clientWidth;
var max_img_box = img_box.scrollWidth - img_box.clientWidth;

window.onload = function() {
  check_position();
};

window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('resize', function(){
    check_position();
  });
});

function check_position() {
  const window_x = img_box.getBoundingClientRect().right;
  const sawa_x = r_emp_box.getBoundingClientRect().right;
  max_mouse_box = mouse_box.scrollWidth - mouse_box.clientWidth;
  max_img_box = img_box.scrollWidth - img_box.clientWidth;
  console.log(window_x);
  console.log(sawa_x);
  if (window_x < sawa_x) {
    triangle_rs.style.visibility = "visible";
    // triangle_rf.style.visibility = "visible";
  } else {
    triangle_rs.style.visibility = "hidden";
    // triangle_rf.style.visibility = "hidden";
  }
}

let count = 0, stop = 1;
let speed = 20;
triangle_rs.addEventListener('mouseover', function(event) {
  speed = 20;
  stop = 0;
  const intervalId = setInterval(() =>{
    r_move_func();
    if((count > 40) || (stop === 1)){　
      clearInterval(intervalId);
    }}, 100);
}, false);

triangle_rs.addEventListener('mouseleave', function() {
  stop = 1;
}, false);

triangle_rf.addEventListener('mouseover', function(event) {
  speed = 50;
  stop = 0;
  const intervalId = setInterval(() =>{
    r_move_func();
    if((count > 40) || (stop === 1)){　
      clearInterval(intervalId);
    }}, 100);
}, false);

triangle_rf.addEventListener('mouseleave', function() {
  stop = 1;
}, false);

function r_move_func() {
  console.log(stop);
  console.log(count++);
  console.log('max_scroll:');
  console.log(max_mouse_box);
  if (mouse_box.scrollLeft < max_mouse_box) {
    mouse_box.scrollLeft += speed;
    img_box.scrollLeft = mouse_box.scrollLeft;
    console.log(img_box.scrollLeft);
    console.log(mouse_box.scrollLeft);
  }
  if (mouse_box.scrollLeft >= max_mouse_box) { 
    triangle_rs.style.visibility = "hidden";
    count=99;
  }
}

