const img = (
  <img src = "images/download.png" className = "img" />
)
const FunFacts = (
  <div>
  <h1>Fun fucts about React</h1>
  <ul>
    <li>was first released in 2013</li>
    <li>was originally created by jordan walke</li>
    <li>has well over 100K stars on Github</li>
    <li>is maintained by facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
    
  </ul>
  </div>
)

ReactDOM.render(img,document.getElementById('image'))
ReactDOM.render(FunFacts,document.getElementById('facts'))
