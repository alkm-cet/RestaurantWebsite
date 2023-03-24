import React from 'react'
import './Section1.css';
import circulartext from '../../img/section1leftcircle.png'
import bigimg from '../../img/section1bigimg.png'
import smallimg from '../../img/section1smallimg.png'
import leaf1 from '../../img/section1leaf1.png'
import leaf2 from '../../img/section1leaf2.png'
import leaf3 from '../../img/section1leaf3.png'
import { Link } from 'react-router-dom';


function Section1() {
    return (
        <div className='Section1'>
            <div className="section1left">
            <img src={circulartext} alt="" className="section1leftcircularIMG" />
                <h1>We provide the best food for you</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum consequatur quod repudiandae, aliquid dolor
                    possimus veritatis quasi eveniet laborum libero quam,
                    odio dolore corrupti culpa.
                </p>

                <div className="section1buttondiv">
                <Link to='/Menu'><button className="menuBTN">Menu</button></Link>
                    <button className="bookatableBTN">Book a table</button>
                </div>

            </div>

            <div className="section1right">
                <img className='section1rightbigIMG' src={bigimg} alt="" />
                <img className='section1rightsmallimg' src={smallimg} alt="" />
                <img className='leaf1' src={leaf1} alt="" />
                <img className='leaf2' src={leaf2} alt="" />
                <img className='leaf3' src={leaf3} alt="" />
            </div>
        </div>
    )
}

export default Section1