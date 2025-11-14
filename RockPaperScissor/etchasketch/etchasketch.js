const gridContainer = document.querySelector('#grid-container');
const body = document.querySelector('body');

function setUpGrid(gridSize){
    gridContainer.replaceChildren();
    for(let i = 0; i < gridSize; i++){ 
        let gridRow= document.createElement('div');
        for(let j =0; j<gridSize;j++){
        let grid = document.createElement('div');
        grid.classList.add('grid-'+i +'-' + j);
        grid.style.width = 'calc(90vw * ((100/'+gridSize+')*.01))';
        grid.style.height = 'calc(90vw * ((100/'+gridSize+')*.01))';
        grid.addEventListener('mouseenter', ()=>{
            onHoverBox(grid);
        });
        gridRow.appendChild(grid);
        }
        gridContainer.appendChild(gridRow);
    }

   
}

function startUp(){
    let button = document.createElement('button');
    button.innerText='create new grid';
    button.addEventListener('click', gridPrompt);

    body.prepend(button);

    setUpGrid(16);
}

function gridPrompt(){
    let number = prompt('What size grid do you want?');
    alert(number);

    number = number > 100 ? 100 :number;
    setUpGrid(number);
}

function onHoverBox(grid){
    let o = Math.round, r = Math.random, s = 255;
    let opacity = 0;
    if(grid.style.opacity){
        opacity = parseFloat(grid.style.opacity) + .1;
    }
    if(grid.style.backgroundColor  == ''){
         grid.style.backgroundColor = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }

    grid.style.opacity = opacity;
}

startUp();