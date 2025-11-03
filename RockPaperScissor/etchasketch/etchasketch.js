const gridContainer = document.querySelector('#grid-container');

function setUpGrid(){
    for(let i = 0; i < 16; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid-'+i);
        gridContainer.appendChild(grid);ß
    }
}

setUpGrid();