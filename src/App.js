import "./App.css";
import Logo from "./Assets/Profile.jpg";
import { MdDashboard, MdGroup } from "react-icons/md";
import { IoMdSchool, IoMdSettings, IoMdExit } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="containerRight">
          <div className="logoDesignMain">
            <div className="logodesign"></div>
            <div className="logo">boosto</div>
          </div>
          <div className="profile">
            <img className="logoImage" src={Logo} alt="" />
            <span className="profileName">Subrath sapktoa</span>
            <span className="profileTitle">CEO</span>
          </div>
          <div className="items">
            <ul className="listItems">
              <li className="listItem">
                <MdDashboard className="icons" />
                <span>Dashboard</span>
              </li>
              <li className="listItem">
                <MdGroup className="icons" />
                <span>Customers</span>
              </li>
              <li className="listItem">
                <IoMdSchool className="icons" />
                <span>Solutions</span>
              </li>
              <li className="listItem">
                <IoMdSettings className="icons" />
                <span>Settings</span>
              </li>
            </ul>
          </div>
          <div className="exit">
            <IoMdExit className="icons" />
            Exit
          </div>
        </div>
        <div className="containerLeft">
          <div className="containerLeftTop">
            <div className="containerLeftTopLeft"></div>
            <div className="containerLeftTopRight"></div>
          </div>
          <div className="containerLeftBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
