import React, { useState } from 'react';
import './Booking.css';
import bookingimg from '../../img/bookingimg.jpg'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import logo from '../../img/logo.png'

function Booking() {

    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [reztime, setRezTime] = useState("")
    const [date, setDate] = useState()
    const [rez, setRez] = useState("")

    //----------------------------------Adult
    const increaseAdult = () => {
        setAdult(adult + 1)
    }

    const decreaseAdult = () => {
        if (adult == 0) {
            return
        } else {
            setAdult(adult - 1)
        }
    }
    //----------------------------------Child
    const increaseChild = () => {
        setChild(child + 1)
    }

    const decreaseChild = () => {
        if (child == 0) {
            return
        } else {
            setChild(child - 1)
        }
    }
    //----------------------------------Time
    const handleTime = (e) => {
        setRezTime(e.target.value)
        console.log(reztime)
    }
    //----------------------------------Date
    const handleDate = (e) => {
        setDate(e.target.value)
    }
    //----------------------------------Reservation
    const handleReservation = () => {
        if (date != null && adult != 0) {
            setRez('Your Reservation Has Been Made Succesfully')
        } else {
            alert('Select Date and Person First!')
        }
    }

    return (
        <div className='Booking'>

            <h1>Book a Table</h1>

            <div className="bookingcontainer" style={{ backgroundImage: "url(" + bookingimg + ")" }}>
                <h2 style={{ fontSize: '40px' }}>Reservation <br /> Informations</h2>

                <div className="results">
                    <h3>On : {date}</h3>
                    <h3>People : {adult} Adult & {child} Child</h3>
                    <h3>At : {reztime}</h3>
                    <h2>{rez}</h2>
                </div>

                <div className="infodiv">
                    <img src={logo} alt="" className='bookpagelogo' />
                    <div className="datediv">
                        <h3>Date</h3>
                        <input type="date" className='dateipt' onChange={handleDate} />
                    </div>

                    <div className="personselection">
                        <div className="adultcontainer">
                            <h3>Adult</h3>
                            <button className="increase" onClick={increaseAdult}>+</button>
                            <div className="adultnumber">{adult}</div>
                            <button className="decrease" onClick={decreaseAdult}>-</button>
                        </div>

                        <div className="adultcontainer">
                            <h3>Child</h3>
                            <button className="increase" onClick={increaseChild}>+</button>
                            <div className="adultnumber">{child}</div>
                            <button className="decrease" onClick={decreaseChild}>-</button>
                        </div>
                    </div>

                    <div className="dayornight">
                        <h3>Reservation Time</h3>
                        <div className="BTNS">
                            <button className="dayBTN" onClick={handleTime} value={'Morning'}>
                                <img src={sun} alt="" className='bookingBTNimg' />
                                Morning
                            </button>
                            <button className="nightBTN" onClick={handleTime} value={'Evening'} >
                                <img src={moon} alt="" className='bookingBTNimg' />
                                Evening
                            </button>
                        </div>
                    </div>

                    <div className="makereservationBTN" onClick={handleReservation}>Make Reservation</div>
                </div>
            </div>
        </div>
    )
}

export default Booking