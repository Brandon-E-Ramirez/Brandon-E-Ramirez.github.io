//!Name: pwMaker.js, Date: 12/22/22, Author: Brandon Ramirez, version: 1.0, 
//TODO Create a script for making a password using an array of symbols, the alphabet and numbers 0-9. User must 
//TODO be able to specify length. If character is from the alph array there is a 50/50 chance it will be lowercase

//*helper method(s):
let log = console.log;

let length = 20; //*length of the password
const sym = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=']
const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //*all alphabet characters in lower case
const nums = [0,1,2,3,4,5,6,7,8,9]

let pw = ''
let symLength = sym.length;
let alphLength = alph.length;
let numsLength = nums.length;

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let x = 0; x <= length; x++){
//TODO choose element type
//* Generate random number to decide if next character will be a symbol, letter, or number
let option = randomIntFromInterval(1,3)
let index;
switch(option){
    case 1://reserved for symbols
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, symLength - 1)
    pw += sym[index];    
    break;
    
    case 2://resrved for alphabet
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, alphLength - 1);
    //*if element is a letter, make it a 50/50 chance it will be upperCase
    let upperCse = randomIntFromInterval(0,1)
    if(upperCse){
        pw+= alph[index];
    }else{
        pw+= alph[index].toUpperCase();
    }    
    break;
    
    case 3://reserved for numbers
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, numsLength - 1)
    pw += nums[index]
    break;

    default:
        log('There is an error!')
}
}

log(pw)
log('********************************End of script********************************')
