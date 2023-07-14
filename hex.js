
// --------------------Variables------------------
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//--------------------Events----------------------
btn.addEventListener('click', ()=>{
    let hexColor = '#';
    for(let i=0; i<6;i++){
        hexColor += hex[getRandomNum()]
    }

    // Updating content on page
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// Random Number Function
const getRandomNum = () =>{
    return Math.floor(Math.random() * hex.length)
}