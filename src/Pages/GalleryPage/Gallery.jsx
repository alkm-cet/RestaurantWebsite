import React from 'react'
import './Gallery.css';
import dinner1 from '../../img/dinner1.jpg'
import dinner2 from '../../img/dinner2.jpg'
import dinner3 from '../../img/dinner3.jpg'
import dinner4 from '../../img/dinner4.jpg'
import dinner5 from '../../img/dinner5.jpg'
import dinner6 from '../../img/dinner6.jpg'

function Gallery() {
    return (
        <div className='Gallery'>

            <h1>Gallery</h1>

            <div class="wrapper">
                <div class="onhover one">
                    <img className='galleryImg' src={dinner1} alt="" />
                    <div className="text">
                    Good days to remember
                    </div>
                </div>
                <div class="two onhover" >
                    <img className='galleryImg' src={dinner2} alt="" />
                    <div className="text">
                    Meals to warm you up
                    </div>
                </div>
                <div class="three onhover">
                    <img className='galleryImg' src={dinner3} alt="" />
                    <div className="text">
                    Family warmth
                    </div>
                </div>
                <div class="four onhover"  >
                    <img className='galleryImg' src={dinner4} alt="" />
                    <div className="text">
                    In the happiest days
                    </div>
                </div>
                <div class="five onhover" >
                    <img className='galleryImg' src={dinner5} alt="" />
                    <div className="text">
                    Side by side with your loved ones
                    </div>
                </div>
                <div class="six onhover" >
                    <img className='galleryImg' src={dinner6} alt="" />
                    <div className="text">
                    To the most precious memories
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Gallery