const intro_con = [{id: 'nishi_box', val: 100, name:'西谷 夕', grade: '2年', position: 'リベロ'},
  {id: 'tuki_box', val:130, name:'月島 蛍', grade: '1年', position: 'ミドルブロッカー'},
  {id: 'yama_box', val:130, name:'山口 忠', grade: '1年', position: 'ミドルブロッカー'},
  {id: 'tanaka_box', val:140, name:'田中 龍之介', grade: '2年', position: 'ウィングスパイカー'},
  {id: 'hinata_box', val:130, name:'日向 翔陽', grade: '1年', position: 'ミドルブロッカー'},
  {id: 'kage_box', val:100, name:'影山 飛雄', grade: '1年', position: 'セッター'},
  {id: 'suga_box', val:100, name:'菅原 孝支', grade: '3年', position: 'セッター'},
  {id: 'azuma_box', val:140, name:'東峰 旭', grade: '3年', position: 'ウィングスパイカー'},
  {id: 'sawa_box', val:140, name:'澤村 大地', grade: '3年', position: 'ウィングスパイカー'}
];

const fukidashi = document.getElementById('fukidashi');
const fukidashi_w = fukidashi.clientWidth;
const fukidashi_h = fukidashi.clientHeight;
const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');
const intro3 = document.getElementById('intro3');
var num=0;

// マウスが要素上から離れた時
function charaIntro (chara) {
  for (num=0; num<intro_con.length; num++) {
    if (intro_con[num].id === chara.id) break;
  }
  fukidashi.style.visibility = 'visible';
  intro1.style.visibility = 'visible';
  intro2.style.visibility = 'visible';
  intro3.style.visibility = 'visible';
  // 要素の位置座標を取得
  const clientRect = chara.getBoundingClientRect();
  // 画面の左端から、要素の左端までの距離
  const x = clientRect.left;
  // 画面の上端から、要素の上端までの距離
  const y = clientRect.top;
  // console.log('intro:');
  // console.log(window.pageYOffset);
  // console.log(y);
  fukidashi.style.left = (x - fukidashi_w/2) + 'px';
  fukidashi.style.top = (y - 420 + window.pageYOffset) + 'px';
  intro1.style.left = (x - intro_con[num].val) + 'px';
  intro1.style.top = (y - 420 + window.pageYOffset) + 'px';
  intro1.textContent = intro_con[num].name;
  intro2.style.left = (x - intro_con[num].val) + 'px';
  intro2.style.top = (y - 370 + window.pageYOffset) + 'px';
  intro2.textContent = intro_con[num].grade;
  intro3.style.left = (x - intro_con[num].val) + 'px';
  intro3.style.top = (y - 320 + window.pageYOffset) + 'px';
  intro3.textContent = intro_con[num].position;
}

function charaIntroOff() {
  fukidashi.style.visibility = 'hidden';
  intro1.style.visibility = 'hidden';
  intro2.style.visibility = 'hidden';
  intro3.style.visibility = 'hidden';
}

window.onscroll = function()
{
  var scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  console.log('intro:');
  console.log(scrollTop);
  var pos = document.getElementById('chara_intro').getBoundingClientRect().top;
  console.log(pos + window.pageYOffset);
  if (scrollTop > (pos + window.pageYOffset - 400)) {
    document.getElementById('intro_hinata_img').classList.add('scroll-in');
    document.getElementById('intro_hinata_con').classList.add('scroll-in');
    document.getElementById('intro_hinata_con2').classList.add('scroll-in');
    document.body.style.backgroundColor = '#f0802250';
  }
}
