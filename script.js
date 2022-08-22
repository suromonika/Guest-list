const input = document.querySelector('#guest-name');
const guestList = document.querySelector('#guest-list');

let guestListArray = [];

function createElement() {
  for (let i = 0; guestListArray.length > i; i++) {
    const newItem = document.createElement('div');

    newItem.appendChild(document.createTextNode(guestListArray[i]));
    guestList.appendChild(newItem);
  }
}

document.querySelector('#add-top').addEventListener('click', (e) => {
  guestListArray.unshift(input.value);

  createElement();
});
