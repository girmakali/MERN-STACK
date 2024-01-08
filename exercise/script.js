let input = document.getElementById('input')
let button = document.getElementById('submit')
let output = document.getElementById('result')

button.addEventListener('click',()=>{
  console.log(input.value.length)
  if (input.value.length <= 4){
    output.innerText = 'password is weak'
  }
  else if (input.value.length > 4 && input.value.length <= 8){
    output.innerText = 'password is medium'
  }
  else if (input.value.length > 8 ){
    output.innerText = 'password is strong'
  }

})