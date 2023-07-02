const Header = () => {
  return (
    <nav className="">
      <div id='nav'>
        <a className="nav-btn" href="#outline">Outline</a>
        <a className="nav-btn" href="#author">About the Author</a>
        <a className="nav-btn" href="#context-exigence-purpose">Context</a>
        <a className="nav-btn" href="#message">Message</a>
        <a className="nav-btn" href="#writing">Writing Analysis</a>
        {
          /** 
           * choose from: modes, arrangements, devices, diction, syntax), appeal (at least one of the 
            three), and tone included. 
          */
        }
        <a className="nav-btn" href="#references">References</a>
      </div>
    </nav>
  )
}

export default Header;