import laura from "/src/assets/laura.png";
import email from "/src/assets/Mail.png";
import linkedin from "/src/assets/linkedin.png";
import Nav from '../Components/Nav'

const Main = () => {
  return (
    <div>
      <img id="laura" src={laura} alt="laura" />
      <div id='container'>
          <h1>Laura Smith</h1>
          <p id='title'>Frontend Developer</p>
          <p id="website">laurasmith.website</p>
          <div id="buttons">
            <button id="emailButton">
              <img id="email" src={email} alt="email" />
              Email
            </button>
            <button id="linkedinButton">
              <img id="linkedin" src={linkedin} alt="linkedin" />
              Linkedin
            </button>
          </div>
          <div id="text">
            <h2>About</h2>
            <p id="aboutParagraph">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2>Interests</h2>
            <p id="interestsParagraph">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
      </div>
      <Nav />
    </div>
  );
}


export default Main;