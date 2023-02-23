const grid = document.querySelector('.grid-container');

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val * val; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].style.backgroundColor = 'white';
    };
});

const black = document.querySelector('#blackBtn');
black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });
    };
});

function getRandomColor() {
    let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    return color;
} 

const rgb = document.querySelector('#rgbBtn');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        });
    };
});

const eraser = document.querySelector('#whiteBtn');
eraser.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'white';
        });
    };
});

const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});

createGrid();








// let currentElem = null;

// container.addEventListener("mouseover", function(){
//     this.classList.add("active");       // Change to the Go image
//     this.classList.remove("inactive");  // Remove the Stop image
// });
   
// container.addEventListener("mouseout", function(){
//     this.classList.add("inactive");     // Change to the Stop image
//     this.classList.remove("active");    // Remove the Go image
// });

// container.onmouseover = function(event) {
//   // before entering a new element, the mouse always leaves the previous one
//   // if currentElem is set, we didn't leave the previous <td>,
//   // that's a mouseover inside it, ignore the event
//   if (currentElem) return;

//   let target = event.target.closest('grid-item');

//   // we moved not into a <td> - ignore
//   if (!target) return;

//   // hooray! we entered a new <td>
//   currentElem = target;
//   onEnter(currentElem);
// };


// container.onmouseover = function(event) {
//     let target = event.target;
//     target.style.background = 'pink';
// };
  
// container.onmouseout = function(event) {
//     let target = event.target;
//     target.style.background = '';
// };

// $(".grid-container").hover(
//     function () {
//         $(this).removeClass('out').addClass('over');
//     },
//     function () {
//         $(this).removeClass('over').addClass('out');
//     }
// );