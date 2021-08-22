let satori;
let image1 = document.getElementById('tendopic');
image1.onclick = changeImage;

document.getElementById("tendopic").onmouseout = function() {mouseOut1()};

function mouseOut1() {
  document.getElementById("tendopic").src = './pics/tendo.jpeg';
}

function changeImage(){
  if(image1.style.opacity == ''){
    image1.style.opacity = 1;
  }

  let opacityInt = image1.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let satori = setInterval( () => {
    opacityInt = opacityInt - 10;
    image1.style.opacity = opacityInt / 100;

    if(image1.style.opacity <= 0){
      clearInterval(satori);
      //画像を交換
      image1.src = './pics/tendo2.png';
      opacityInt = image1.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      satori = setInterval( () => {
        opacityInt = opacityInt + 10;
        image1.style.opacity = opacityInt / 100;
        if(image1.style.opacity >= 1){
          clearInterval(satori);
        }
      }, 100);
    }
  }, 100);
}