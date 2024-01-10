let input = document.getElementById('input')
let submit = document.getElementById('submit')
let output = document.getElementById('output')

submit.addEventListener('click' , ()=>{
  
  if(input.value > 5 && input.value <= 18){
    output.innerHTML = 'Welcome kids'
  }
  else if(input.value >= 25){
  output.innerHTML = 'Welcome parents'}

  else if(input.value > 18 && input.value <= 24){
    output.innerText = 'you are not allowed to enter'
  }
  
  
})


