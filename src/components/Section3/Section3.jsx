import React from 'react'
import './Section3.css';
import bigimg from '../../img/chef.png'
import check from '../../img/check.png'
import garlic from '../../img/garlic.png'
import onion from '../../img/onion.png'
//ROUTER
import { Link } from 'react-router-dom';

function Section3() {
    return (
        <div className='Section3'>
            <img src={garlic} alt="" className='section3garlic' />
            <img src={onion} alt="" className='section3onion' />
            <div className="section3left">
                <h1>Our Expects Chef</h1>
                <p style={{ fontWeight: '200' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia autem deleniti laborum modi rerum aliquid fugiat
                    ratione, assumenda eaque quas.
                </p>
                <div className="section3leftitems">
                    <div className="itemdiv">
                        <img src={check} alt="" className="check" />
                        <small>Lorem ipsum dolor sit amet consectetur.</small>
                    </div>

                    <div className="itemdiv">
                        <img src={check} alt="" className="check" />
                        <small>Lorem ipsum dolor sit amet consectetur.</small>
                    </div>

                    <div className="itemdiv">
                        <img src={check} alt="" className="check" />
                        <small>Lorem ipsum dolor sit amet consectetur.</small>
                    </div>

                    <div className="itemdiv">
                        <img src={check} alt="" className="check" />
                        <small>Lorem ipsum dolor sit amet consectetur.</small>
                    </div>

                    <div className="itemdiv">
                        <img src={check} alt="" className="check" />
                        <small>Lorem ipsum dolor sit amet consectetur.</small>
                    </div>

                    <div className="itemdiv">
                        <img src={check} alt="" className="check" />
                        <small>Lorem ipsum dolor sit amet consectetur.</small>
                    </div>

                    <div className="section1buttondiv">
                        <Link to='/Menu'><button className="menuBTN">Menu</button></Link>
                        <button className="bookatableBTN">Book a table</button>
                    </div>

                </div>
            </div>
            <div className="section3right">
                <img className='section3bigimg' src={bigimg} alt="" />
            </div>
        </div>
    )
}

export default Section3