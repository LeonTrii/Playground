const Header = () => {
  return (
    <nav className="">
      <div id='nav'>
        <a className="nav-btn" href="#outline">Outline</a>
          {
          // Message, main idea
          }
        <a className="nav-btn" href="#author">About the Author</a>
        <a className="nav-btn" href="#purpose">Purpose</a>
        <a className="nav-btn" href="#audience">Audience</a>
        <a className="nav-btn" href="#context">Context</a>
        <a className="nav-btn" href="#exigence">Exigence</a>
        <a className="nav-btn" href="#choices">Rhetorical Choices</a>
        {
          /** 
           * choose from: modes, arrangements, devices, diction, syntax), appeal (at least one of the 
            three), and tone included. 
          */
        }
        <a className="nav-btn" href="#buy">Buy</a>
        <a className="nav-btn" href="#references">References</a>
      </div>
    </nav>
  )
}


export default Header;