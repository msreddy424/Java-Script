// primitives and their object counter parts
//primitives:: null,undefined,string,number,boolean

//objects counter parts(wrapper objects)

// string --> string() ,number --> Number(), boolean -->Boolean()

//primitives --> have no properties and mrthods tooo

//objects --> have properties & each property can be primitive or again a object reference

let a = "madhu";
let b = String("madhu");
let c = new String("madhu");

console.log("a : "+a+" ->> typeof(a): "+typeof(a));
console.log("b : "+b+" ->> typeof(b): "+typeof(b));
console.log("c : "+c+" ->> typeof(c): "+typeof(c));


// Accessing existing properties and methods

console.log(a.toUpperCase()); //console.log((new String(a)).toUpperCase()) wrapper object
console.log(a.length);
console.log(c.length);

//2.Setting new properties/methods

a.length = 10;  //when we access a primitive value property a temparary wrapper 
//object created once the statement is incomplete deleted by garbage collector
//length is our reedem here but here it is in complete because there is no reference to tempparary object thats why it got deleted
a.info = "this is k.madhu sudhan reddy";
console.log(a.length, a.info);

c.length = 25;
c.info = "this is a new info";
console.log(c.length,c.info);

console.log(Object.getOwnPropertyDescriptor(c,'length'));
console.log(Object.getOwnPropertyDescriptor(c,'info'));

//3. COMBINING PRIMITIVES AND OBJECT WRAPPERS
c.valueOf = function() {
  return 'test string';
}


let tempStr = c +  ' msreddy';
console.log(tempStr);

// when ever a wrapper object is used with primitive values internally value of function is 
// called which will convet that objects to primitive values


//// numbers
let n1 = 22;
let n2 = Number(24);
let n3 = new Number(17);

console.log(n1.toExponential());
n3.valueOf = function () {
  return 1000;
}
console.log(n3+ 20);

