function Header(){
  return(
    <header>
      <nav>
      <img src="images/download.png" class = 'images' alt="" />
      </nav>
      <div id="NavBar">
        <NavBar />
      </div>
    </header>
  )
}

function NavBar(){
  return(
    <ul>
      <li class="NavList">Pricing</li>
      <li class="NavList">About</li>
      <li class="NavList">Contact</li>
    </ul>
  )
}

export default Header
