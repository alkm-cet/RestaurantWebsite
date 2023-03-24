import React from 'react'
import './About.css';
import aboutimg1 from '../../img/aboutimg1.png'
import aboutimg2 from '../../img/aboutimg2.png'
import aboutimg3 from '../../img/aboutimg3.png'
//ABSOLUTE FIGURES
import figure1 from '../../img/section1leaf2.png'
import figure2 from '../../img/section1leaf1.png'
import figure3 from '../../img/section1leaf3.png'

function About() {
  return (
    <div className='About'>
      <h1>About Us</h1>

      <div className="abouttop" style={{ backgroundImage: "url(" + aboutimg1 + ")" }}>
        <img src={figure1} alt="" className="figure1" />
        <div className="textdivtop">
          <h2>Since 2019</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus nemo optio ad temporibus nulla cumque quos dignissimos excepturi. Eligendi?
            <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, consectetur!
          </p>
        </div>
      </div>

      <div className="aboutmid" style={{ backgroundImage: "url(" + aboutimg2 + ")" }}>
      <img src={figure2} alt="" className="figure2" />
        <div className="textdivmid">
          <h2>We're Here for You</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus nemo optio ad temporibus nulla cumque quos dignissimos excepturi. Eligendi?
            <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, consectetur!
          </p>
        </div>
      </div>

      <div className="aboutbottom" style={{ backgroundImage: "url(" + aboutimg3 + ")" }}>
      <img src={figure3} alt="" className="figure3" />
        <div className="textdivbottom">
          <h2>To the Future</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus nemo optio ad temporibus nulla cumque quos dignissimos excepturi. Eligendi?
            <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, consectetur!
          </p>
        </div>
      </div>

    </div>
  )
}

export default About