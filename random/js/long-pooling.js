'use strict';
const conLongPooling = new XMLHttpRequest();
sendlongPooling();

conLongPooling.addEventListener('load', event => {

  if (event.target.status === 202 && Number(event.target.responseText) >= 1 && Number(event.target.responseText) <= 10) {
    Array.from(document.querySelectorAll('.long-pooling div')).forEach(el => {
      if (Number(el.textContent) === Number(event.target.responseText)) {
        el.classList.add('flip-it');
      } else {
        el.classList.remove('flip-it');
      }
    });

    sendlongPooling();
  } else {
    if (event.target.status !== 202) {
      console.log('Error', event.target.statusText);
    } else {
      console.log('Некорректные данные');
    }
  }

});
conLongPooling.addEventListener('error', event => {
  console.log('Error', event.target.statusText);
});


function sendlongPooling() {
  conLongPooling.open("GET", 'https://neto-api.herokuapp.com/comet/long-pooling');
  conLongPooling.send();
}
