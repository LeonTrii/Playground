import facebook from "/src/assets/Facebook Icon.png";
import github from "/src/assets/GitHub Icon.png";
import instagram from "/src/assets/Instagram Icon.png";
import twitter from "/src/assets/Twitter Icon.png";

const Nav = () => {
    return (
        <div id="navbar">
            <div id="images">
                <img src={facebook} alt="facebook" />
                <img src={github} alt="github" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </div>
        </div>
    );
}

export default Nav;