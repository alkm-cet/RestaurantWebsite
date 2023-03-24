import React from 'react'
import './Contact.css';
import contactleftimg from '../../img/dinner2.jpg'

import contactleaf1 from '../../img/greenleaf1.png'
import contactleaf2 from '../../img/greenleaf2.png'
import contactleaf3 from '../../img/greenleaf3.png'

function Contact() {
    return (
        <div className='Contact' style={{ backgroundImage: "url(" + contactleftimg + ")" }}>

            <div className="contactdiv">
                <img src={contactleaf1} alt="" className="contactleaf1" />
                <img src={contactleaf2} alt="" className="contactleaf2" />
                <img src={contactleaf3} alt="" className="contactleaf3" />

                <div className="contactleft" >
                    <h1>Contact Information</h1>
                    <p>You can reach us at..</p>
                    <div className="info">
                        <span class="material-symbols-outlined" style={{ color: 'white' }}>
                            call
                        </span>
                        +90 789 896 5874
                    </div>
                    <div className="info">
                        <span class="material-symbols-outlined">
                            mail
                        </span>
                        restourant@gmail.com
                    </div>
                    <div className="info">
                        <span class="material-symbols-outlined">
                            location_on
                        </span>
                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                    </div>
                </div>


                <div className="contactright">
                    <form action="">

                        <div className="formleft">
                            <div className="block">
                                <label htmlFor="FirstName">FirstName</label>
                                <input type="text" placeholder='Name' autoComplete='off' />
                            </div>

                            <div className="block">
                                <label htmlFor="FirstName">LastName</label>
                                <input type="text" placeholder='Last name' />
                            </div>

                        </div>

                        <div className="formright">
                            <div className="block">
                                <label htmlFor="FirstName">E-Mail</label>
                                <input type="text" placeholder='E-mail' />
                            </div>

                            <div className="block">
                                <label htmlFor="FirstName">Phone</label>
                                <input type="text" placeholder='Phone' />
                            </div>

                        </div>

                        <div className="block">
                            <label htmlFor="FirstName">Your Message</label>
                            <input type="text" placeholder='Message' />
                        </div>

                        <button className='sendmessageBTN' onClick={(e) => e.preventDefault()}>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact