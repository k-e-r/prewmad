let GOSHIKI;
let image4 = document.getElementById('goshikipic');
image4.onclick = changeImage;

document.getElementById("goshikipic").onmouseout = function() {mouseOut3()};

function mouseOut3() {
  document.getElementById("goshikipic").src = './pics/goshiki.jpeg';
}

function changeImage(){
  if(image4.style.opacity == ''){
    image4.style.opacity = 1;
  }

  let opacityInt = image4.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let GOSHIKI = setInterval( () => {
    opacityInt = opacityInt - 10;
    image4.style.opacity = opacityInt / 100;

    if(image4.style.opacity <= 0){
      clearInterval(GOSHIKI);
      //画像を交換
      image4.src = './pics/goshiki2.jpeg';
      opacityInt = image4.style.opacity * 50;
      //フェードインの処理（opacityを50ミリ秒ごとに0.1づつ増やす）
      GOSHIKI = setInterval( () => {
        opacityInt = opacityInt + 10;
        image4.style.opacity = opacityInt / 100;
        if(image4.style.opacity >= 1){
          clearInterval(GOSHIKI);
        }
      }, 100);
    }
  }, 100);
}