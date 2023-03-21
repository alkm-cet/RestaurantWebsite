import './App.css';
import { useState } from 'react'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import logo from './img/logo.png';
import footer from './img/footer.png';
import pan from './img/pan.png'

import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
//PAGES


function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(current => !current)
  }


  return (

    <div className="App">

      <div className="navContainer">
        <img className='logo' src={logo} alt="" />
        <div className="navtitles">

          <div className="inforight" onClick={handleOpen}>
            {open == true
              ? <span class="material-symbols-outlined">
                close
              </span>
              : <span class="material-symbols-outlined">
                menu
              </span>
            }
          </div>

          <div className={open == true ? 'toggleshow' : ' toggleclosed'}>
            <div className="pagetitles">Menu</div>
            <div className="pagetitles">Events</div>
            <div className="pagetitles">Gallery</div>
            <div className="pagetitles">About</div>
            <div className="pagetitles">Contact</div>
          </div>

        </div>
        <button className='bookBTN'>Book a Table</button>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <div className="footercontainer">

        <div className="footertop" style={{ backgroundImage: "url(" + footer + ")" }}>
          <h1>Get Our Promo Code by Subscribing To Our Newsletter</h1>
          <div className="footertopdiv">
            <input type="text" placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footerbottommain">

          <img className='footerpan' src={pan} alt="" />


          <div className="bottomdiv1">
            <img className='footerlogo' src={logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Fuga molestias iure molestiae saepe, cum exercitationem.
              <a href="" style={{ color: 'black' }}>Learn more</a>
            </p>
            <h4>OPENING HOURS</h4>
            <div className="hoursdiv">
              <div className="hours">
                <p>Monday-Friday</p>
                <p>8:00 am to 9:00 pm</p>
              </div>
              <div className="hours">
                <p>Saturday</p>
                <p>8:00 am to 9:00 pm</p>
              </div>
              <div className="hours">
                <p>Sunday</p>
                <p>CLOSED</p>
              </div>
            </div>
          </div>


          <div className="bottomdiv2">
            <h4>NAVIGATION</h4>
            <p>Menu</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Main dishes</p>
          </div>

          <div className="bottomdiv3">
            <h4>DISHES</h4>
            <p>Fish & Viggies</p>
            <p>Tofu Chili</p>
            <p>Egg & Cocumber</p>
            <p>Lumpia w/Suace</p>
          </div>

          <div className="bottomdiv4">
            <h4>FOLLOW US</h4>
            <div className="linkdiv">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
