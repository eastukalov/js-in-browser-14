'use strict';

const conWebsocket = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');

conWebsocket.addEventListener('message', event => {

  if (Number(event.data) >= 1 && Number(event.data) <= 10) {
    Array.from(document.querySelectorAll('.websocket div')).forEach(el => {
      if (Number(el.textContent) === Number(event.data)) {
        el.classList.add('flip-it');
      } else {
        el.classList.remove('flip-it');
      }
    });

  } else {
    console.log('Некорректные данные');
    conWebsocket.close(1003, 'Некорректные данные');
  }

});
conWebsocket.addEventListener('error', event => {
  console.log('Error', event.data);
});