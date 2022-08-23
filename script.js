const input = document.querySelector('#guest-name');
const guestList = document.querySelector('#guest-list');
let guestListArray = [];

function createList() {
  for (let i = 0; guestListArray.length > i; i++) {
    const newItem = document.createElement('div');
    newItem.classList.add('new-guest');
    newItem.appendChild(document.createTextNode(guestListArray[i]));
    guestList.appendChild(newItem);
  }
}

document.querySelector('#add-top').addEventListener('click', (e) => {
  guestListArray.unshift(input.value);
  guestList.replaceChildren();
  createList();

  input.value = '';
});

document.querySelector('#add-bottom').addEventListener('click', (e) => {
  guestListArray.push(input.value);
  guestList.replaceChildren();
  createList();
  input.value = '';
});

document.querySelector('#remove-last').addEventListener('click', (e) => {
  guestListArray.pop(input.value);
  guestList.replaceChildren();
  createList();
  input.value = '';
});

document.querySelector('#remove-first').addEventListener('click', (e) => {
  guestListArray.shift(input.value);
  guestList.replaceChildren();
  createList();
  input.value = '';
});

document.querySelector('#reverse').addEventListener('click', (e) => {
  guestListArray.reverse(input.value);
  guestList.replaceChildren();
  createList();
  input.value = '';
});
