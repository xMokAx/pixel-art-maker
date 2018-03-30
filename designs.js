/*jshint esversion: 6*/
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', e => {
    const startTime = performance.now();
    e.preventDefault();
    const gridContainer = document.getElementById('pixel_canvas');

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    makeGrid();

    const endTime = performance.now();
    console.log("time1: ", endTime - startTime);
});
//creating a grid depending on the user input
function makeGrid() {
    const gridHeight = document.getElementById('input_height').value;
    const gridWidth = document.getElementById('input_width').value;
    const gridContainer = document.getElementById('pixel_canvas');

    const fragment = document.createDocumentFragment();

    //creating rows depending on the height input
    for (let i = 0; i < gridHeight; i++) {
        let row = document.createElement("tr");
        row.className = 'row';
        //creating cells on each row depending on the width input
        for (let j = 0; j < gridWidth; j++) {
            row.insertCell(-1);
        }
        fragment.appendChild(row);
    }

    gridContainer.appendChild(fragment);

    //change cell color on click
    gridContainer.addEventListener('click', e => {
        const pickedColor = document.getElementById('colorPicker').value;
        if (e.target.tagName === 'TD') {
            e.target.style.backgroundColor = pickedColor;
        }
    });
}