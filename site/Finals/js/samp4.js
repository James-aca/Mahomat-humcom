// let age=18;
// //if condition
// if(age<18){
//     alert('Error');
// }
// alert("hello");


/*if-else condition
if(condtition){
    //statement for true
}else{
    //statement for false
}
*/
// let x=5;
// if(x>10){
//     document.write(`${x} is greater than 10`);
// }else{
//     document.write(`${x} is  less than or equal to 10`);
// }


/* if-else-if
if(condtition){
    //statement for true
}else if{
    //statement for previous condtition is false
}else{
    //statements if condition 1 and 2 are false
}
*/
// let newAge=5;
// if(newAge<18){
//     alert('Regererfe 18');
// }else if(neAge>=18){
//     alert('Voting age is 18 years old.');
// }else{
//     alert('hey');
// }


//switch-case control-flow
// let day=7;

// switch(day){
//     case 1:
//         alert('monday');
//         break;    
//     case 2:
//         alert('tuesday');
//         break;
//     case 3:
//         alert('wednesday');
//         break;
//     case 4:
//         alert('thursday');
//         break;
//     case 7:
//         alert('sunday');
//         break;
//     default:
//         alert('invalid');
// }


/*LOOPS*/


//while loop
/* while(expression){
    statement
}
*/
let i=0;
while(i<10){
    document.write(` <br> i is now ${i}`);
    i+=2;//i=i+2
}

//create an array with 5 random number between 1 and 10

let randomNum=[];//declare and initialize an array
let count=0;
const size=5;

while(count<size){
    randomNum.push(Math.round(Math.random()* 10));//add a random number between 0 and 10 in each iteration
    count++;
    document.write(`<br> array size is now ${count}`);
}
document.write(`<br> ${randomNum}`);