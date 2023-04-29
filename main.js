window.addEventListener("scroll", () => {
  const wrapper = document.querySelector(".wrapper");

  if (window.pageYOffset > 0) {
    wrapper.style.animation = "close 0.15s forwards linear";
  } else {
    wrapper.style.animation = "open 0.15s forwards linear";
  }

  if (window.pageYOffset > 200) {
    document.body.style.animation = "close2 0.15s forwards linear";
  } else {
    document.body.style.animation = "open2 0.15s forwards linear";
  }

});

const openNavButton = document.getElementById('opennav');
const closeNavButton = document.getElementById('closenav');
const mobNavMenu = document.getElementById('mobnav');
const bc = document.getElementById('bc');

openNavButton.addEventListener('click', () => {
  mobNavMenu.style.animation = 'openNAV 0.5s forwards';
});

closeNavButton.addEventListener('click', () => {
  mobNavMenu.style.animation = 'closeNAV 0.5s forwards';
})

bc.addEventListener('click', () => {
  mobNavMenu.style.animation = 'closeNAV 0.5s forwards';
})