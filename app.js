var bowl = document.querySelector('.bowl')
var flushBtn = document.querySelector('.flush-btn')
bowl.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);
function poop(){
  bowl.style.backgroundColor = 'darkolivegreen'
  // bowl.style.height = '600px'
}
function flush(){
  bowl.style.backgroundColor = 'mintcream';
}