let range = document.querySelector('.range-input');
let rang_val = document.querySelector('.range-val');
let uper = document.querySelector('#uper');
let lower = document.querySelector('#lower');
let symbol = document.querySelector('#symbol');
let number = document.querySelector('#no');
let generatepassword = document.querySelector('.btn')
let pass = document.querySelector(".pass")
let copy = document.querySelector('.btn-copy');
let select_btn = document.querySelector('.select-all');


const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '/', '?'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let val1 = false;
let val2 = false;
let val3 = false;
let val4 = false;

let random2 = function () {

    let choice = Math.floor(Math.random() * 4);

    if (choice === 0) {
        const ran_val1 = Math.floor(Math.random() * 26);

        return uppers[ran_val1];
    }
    else if (choice === 1) {
        const ran_val1 = Math.floor(Math.random() * 26);
        return lowers[ran_val1];
    }
    else if (choice === 2) {
        const ran_val2 = Math.floor(Math.random() * 10);
        return symbols[ran_val2];
    }
    else {
        const ran_val2 = Math.floor(Math.random() * 10);
        return numbers[ran_val2];
    }

}



uper.addEventListener('change', () => {
    val1 = uper.checked;
})
lower.addEventListener('change', () => {
    val2 = (lower.checked);
})
symbol.addEventListener('change', () => {
    val3 = symbol.checked;
})
number.addEventListener('change', () => {
    val4 = number.checked;
})

range.addEventListener('input', () => {
    console.log(range.value)
    rang_val.innerHTML = `${range.value}`

})


generatepassword.addEventListener('click', () => {

    let str = "";

    for (let i = 0; i < range.value; i++) {

        if (i == 0 && val1 === true) {
            const ran_val1 = Math.floor(Math.random() * 26);
            str += uppers[ran_val1];

        }
        else if (i == 1 && val3 === true) {
            const ran_val2 = Math.floor(Math.random() * 10);
            str += symbols[ran_val2];

        }
        else if (i == 2 && val4 === true) {
            const ran_val2 = Math.floor(Math.random() * 10);
            str += numbers[ran_val2]

        }
        else if (val1 === true && val2 === true && val3 === true && val4 === true) {
            str += random2();

        }
        else if (val2 === true) {
            const ran_val2 = Math.floor(Math.random() * 10);
            str += lowers[ran_val2]
        }
        else {
            str += '*';
        }

    }
    console.log(str);
    pass.innerHTML = `${str}`

})

copy.addEventListener('click', () => {

    const passElement = document.querySelector('.pass');


    const range = document.createRange();

    range.selectNodeContents(passElement);


    const selection = window.getSelection();

    selection.removeAllRanges();

    selection.addRange(range);
})

let cnt=0;
select_btn.addEventListener('click', () => {

    
    let checkbox = document.querySelectorAll('.checkbox');

    if(cnt%2==0){ 
    checkbox.forEach(element => {
        element.checked = true;
    });
     val1 = true;
     val2 = true;
     val3 = true;
     val4 = true;
     select_btn.textContent='Remove all'
    }
    else{
        
            checkbox.forEach(element => {
                element.checked = false;
            });
             val1 = false;
             val2 = false;
             val3 = false;
             val4 = false;
            select_btn.textContent='Select All'
    }
     cnt=cnt+1;
})










