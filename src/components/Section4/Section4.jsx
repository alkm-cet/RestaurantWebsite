import React from 'react'
import './Section4.css';
import pan from '../../img/pan.png'
import user1 from '../../img/user1.png'
import user2 from '../../img/user2.jpg'
import user3 from '../../img/user3.jpg'
import user4 from '../../img/user4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';


function Section4() {
    return (
        <div className='Section4'>
            <img src={pan} alt="" className="pan" />
            <h1>Our Happy Customers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa quis a nobis officiis pariatur eveniet.
            </p>

            <div className="swipercontainer">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={'50%'}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="testamonial">
                            <img className='person' src={user1} alt="" />
                            <small>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eos explicabo nemo similique velit libero asperiores ipsa,
                                nobis sunt omnis facilis.
                            </small>
                            <h4>Ama Ampomah</h4>
                            <small>CEO & Founder Inc</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testamonial">
                            <img className='person' src={user2} alt="" />
                            <small>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eos explicabo nemo similique velit libero asperiores ipsa,
                                nobis sunt omnis facilis.

                            </small>
                            <h4>Mattis Sigrid</h4>
                            <small>Gourmet</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testamonial">
                            <img className='person' src={user3} alt="" />
                            <small>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eos explicabo nemo similique velit libero asperiores ipsa,
                                nobis sunt omnis facilis.

                            </small>
                            <h4>Karsten Gudmund</h4>
                            <small>Chef</small>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testamonial">
                            <img className='person' src={user4} alt="" />
                            <small>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eos explicabo nemo similique velit libero asperiores ipsa,
                                nobis sunt omnis facilis.
                            </small>
                            <h4>Oriana Desamparados</h4>
                            <small>Columnist</small>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </div>
    )
}

export default Section4