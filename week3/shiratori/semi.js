let semitop;
let image6 = document.getElementById('semipic');
image6.onclick = changeImage;

document.getElementById("semipic").onmouseout = function() {mouseOut5()};

function mouseOut5() {
  document.getElementById("semipic").src = './pics/semi.jpeg';
}

function changeImage(){
  if(image6.style.opacity == ''){
    image6.style.opacity = 1;
  }

  let opacityInt = image6.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let semitop = setInterval( () => {
    opacityInt = opacityInt - 10;
    image6.style.opacity = opacityInt / 100;

    if(image6.style.opacity <= 0){
      clearInterval(semitop);
      //画像を交換
      image6.src = './pics/semi2.png';
      opacityInt = image6.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      semitop = setInterval( () => {
        opacityInt = opacityInt + 10;
        image6.style.opacity = opacityInt / 100;
        if(image6.style.opacity >= 1){
          clearInterval(semitop);
        }
      }, 100);
    }
  }, 100);
}