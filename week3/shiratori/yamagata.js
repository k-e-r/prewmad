let yamagatatop;
let image7 = document.getElementById('yamagatapic');
image7.onclick = changeImage;

document.getElementById("yamagatapic").onmouseout = function() {mouseOut6()};

function mouseOut6() {
  document.getElementById("yamagatapic").src = './pics/yamagata.jpeg';
}

function changeImage(){
  if(image7.style.opacity == ''){
    image7.style.opacity = 1;
  }

  let opacityInt = image7.style.opacity * 40;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let yamagatatop = setInterval( () => {
    opacityInt = opacityInt - 10;
    image7.style.opacity = opacityInt / 100;

    if(image7.style.opacity <= 0){
      clearInterval(yamagatatop);
      //画像を交換
      image7.src = './pics/yamagata2.png';
      opacityInt = image7.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      yamagatatop = setInterval( () => {
        opacityInt = opacityInt + 10;
        image7.style.opacity = opacityInt / 100;
        if(image7.style.opacity >= 1){
          clearInterval(yamagatatop);
        }
      }, 100);
    }
  }, 100);
}