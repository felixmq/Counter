const btn = document.querySelectorAll('.btn');
const count = document.querySelector('.count');

let num = 0;

btn.forEach((btns)=>{
    btns.addEventListener('click', (e)=>{
        let display = e.target.classList;
        if(display.contains('disminuir')){
            num--;
            count.textContent = num;
            colorRed(num)
            colorBlack(num)
        }
        else if(display.contains('incrementar')){
            num++;
            count.textContent = num;
            colorGreen(num)
            colorBlack(num)
        }
        else {
            num = 0;
            count.textContent = num;
            colorBlack(num)
        }
    })
});

function colorRed(color){
    if (color < 0 ){
        count.style.color = "red";
    }
}

function colorGreen(color){
    if (color > 0 ){
        count.style.color = "green";
    }
}

function colorBlack(color){
    if (color === 0 ){
        count.style.color = "black";
    }
}