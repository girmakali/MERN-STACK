const person = {
  name:'girma',
  walk(){
    let i = 1;
    setInterval(()=>{
      console.log(`walk ${i}`)
      i++;
    },2000)
  }
}
//person.walk()

// This keyword

const human = {
  name: 'mosh',
  walk(){
    console.log(this)
  }
};
human.walk()

const walk = human.walk;
walk()


//bind methods stick to the object in it
const wal = human.walk.bind(human);
walk()
wal()

//factory function uses for assigning arrays with symillar methods easily 
function createCircle(radius){
  return{
    radius,
    draw(){
      console.log('draw')
    },
    area(){
      console.log(3.14 * radius)
    }
  }
}
const circle1 = createCircle(1)
console.log(circle1)
circle1.draw()
circle1.area()

const circle2 =createCircle(3)
console.log(circle2)
circle2.area()









