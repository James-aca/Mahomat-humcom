//arrays and objects

//array variables
//1 dimensional
let studentNames=['James', 'Ana', 'Sonya', 'Dean'];//homogenous
let sampArray=[1, 'a', true, 'Dora', 12.5];//hetero

//display array on the console
console.log(studentNames[2]);
console.table(sampArray);//display elements in a tabular format

//2 dimensional
let toDolist=[['8am', 'Market'],['10am', 'Gym'],['12', 'Lunch Date'],['1pm', 'Shopping'],['3pm', 'Nap']];
console.table(toDolist);

//array methods
toDolist.push(['4pm', 'Computer Games'],['5pm', 'Cook Dinner']);
console.table(toDolist);
toDolist.splice(2,0,['11am', 'Shower']);//insert element at a given position in the array
console.table(toDolist);
toDolist.pop()//removes last item from the array list
console.table(toDolist);
document.write("<br>")
document.write(`${studentNames[2]} went to the ${toDolist[0][1]} at ${toDolist[0][0]}`);
document.getElementById('arraySamp').innerHTML=studentNames[2]+" went to the "+toDolist[0][1]+" at "+toDolist[0][0];

//objects complex types
let student1={//object
    idnum:"202020",//key//value
    fname: "Jennifer",
    lname: "Salcedo",
    age: 18
}
//==================display on console============
console.log(student1);
//dot notation to display objt properties
console.log("Student ID: "+student1.idnum+" \nStudent Name: " +student1.fname+" "+student1.lname);

//array like notation to non displaying obj properties on the console
console.log("Student ID: "+student1['idnum']+"\nStudent Name: "+student1['fname']+" "+student1['lname']);

//display======display on webpage====
document.getElementById('student').innerHTML="ID Number: "+student1.idnum+"<br>Student Name: "+student1.fname+" "+student1.lname+"<br> Student Age: "+student1.age;

//example 2 of an object
let contactDet1={
    firstN: 'Jessica',
    lastN:'Gonzales',
    email:'jessica@example.com',
    mobilenum: 090909090909,
    address:{
        bldgNum: '21',
        street: 'hehe',
        city: 'bagui city',
        province: 'benguet',
        country: 'ph'
    }
}
//display
console.log(contactDet1);
console.log(contactDet1.address.street);
//displaying on the webpage
document.getElementById('contact').innerHTML="Name: "+contactDet1.firstN+" "+contactDet1.lastN+"<br>Email: "




