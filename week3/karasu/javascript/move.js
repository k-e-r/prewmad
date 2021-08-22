const img_box = document.getElementById('img_box');
const r_emp_box = document.getElementById('r_emp_box');
const l_emp_box = document.getElementById('l_emp_box');
const mouse_box = document.getElementById('mouse_box');
const triangle_rs = document.getElementById('triangle_rs');
const triangle_rf = document.getElementById('triangle_rf');
const triangle_ls = document.getElementById('triangle_ls');
const triangle_lf = document.getElementById('triangle_lf');
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
  const window_r = img_box.getBoundingClientRect().right;
  // const window_r = window.innerWidth;
  const window_l = img_box.getBoundingClientRect().left;
  const sawa_x = r_emp_box.getBoundingClientRect().right;
  const nishi_x = l_emp_box.getBoundingClientRect().left;
  max_mouse_box = mouse_box.scrollWidth - mouse_box.clientWidth;
  max_img_box = img_box.scrollWidth - img_box.clientWidth;
  // console.log(window_l);
  // console.log(nishi_x);
  if (window_r < sawa_x) {
    triangle_rs.style.visibility = "visible";
  } else {
    triangle_rs.style.visibility = "hidden";
  }
  if (window_l > nishi_x) {
    triangle_ls.style.visibility = "visible";
  } else {
    triangle_ls.style.visibility = "hidden";
  }
}

let stop = 1;
let speed = 20;
triangle_rs.addEventListener('mouseover', function(event) {
  speed = 20;
  stop = 0;
  const intervalId = setInterval(() =>{
    r_move_func();
    check_position();
    if(stop === 1){　
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
    check_position();
    if(stop === 1){　
      clearInterval(intervalId);
    }}, 100);
}, false);

triangle_rf.addEventListener('mouseleave', function() {
  stop = 1;
}, false);

function r_move_func() {
  // console.log('max_scroll:');
  // console.log(max_mouse_box);
  if (mouse_box.scrollLeft < max_mouse_box) {
    mouse_box.scrollLeft += speed;
    img_box.scrollLeft = mouse_box.scrollLeft;
  }
  if (mouse_box.scrollLeft >= max_mouse_box) { 
    triangle_rs.style.visibility = "hidden";
    stop = 1;
  }
}

triangle_ls.addEventListener('mouseover', function(event) {
  speed = 20;
  stop = 0;
  const intervalId = setInterval(() =>{
    l_move_func();
    check_position();
    if(stop === 1){　
      clearInterval(intervalId);
    }}, 100);
}, false);

triangle_ls.addEventListener('mouseleave', function() {
  stop = 1;
}, false);

triangle_lf.addEventListener('mouseover', function(event) {
  speed = 50;
  stop = 0;
  const intervalId = setInterval(() =>{
    l_move_func();
    check_position();
    if(stop === 1){　
      clearInterval(intervalId);
    }}, 100);
}, false);

triangle_lf.addEventListener('mouseleave', function() {
  stop = 1;
}, false);

function l_move_func() {
  if (mouse_box.scrollLeft > 0) {
    mouse_box.scrollLeft -= speed;
    img_box.scrollLeft = mouse_box.scrollLeft;
    console.log(mouse_box.scrollLeft);
  }
  if (mouse_box.scrollLeft == 0) { 
    triangle_ls.style.visibility = "hidden";
    stop = 1;
  }
}
