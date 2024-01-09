
// ReactDOM.render(
// <ul>
//   <li>girma</li>
//   <li>moges</li>
// </ul>, 
// document.getElementById('root'))

// function MainContent(){
//   return (
//     <h1>Hi i am learning react</h1>
//   )
// }
// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,document.getElementById('root')
// )

let show = document.getElementById('root')
let h1 = document.createElement('h1')
h1.textContent = 'this is an imparative way to program'
h1.className = 'header'
show.append(h1)