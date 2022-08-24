const input = document.querySelector('#guest-name');
const guestList = document.querySelector('#guest-list');
let guestListArray = [];

function createList() {
  guestList.replaceChildren();
  for (let i = 0; guestListArray.length > i; i++) {
    const newItem = document.createElement('div');
    newItem.classList.add('new-guest');
    newItem.appendChild(document.createTextNode(guestListArray[i]));
    guestList.appendChild(newItem);
  }
}

//Sutrumpinta versija
document.querySelector('#actions').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    switch (e.target.id) {
      case 'add-top':
        guestListArray.unshift(input.value);
        input.value = '';
        break;
      case 'add-bottom':
        guestListArray.push(input.value);
        input.value = '';
        break;
      case 'remove-first':
        guestListArray.shift(input.value);
        input.value = '';
        break;
      case 'remove-last':
        guestListArray.pop(input.value);
        input.value = '';
        break;
      case 'reverse':
        guestListArray.reverse(input.value);
        input.value = '';
        break;
      case 'sort-a-z':
        guestListArray.sort();
        input.value = '';
        break;
      case 'sort-z-a':
        guestListArray.sort().reverse();
        input.value = '';
        break;
    }
    createList();
  }
});

//Pimine versija
// document.querySelector('#add-top').addEventListener('click', (e) => {
//   guestListArray.unshift(input.value);
//   createList();
//   input.value = '';
// });

// document.querySelector('#add-bottom').addEventListener('click', (e) => {
//   guestListArray.push(input.value);
//   createList();
//   input.value = '';
// });

// document.querySelector('#remove-last').addEventListener('click', (e) => {
//   guestListArray.pop(input.value);
//   createList();
//   input.value = '';
// });

// document.querySelector('#remove-first').addEventListener('click', (e) => {
//   guestListArray.shift(input.value);
//   createList();
//   input.value = '';
// });

// document.querySelector('#reverse').addEventListener('click', (e) => {
//   guestListArray.reverse(input.value);
//   createList();
//   input.value = '';
// });
