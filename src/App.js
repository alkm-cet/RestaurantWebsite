import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import logo from './img/logo.png';
import footer from './img/footer.png';
//PAGES


function App() {
  return (
    <div className="App">

      <div className="navContainer">
        <img className='logo' src={logo} alt="" />
        <div className="navtitles">
          <div className="pagetitles">Menu</div>
          <div className="pagetitles">Events</div>
          <div className="pagetitles">Gallery</div>
          <div className="pagetitles">About</div>
          <div className="pagetitles">Contact</div>
        </div>
        <button className='bookBTN'>Book a Table</button>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <div className="footercontainer">
        <div className="footertop" style={{backgroundImage: "url(" + footer + ")"}}>
          <h1>Get Our Promo Code by Subscribing To Our Newsletter</h1>
          <div className="footertopdiv">
            <input type="text" placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
