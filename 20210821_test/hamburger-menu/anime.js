const btn13 = document.getElementById('btn13');
btn13.onclick = btn;

function btn() {
  console.log("click");
  btn13.classList.toggle('active');
}