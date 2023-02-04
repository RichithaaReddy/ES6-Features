//var-> function scope
function hello(){
  for (var i=0;i<5;i++){
    console.log(i);
  }
  console.log(i); // i is also accessable here out of the loop
  //output is 5
  //as declared in var
}
hello();

//-------------------------------------------------------------------------


//let -> block scope 
function hy(){
  for(let i=0;i<5;i++){
    console.log(i);
  }
 // console.log(i); now it cant print
  
}

hy();
//-------------------------------------------------------------------------
//const -> block scope and cant be reassigned
//-------------------------------------------------------------------------

//objects = collection of key value pair

const person={
  name: 'ram',
  walk:  function() {},
  // now in es6 it can be simply defined as
  talk() {}
};

 person.talk()
 person['name']="richi";  //this is hard coded

 //so we take other variable

const temp='name';
person[temp.value]="bob";

//-------------------------------------------------------------------------


  //this returns reference to current object

  const student={
    name:"ri",
    sub() {
      console.log(this) //f is the refernce if that obj
    }
  };
  student.sub();

//-------------------------------------------------------------------------

// arrow functions and filters

const a=[
  {id:1, score:true},
  {id:2, score:true},
  {id:3, score:false},
];

const b = a.filter(function(a){return a.score;});
const c = a.filter(a=> a.score);
  
//==========================================================================
//destructuring

const clrs = {
  red:'',
  yellow:''
};
//const red = clrs.red;
//const yellow=clrs.yellow;

//const { red,yellow } = clrs;
const { red : r } = clrs;
console.log(r); //r is a object

//==========================================================================
//spread operator

const fname = {name:"abc"};
const clas = {branch:"it" }

console.log(...fname,...clas)
//===========================================================
//class is used insteaad of using function keyword

class Car{
constructor(name){
  this.brand = name
}
present(){
  return 'i have ' +this.brand;
}
}
const mycar = new Car("ford");
mycar.present();
//========================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myArray = ['apple', 'banana', 'orange'];

// const myList = myArray.map((item) => <p>{item}</p>)

//ReactDOM.render(mylist,document.getElementById('root'));
//========================================================

//destructurng array

// const schl = ['asd','qwe','ert'];
// const [a,b,c] =schl;

//============================================================

//destructurng fnctn

// function calculate(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;

//   return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7);

//=============================================================

//destructurng objects

// const alpha={
//   aa:"asdf",
//   clas:74
// }
// myalpha(alpha)

// function myalpha(aaa){
//   const msg = "name"+aa+"cls"+clas+".";
// } 
//============================================================================

//spread operator

// const one = [1,2,3,4,5];
// const two = [8,7,9,6];
// const mix = [...one,...two]

//=================================================

//spread objcts

// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red'
// }

// const updateMyVehicle = {
//   type: 'car',
//   year: 2021, 
//   color: 'yellow'
// }

// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}