// function TemporaryName(){
//  return( <div>
//   <img src = "images/download.png" className = "img" />
//   <h1>Fun fucts about React</h1>
//   <ul>
//     <li>was first released in 2013</li>
//     <li>was originally created by jordan walke</li>
//     <li>has well over 100K stars on Github</li>
//     <li>is maintained by facebook</li>
//     <li>Powers thousands of enterprise apps, including mobile apps</li>
    
//   </ul>
//   </div>
//  )
// }

// ReactDOM.render(<TemporaryName />,document.getElementById('facts'))

function Main(){
  return(
    <div>
       <h1>i am excited to learn react</h1>
    <ol>
      <li>to build websites efficiently</li>
      <li>to be skilfull</li>
      <li>to get my first frontend wenb develpment job</li>
      <li>to make money</li>
    </ol>
    </div>
  )
}
function Footer(){
  return(
  <footer>@ 20xx girma development. All rights reserved.</footer>)
}
function Page(){
  return(
    <div id="main">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}


ReactDOM.render( <Page />,document.getElementById('facts'))
