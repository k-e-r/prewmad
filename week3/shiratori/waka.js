let ushiwaka;
let image = document.getElementById('wakapic');
image.onclick = changeImage;

document.getElementById("wakapic").onmouseout = function() {mouseOut()};

function mouseOut() {
  document.getElementById("wakapic").src = './pics/waka.jpeg';
}

function changeImage(){
  if(image.style.opacity == ''){
    image.style.opacity = 1;
  }

  let opacityInt = image.style.opacity * 40;
  let ushiwaka = setInterval( () => {
    opacityInt = opacityInt - 10;
    image.style.opacity = opacityInt / 100;
    //フェードアウトの処理（opacityを40ミリ秒ごとに0.1づつ減らす）

    if(image.style.opacity <= 0){
      clearInterval(ushiwaka);
      //画像を交換
      image.src = './pics/牛若.jpeg';
      opacityInt = image.style.opacity * 50;
      ushiwaka = setInterval( () => {
        opacityInt = opacityInt + 10;
        image.style.opacity = opacityInt / 100;
        //フェードインの処理（opacityを50ミリ秒ごとに0.1づつ増やす）
      
        if(image.style.opacity >= 1){
          clearInterval(ushiwaka);
        }
      }, 100);
    }
  }, 100);
}