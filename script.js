const boxes = document.querySelectorAll('.color-box');
const dropzones = document.querySelectorAll('.dropzone');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');


// Add drag and drop event listeners to the boxes
boxes.forEach(box => {
    box.addEventListener('dragstart', dragStart);
});


dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);
});


// Drag start event
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}


// Drag over event
function dragOver(e) {
    e.preventDefault();
}


// Drop event
function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedBox = document.getElementById(id);
    e.target.appendChild(draggedBox);
}


// Check answers
checkButton.addEventListener('click', () => {
    const t568aAnswers = ['box2', 'box1', 'box4', 'box3', 'box6', 'box5', 'box8', 'box7'];
    const t568bAnswers = ['box10', 'box9', 'box12', 'box11', 'box14', 'box13', 'box16', 'box15'];


    const t568aDropzone = document.getElementById('t568a-dropzone');
    const t568bDropzone = document.getElementById('t568b-dropzone');


    const t568aUserAnswers = Array.from(t568aDropzone.children).map(box => box.id);
    const t568bUserAnswers = Array.from(t568bDropzone.children).map(box => box.id);


    const t568aCorrect = t568aUserAnswers.every((id, index) => id === t568aAnswers[index]);
    const t568bCorrect = t568bUserAnswers.every((id, index) => id === t568bAnswers[index]);


    if (t568aCorrect && t568bCorrect) {
        result.textContent = "Great job! Both T568A and T568B are correct!";
    } else {
        result.textContent = "Some answers are incorrect. Try again!";
    }
});