console.log('hello');
// 移動  translate()
// document.getElementById("id名").style.transform = "translate(x, y)";
let move_val = document.getElementById('hero__infobox__effect');

window.onscroll = function()
{
  var scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  console.log('intro:');
  console.log(scrollTop);
  console.log(move_val.style.transform);
  move_val.style.transform = "translate(0%,-" + scrollTop + "%)";
}
