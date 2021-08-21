let KAWANISHI;
let image5 = document.getElementById('kawanishipic');
image5.onclick = changeImage;

document.getElementById("kawanishipic").onmouseout = function() {mouseOut4()};

function mouseOut4() {
  document.getElementById("kawanishipic").src = './pics/kawanisi.jpeg';
}

function changeImage(){
  if(image5.style.opacity == ''){
    image5.style.opacity = 1;
  }

  let opacityInt = image5.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let KAWANISHI = setInterval( () => {
    opacityInt = opacityInt - 10;
    image5.style.opacity = opacityInt / 100;

    if(image5.style.opacity <= 0){
      clearInterval(KAWANISHI);
      //画像を交換
      image5.src = './pics/kawanishi2.png';
      opacityInt = image5.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      KAWANISHI = setInterval( () => {
        opacityInt = opacityInt + 10;
        image5.style.opacity = opacityInt / 100;
        if(image5.style.opacity >= 1){
          clearInterval(KAWANISHI);
        }
      }, 100);
    }
  }, 100);
}