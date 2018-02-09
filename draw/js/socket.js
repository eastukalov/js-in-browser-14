'use strict';
const con = new WebSocket('wss://neto-api.herokuapp.com/draw');

con.addEventListener('open', () => {
  console.log('');
});

//не знаю почему, но отрисовка на https://neto-api.herokuapp.com/hj/4.4/draw/
//идет только после 2ой отправки изображения, хотя сессия, судя по броузеру, создается уже после первой
window.editor.addEventListener('update', () => {

  window.canvas.toBlob(blob => {
    con.send(blob);
  });

});