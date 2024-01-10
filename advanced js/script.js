const person = {
  name: 'girma',
  age:27,
  profession:'prgrammer'
}

//destructuring
let {name,age,profession} = person; 
console.log(name)

const girma = {name,age,profession} = person 
console.log(girma.age)

//we can use objects as a function parameter ?????

//we can track the key of and object and assign the value to new variable first we put the key in squer braacket

const adoniyas = name;
console.log(person.adoniyas)

//default argument

// function closure the child function can access the parent variable

const outer = ()=> {
  const name = 'girma'

  let inner = () => alert(`this is ${name}`)
  
  return inner()
}
outer()

//currying 
let multiply = (x) =>{
  return (y)=>{
    return x*y
  }
}

let mg = multiply(10)
console.log(mg(4))

//compose function it like f of x = substruct5(multiply3(add2()))

function add2(x) {
  return x + 2;
}
function multiply3(x) {
  return x * 3;
}
function subtract5(x) {
  return x - 5;
}
const combinedFunction = compose(subtract5, multiply3, add2);
const result = combinedFunction(10);
console.log(result); // Output: 31






























