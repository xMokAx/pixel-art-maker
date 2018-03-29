/*jshint esversion: 6*/
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', e => {
    e.preventDefault();
    const grid = document.getElementById('grid');
    if (document.contains(grid)) {
        grid.remove();
    }
    makeGrid();
});
//creating a grid depending on the user input
function makeGrid() {
    const gridHeight = document.getElementById('input_height').value;
    const gridWidth = document.getElementById('input_width').value;
    const gridContainer = document.getElementById('pixel_canvas');
    const grid = document.createElement("tbody");
    gridContainer.appendChild(grid);
    grid.id = 'grid';
    //creating rows depending on the height input
    for (let i=0; i < gridHeight; i++) {
        let row = document.createElement("tr");
        row.className = 'row';
        grid.appendChild(row);
    }
    //creating cells on each row depending on the width input
    const rows = document.getElementsByClassName('row');
    for (let r = 0; r < rows.length; r++) {
        for (let j = 0; j < gridWidth; j++) {
            rows[r].insertCell(0);
        }
    }
    //change cell color on click
    grid.addEventListener('click', e => {
        const pickedColor = document.getElementById('colorPicker').value;
        if (e.target.tagName === 'TD') {
            e.target.style.backgroundColor = pickedColor;
        }
    });
}