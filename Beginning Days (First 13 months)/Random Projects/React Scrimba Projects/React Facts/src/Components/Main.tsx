import reactIcon2 from "/src/assets/reactjs-icon 2.png";

const Main = () => {
    return (
      <div id="mainContainer">
        <img id='imageTwo' src={reactIcon2} alt="react icon 2" />
        <h1 id="titleOfMain">Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      
      </div>
    )
  }
  
  
export default Main