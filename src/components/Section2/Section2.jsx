import React from 'react'
import './Section2.css';
import cardimg1 from '../../img/cardimg1.png'
import cardimg2 from '../../img/cardimg2.png'
import cardimg3 from '../../img/cardimg3.png'
import cardimg4 from '../../img/cardimg4.png'

import leaf1 from '../../img/section1leaf2.png'
import leaf2 from '../../img/section1leaf3.png'
import leaf3 from '../../img/leaf4.png'
import bottombigimg from '../../img/section1smallimg.png'

import greenleaf1 from '../../img/greenleaf1.png'
import greenleaf2 from '../../img/greenleaf2.png'
import greenleaf3 from '../../img/greenleaf3.png'
import greenleaf4 from '../../img/greenleaf4.png'

import garlic from '../../img/garlic.png'
//ROUTER
import { Link } from 'react-router-dom';



function Section2() {
    return (
        <div className='Section2'>

            <img src={leaf1} alt="" className="leaff1" />
            <img src={leaf2} alt="" className="leaff2" />
            <img src={leaf3} alt="" className="leaff3" />
            <img src={garlic} alt="" className="garlic" />

            <h1>Our Special Dishes</h1>

            <p style={{ fontSize: '12px', }}>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                elit. Molestias, soluta.
            </p>

            <div className="section2dishescontainer">

                <div className="card">
                    <div className="pricediv">$12</div>
                    <img src={cardimg1} alt="" className="cardimg" />
                    <h4>Lumpia with Suace</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>

                <div className="card">
                    <div className="pricediv">$14</div>
                    <img src={cardimg2} alt="" className="cardimg" />
                    <h4>Fish and Veggie</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>

                <div className="card">
                    <div className="pricediv">$12</div>
                    <img src={cardimg3} alt="" className="cardimg" />
                    <h4>Tofu Chili</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>

                <div className="card">
                    <div className="pricediv">$10</div>
                    <img src={cardimg4} alt="" className="cardimg" />
                    <h4>Egg and Cocumber</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                </div>
            </div>


            <div className="section2bottomcontainer">

                <div className="section2bottomleft">
                    <img className='greenleaf1' src={greenleaf1} alt="" />
                    <img className='greenleaf2' src={greenleaf2} alt="" />
                    <img className='greenleaf3' src={greenleaf3} alt="" />
                    <img className='greenleaf4' src={greenleaf4} alt="" />

                    <img className='section2bottombigimg' src={bottombigimg} alt="" />
                </div>

                <div className="section2bottomright">
                    <h1 className='section2h1'>Welcome to Our Restaurant</h1>

                    <p style={{ fontWeight: '200' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum consequatur quod repudiandae, aliquid dolor
                        possimus veritatis quasi eveniet laborum libero quam,
                        odio dolore corrupti culpa.
                    </p>

                    <div className="section1buttondiv">

                        <Link to='/Menu'><button className="menuBTN">Menu</button></Link>
                        <button className="bookatableBTN">Book a table</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section2