import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import logo from './img/logo.png'
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
      <Section2/>
      <Section3/>
    </div>
  );
}

export default App;
