window.onload = function() {
  window.alert("Harap sabar menunggu. Orang sabar disayang Tuhan :) ");
}

document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementsByClassName('open')[0];
  const closeButton = document.getElementsByClassName('close')[0];
  const cardPackaging = document.getElementsByClassName('card-packaging')[0];
  const myAudio = document.getElementById('myAudio'); // ambil audio player

  openButton.addEventListener('click', function () {
      cardPackaging.classList.add('is-open');
      myAudio.play(); // play musik saat tombol open diklik
  });

  closeButton.addEventListener('click', function () {
      cardPackaging.classList.remove('is-open');
  });
});
