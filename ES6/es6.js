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

//factory function uses for assigning objects with symillar methods easily 
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

// constructor function -- new returns all this methods
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }
}
const circle = new Circle(1);
console.log(circle)

// getters and setters
const animal = {
  firstName: 'mosh',
  lastName:'hamedani',
  get fullName(){
    return `${animal.firstName} ${animal.lastName}`;
  },
  set fullName(value){
    const parts = value.split(' ')
    this.firstName = parts[0];
    this.lastName = parts[1]
  }
}
animal.fullName = 'girma moges'
console.log(animal);
//getter => access propersties
//setter => change them
console.log(animal.fullName)








