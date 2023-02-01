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
  
