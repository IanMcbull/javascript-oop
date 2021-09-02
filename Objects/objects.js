//Using object literal to create objects
'use strict';
const mySon = {
    // property: value
    firstName: 'Irvin',
    lastName:'Oduor',
    age:0.3,
    isAdult:function(){
        return this.age > 18;
    }
};

const myWife = {
    firstName:'Iryne',
    lastName: 'Gathoni',
    age:29,
    isAdult:function(){
        return this.age > 18;
    }
};
console.log(Object.getOwnPropertyDescriptor(myWife,'lastName'));
Object.defineProperty(myWife,'firstName',{writable:false});
Object.defineProperty(myWife,'fullNames',{get:function(){
    return `${this.firstName} ${this.lastName}`
}})
console.log(myWife.fullNames)
console.log(Object.getOwnPropertyDescriptor(myWife,'firstName'));
//using functions to create an object
function registerUser(fname,lname,age){
 let user = {
     firstName:fname,
     lastName:lname,
     age,
     isAdult(){return this.age > 18}
 }
}

registerUser('Jack','Kamau',35);

//equality operators
// ==
// ===
// object.is

//console.log("ian" == "ian");
//console.log(24 === "24");
//Object.is()