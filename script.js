const gridContainer = document.querySelector('.gridContainer');
const buttons = document.querySelectorAll('buttons');

let cell = '';
let gridSize = 16;


// create a grid 16 x 16 inside div container

function makeGrid(gridContainerSize) {
    for (let i = 0; i < gridContainerSize ** 2; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = 'white';
        gridContainer.appendChild(cell);
    }
   gridContainer.style.gridTemplateColumns = `repeat(${gridContainerSize}, auto)`;
   gridContainer.style.gridTemplateRows = `repeat(${gridContainerSize}, auto)`;
}
makeGrid(gridSize)

// add a button at the top of the screen to clear grid. 


// pop up "how many squares per side"
//prompt defaults to original number 16
function resize(request) { 
    if (request === 'resize') {
    let number = prompt("Please enter desired grid size (must be under 100)", 16);
    }
    if (number <= 100) { 
        makeGrid(number);
        } else {
            prompt("Invalid response! Grid size must be under 100!");
    }
    
}

gridContainer.innerHTML = '';
makeGrid(gridSize);



// set up a "hover" effect so the grid divs change color when your mouse 
//passes over them leaving a 'pixelated' trail through your grid like a pen. 
//hover is happening when it ENTERS AND LEAVES the grid. 

    function gridInk(target) {
        target.style.backgroundColor = 'black';
    }

    gridContainer.addEventListener("mouseover", function(event) {
       target = event.target;

        if (target.matches("div.cell")) {
            gridInk(target);
        }
    });











// max 100 squares, same total space as before eg 960px wide
