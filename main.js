const genPass = document.querySelector(".genPass");
const reset = document.querySelector(".reset");
let input = document.querySelector(".input");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialChars = "!@#$%^&*_";

let allChars = upperCase + lowerCase + number + specialChars;

function randomizeChars(string){
    let characters = string.split("");
    //console.log(characters.length);
    for(let i = characters.length - 1; i > 0; i--){
        let z = Math.floor(Math.random()*(i + 1));
        [characters[i],characters[z]] = [characters[z],characters[i]]; //Fischer-Yates algorithm
    }
    return characters.join("");
}

genPass.addEventListener("click",()=>{
    input.value = randomizeChars(allChars);
    input.value = ((input.value).slice(8,18));
    console.log(input.value.length);
});

reset.addEventListener("click",()=>{
    input.value = "";
});

/*
for(let i = number.length - 1; i > 0; i--){
    let z = Math.floor(Math.random()*(i + 1));
console.log(Math.floor(Math.random()*(i + 1)));
}

let i = upperCase.length - 1;
console.log(i);
console.log(Math.floor(Math.random()*(upperCase.length)));
*/
//console.log(upperCase.slice(3,8));