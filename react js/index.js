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
// let show = document.getElementById('root')
// let h1 = document.createElement('h1')
// h1.textContent = 'this is an imparative way to program'
// h1.className = 'header'
// show.appendChild(h1)
// console.log(h1)

//JSX

// const page = (<div>
//   <h1 className= "jsx">this is jsx</h1>
//   <button className = 'submit'>submit</button>
//     </div>)

// ReactDOM.render
// (
// page,document.getElementById('root')
// )
// console.log(page)

// const navbar = (
//   <nav>
//     <h1>Website</h1>
//     <ul>
//       <li>pricing</li>
//       <li>about</li>
//       <li>contact</li>
//     </ul>
//   </nav>
// )
// ReactDOM.render(
//   navbar,document.getElementById('nav')
// )

const ig = (
  <div>
    <h1>hello every one</h1>
    <table>
      <thead>
        <th>name</th>
        <th>age</th>
        <th>profession</th>
      </thead>
      <tbody>
        <th>girma</th>
        <th>27</th>
        <th>front end</th>
      </tbody>
    </table>
  </div>
)
ReactDOM.render(ig,document.getElementById('root'))