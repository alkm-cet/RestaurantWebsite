import './App.css';
import { useState } from 'react'
//Router
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
//Images
import logo from './img/logo.png';
import footer from './img/footer.png';
import pan from './img/pan.png'
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
//PAGES
import Menu from './Pages/MenuPage/Menu';
import Home from './Pages/HomePage/Home';
import Gallery from './Pages/GalleryPage/Gallery';
import ScrollToTop from './ScrollToTop';
import About from './Pages/AboutPage/About';


function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(current => !current)
  }


  return (

    <Router>
      <ScrollToTop/>
      <div className="App">

        <div className="navContainer">
        <Link to='/' style={{ textDecoration: 'none', color:'black' }}><img className='logo' src={logo} alt="" /></Link>
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
              <Link to='/' style={{ textDecoration: 'none', color:'black' }}><div className="pagetitles">Home</div></Link>
              <Link to='/Menu' style={{ textDecoration: 'none', color:'black' }}><div className="pagetitles">Menu</div></Link>
              <Link to='/Gallery' style={{ textDecoration: 'none', color:'black' }}><div className="pagetitles">Gallery</div></Link>
              <Link to='/About' style={{ textDecoration: 'none', color:'black' }}><div className="pagetitles">About Us</div></Link>
              
              <div className="pagetitles">Contact</div>
            </div>

          </div>
          <button className='bookBTN'>Book a Table</button>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/About' element={<About />} />
        </Routes>

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
              <Link to='/' style={{ textDecoration: 'none', color:'black' }}><p>Home</p></Link>
              <Link to='/Menu' style={{ textDecoration: 'none', color:'black' }}><p>Menu</p></Link>
              <Link to='/Gallery' style={{ textDecoration: 'none', color:'black' }}><p>Gallery</p></Link>
              <Link to='/About' style={{ textDecoration: 'none', color:'black' }}><p>About us</p></Link>
              <p>Contact us</p>
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
    </Router>

  );
}

export default App;
