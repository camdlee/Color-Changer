
//---------------Variables-------------------

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


//---------------Events------------------

// Click Me Button
btn.addEventListener('click', ()=>{
    //get random number between 0 and 3
    const randomNum = getRandomNum();
    // console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum]
});


// Functions
const getRandomNum = () =>{
    return Math.floor(Math.random() * colors.length);
}