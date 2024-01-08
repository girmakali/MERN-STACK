const input = document.getElementById('input');
const bnt = document.getElementById('btn');
const ul =document.getElementById('ul')

function onclick(){
  let li = document.createElement('li')
   li.appendChild(document.createTextNode(input.value))
   ul.appendChild(li);
   input.value = "";
}
function createElementonclick(){
  if (input.value.length > 0){
    onclick()
}}

bnt.addEventListener('click',createElementonclick)


input.addEventListener('keypress',function(e){
 if (input.value.length > 0 && e.key === 'Enter') {
   onclick()
 }
})