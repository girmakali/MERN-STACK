let x ={ value:10}
let y = x

x.value = 20;
console.log(y)

number = 10;
function increase(num){
  num++;
}
increase(number)
console.log(number)
//after the function close the num is not working bacuse premitives are copied their values not their memory adress

let obj = {
  value: 10
}
function increases(num)
{
  num.value++
}
increases(obj)
console.log(obj)

//the value is changed because objects assigns memory adress or reference not values so it goes to the memory and change the value

