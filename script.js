const today = new Date();
const getDay = today.getDay();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let newEl = document.createElement('h2');
let happyDayTextNode = document.createTextNode(`Happy ${days[getDay]}`);
let happyDay = document.getElementById('happyDay');
newEl.appendChild(happyDayTextNode);
happyDay.appendChild(newEl);