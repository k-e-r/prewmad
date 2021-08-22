let shirabutop;
let image8 = document.getElementById('shirabupic');
image8.onclick = changeImage;

document.getElementById("shirabupic").onmouseout = function() {mouseOut7()};

function mouseOut7() {
  document.getElementById("shirabupic").src = './pics/shirabu.jpeg';
}

function changeImage(){
  if(image8.style.opacity == ''){
    image8.style.opacity = 1;
  }

  let opacityInt = image8.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let shirabutop = setInterval( () => {
    opacityInt = opacityInt - 10;
    image8.style.opacity = opacityInt / 100;

    if(image8.style.opacity <= 0){
      clearInterval(shirabutop);
      //画像を交換
      image8.src = './pics/shirabu2.jpg';
      opacityInt = image8.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      shirabutop = setInterval( () => {
        opacityInt = opacityInt + 10;
        image8.style.opacity = opacityInt / 50;
        if(image8.style.opacity >= 1){
          clearInterval(shirabutop);
        }
      }, 100);
    }
  }, 100);
}