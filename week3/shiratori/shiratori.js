// var pics_src = new Array("pics/waka.jpeg","pics/牛若.jpeg");var num = -1;
// slideshow_timer()
// function slideshow_timer(){
// if (num == 1){num = 0;} 
// else {num ++;}
// document.getElementById("mypic").src=pics_src[num];
// setTimeout("slideshow_timer()",1400); 
// }
  

let intervalId;
let image = document.getElementById('mypic');
image.onclick = changeImage;

function changeImage(){

  if(image.style.opacity == ''){
    image.style.opacity = 1;
  }

  let opacityInt = image.style.opacity * 50;
  //フェードアウトの処理（opacityを50ミリ秒ごとに0.1づつ減らす）
  let intervalId = setInterval( () => {
    opacityInt = opacityInt - 10;
    image.style.opacity = opacityInt / 100;

    if(image.style.opacity <= 0){
      clearInterval(intervalId);
      //画像を交換
      if(image.src === "pics/waka.jpeg"){
        image.src ="pics/semi.jpeg";
      }else{
        image.src = "pics/waka.jpeg";
      }

      opacityInt = image.style.opacity * 50;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      intervalId = setInterval( () => {
        opacityInt = opacityInt + 10;
        image.style.opacity = opacityInt / 100;
        if(image.style.opacity >= 1){
          clearInterval(intervalId);
        }
      }, 100);
    }
  }, 100);
}