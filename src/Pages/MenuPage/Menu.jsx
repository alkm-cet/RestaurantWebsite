import React, { useState } from 'react'
import './Menu.css';
import cardimg1 from '../../img/cardimg1.png'
import cardimg2 from '../../img/cardimg2.png'
import cardimg3 from '../../img/cardimg3.png'
import cardimg4 from '../../img/cardimg4.png'
import cardimg5 from '../../img/cardimg5.png'
import cardimg6 from '../../img/cardimg6.png'
import cardimg7 from '../../img/cardimg7.png'

function Menu() {

    const [color, setColor] = useState(false)

    const handleClick = (e) => {
        setColor(prev => !prev)
        color ? e.target.style.color = 'red' : e.target.style.color = 'black'
    }
    return (
        <div className='Menu'>
            <div className="menuleftdiv">
                <h2>Fresh and Healty</h2>
                <h1>Our Special Menu</h1>
                <p>We Made Fresh And Healty Foods</p>
                <img src={cardimg5} alt="" />
            </div>

            <div className="menurightdiv">

                <div className="menurightdivleft">
                    <div className="menucarddiv">
                        <img src={cardimg1} alt="" />
                        <div className="carddivmid">
                            <h3>Lumpia with Suace</h3>
                            <small style={{ fontSize: '12px' }}>Orange and Lemon</small>
                        </div>
                        <div className="carddivbottom">
                            <p>$12.00</p>
                            <span onClick={handleClick} className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>
                    </div>
                    <div className="menucarddiv">
                        <img src={cardimg2} alt="" />
                        <div className="carddivmid">
                            <h3>Fish and Veggie</h3>
                            <small style={{ fontSize: '12px' }}>Orange and Lemon</small>
                        </div>
                        <div className="carddivbottom">
                            <p>$14.00</p>
                            <span onClick={handleClick} className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>
                    </div>
                    <div className="menucarddiv">
                        <img src={cardimg3} alt="" />
                        <div className="carddivmid">
                            <h3>Tofu Chili</h3>
                            <small style={{ fontSize: '12px' }}>Orange and Lemon</small>
                        </div>
                        <div className="carddivbottom">
                            <p>$12.00</p>
                            <span onClick={handleClick} className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>
                    </div>
                </div>

                <div className="menurightdivright">
                    <div className="menucarddiv">
                        <img src={cardimg4} alt="" />
                        <div className="carddivmid">
                            <h3>Egg and Cocumber</h3>
                            <small style={{ fontSize: '12px' }}>Orange and Lemon</small>
                        </div>
                        <div className="carddivbottom">
                            <p>$10.00</p>
                            <span onClick={handleClick} className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>

                    </div>

                    <div className="menucarddiv">
                        <img src={cardimg6} alt="" />
                        <div className="carddivmid">
                            <h3>Citrus Salad</h3>
                            <small style={{ fontSize: '12px' }}>Orange and Lemon</small>
                        </div>
                        <div className="carddivbottom">
                            <p>$15.00</p>
                            <span onClick={handleClick} className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>

                    </div>

                    <div className="menucarddiv">
                        <img src={cardimg7} alt="" />
                        <div className="carddivmid">
                            <h3>Ceasar</h3>
                            <small style={{ fontSize: '12px' }}>Orange and Lemon</small>
                        </div>
                        <div className="carddivbottom">
                            <p>$17.00</p>
                            <span onClick={handleClick} className="material-symbols-outlined">
                                favorite
                            </span>
                        </div>

                    </div>
                </div>



            </div>


        </div >
    )
}

export default Menu