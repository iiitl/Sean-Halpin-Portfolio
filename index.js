var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("nav1").style.top = "0";
} 
else {
  document.getElementById("nav1").style.top = "-18vh";
  document.getElementById("nav1").style.transition = "top 0.3s";
}
prevScrollpos = currentScrollPos;
if(document.body.scrollTop > 155 || document.documentElement.scrollTop > 155){
  document.getElementById("nav1").style.backgroundColor="rgba(255, 255, 255, 0.862)";
}
else{
  document.getElementById("nav1").style.top = "0";
  document.getElementById("nav1").style.backgroundColor="transparent";
  document.getElementById("nav1").style.transition="background-color 1s"
}
}


// -----------------------------------------------------------------------------------

//! DARK MODE TOGGLE LOGIC

let modeToggleBtn = document.querySelector('#mode-toggle span');
let rootElement = document.querySelector('html');



//! add the toggle-mode button function

/*
  - if currently dark mode, shows a light mode button and vice versa
*/

modeToggleBtn.addEventListener('click', (e) => {
  let currentMode = modeToggleBtn.textContent;

  if(currentMode == 'dark') {
    rootElement.className = 'dark';
    modeToggleBtn.textContent = 'light';
  }
  else {
    rootElement.className = 'light';
    modeToggleBtn.textContent = 'dark';
  }
});








//------------------------------------------------------------------------------------