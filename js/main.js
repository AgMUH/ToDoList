let list = document.getElementById('list');
let inputValue = document.getElementById('new-note');
var notesArray = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
localStorage.setItem('notes', JSON.stringify(notesArray));
const data = JSON.parse(localStorage.getItem('notes'));

const liMaker = text => {
    const li = document.createElement('li');
    li.innerHTML = `
    <li class="list-group-item li-mark"><p>` + text + `</p>
        <div class="edit-btns">
            <button class="completed-note btn btn-success" onclick="completedNote(this.parentNode.parentNode)">Completed</button>
            <button class="delete-note btn btn-danger" onclick="deleteNote(this.parentNode.parentNode.parentNode)">Delete</button>
        </div>
    </li>`;
    list.insertBefore(li, list.firstChild);
}
function addNewNote() {
    if (inputValue.value != '') {
        liMaker(inputValue.value);
        notesArray.push(inputValue.value);
        localStorage.setItem('notes', JSON.stringify(notesArray));
        inputValue.value = '';
    }
}
function removeAllNotes() {
    localStorage.clear();
    notesArray = [];
    localStorage.setItem('notes', JSON.stringify(notesArray));
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}
function completedNote(e){
    let p = e.getElementsByTagName('p');
    let prevText = p['0'].innerHTML;
    let nextText = `<s>` + p['0'].innerHTML + `</s>`;
    let notes = localStorage.getItem('notes').slice(2,length-2).split("\"").join("").split(",");
    let i = notes.indexOf(prevText);
    p['0'].innerHTML = nextText;
    notesArray[i] = nextText;
    localStorage.setItem('notes', JSON.stringify(notesArray));
}

function deleteNote(e){
    let p = e.getElementsByTagName('p');
    let prevText = p['0'].innerHTML;
    let notes = localStorage.getItem('notes').slice(2,length-2).split("\"").join("").split(",");
    let i = notes.indexOf(prevText);
    notesArray.splice(i,1);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    e.remove();
}
data.forEach(item => {
    liMaker(item);
});


