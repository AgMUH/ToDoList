let list = document.getElementById('list');
let inputValue = document.getElementById('new-note');
var notesArray = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
localStorage.setItem('notes', JSON.stringify(notesArray));
const data = JSON.parse(localStorage.getItem('notes'));

const liMaker = text => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
}
function addNewNote(){
    liMaker(inputValue.value);
    notesArray.push(inputValue.value);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    inputValue.value = '';
}
function removeAllNotes(){
    localStorage.clear();
    notesArray = [];
    localStorage.setItem('notes', JSON.stringify(notesArray));
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
}
data.forEach(item => {
    liMaker(item);
});


