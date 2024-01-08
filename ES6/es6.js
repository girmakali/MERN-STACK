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