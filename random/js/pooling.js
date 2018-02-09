'use strict';

const conPooling = new XMLHttpRequest();
conPooling.addEventListener('load', event => {

  if (event.target.status === 200 && Number(event.target.responseText) >= 1 && Number(event.target.responseText) <= 10) {
    Array.from(document.querySelectorAll('.pooling div')).forEach(el => {
      if (Number(el.textContent) === Number(event.target.responseText)) {
        el.classList.add('flip-it');
      } else {
        el.classList.remove('flip-it');
      }
    })
  } else {
    if (event.target.status !== 200) {
      console.log('Error', event.target.statusText);
    } else {
      console.log('Некорректные данные');
    }
  }

});

conPooling.addEventListener('error', event => {
  console.log('Error', event.target.statusText);
});

window.setInterval(() => {
  conPooling.open('GET', 'https://neto-api.herokuapp.com/comet/pooling');
  conPooling.send();
}, 5000);
