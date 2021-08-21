let LEON;
let image3 = document.getElementById('leonpic');
image3.onclick = changeImage;

document.getElementById("leonpic").onmouseout = function() {mouseOut2()};

function mouseOut2() {
  document.getElementById("leonpic").src = './pics/leon.jpeg';
}

function changeImage(){
  if(image3.style.opacity == ''){
    image3.style.opacity = 1;
  }

  let opacityInt = image3.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let LEON = setInterval( () => {
    opacityInt = opacityInt - 10;
    image3.style.opacity = opacityInt / 100;

    if(image3.style.opacity <= 0){
      clearInterval(LEON);
      //画像を交換
      image3.src = './pics/leon2.png';
      opacityInt = image3.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      LEON = setInterval( () => {
        opacityInt = opacityInt + 10;
        image3.style.opacity = opacityInt / 100;
        if(image3.style.opacity >= 1){
          clearInterval(LEON);
        }
      }, 100);
    }
  }, 100);
}