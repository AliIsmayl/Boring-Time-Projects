import './Header.scss'
import { GiStonePile } from "react-icons/gi";
import { MdOutlineSearch } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { IoMdArrowUp } from "react-icons/io";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

function Header() {
    return (
        <header>
            <div className="upBox">
                <div className="upBoxInLeftBox">
                    <div className="logoBox">
                        <GiStonePile />
                        <p>Statue</p>
                    </div>
                    <div className="searchBox">
                        <div className="searchIcon">
                            <MdOutlineSearch />
                        </div>
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className="microphoneIcon">
                        <HiOutlineMicrophone />
                    </div>
                </div>
                <div className="upBoxInRightBox">
                    <div className="phoneIcon">
                        <MdPhone />
                    </div>
                    <div className="emailBox">
                        ali.ismayil.681@gmail.com
                    </div>
                    <div className="menuBox">
                        <p>Menu</p>
                        <div className="barBox">
                            <p className='firstSpan'></p>
                            <p className='secondSpan'></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="downBox">
                <div className="downBoxinLeftBox">
                    <div className="textBox">
                        <div className='bigText'><p><span>Designing</span> the Digital <span>World/</span></p></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit ullam quam quod error vel harum dolore, mollitia neque perferendis dicta veritatis non, fuga doloremque fugiat in hic obcaecati quae?
                        </p>
                        <div className="btnBox">
                            <div className="moreBtn">
                                <div className="line"></div>
                                <p>More</p>
                            </div>
                            <div className="touchBtn">
                                <div className="line"></div>
                                <p>Get in Touch</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiperBox">
                        <div className="upperText">
                            <p>Our Portfolio</p>
                            <div className="clickLittle">
                                <p> <IoMdArrowUp /></p>
                            </div>
                        </div>
                        <div className="middleBox">
                            <Swiper
                                grabCursor={true}
                                effect={'creative'}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                modules={[EffectCreative]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="swiperBox">
                                        <img src="https://i.pinimg.com/564x/8f/30/9f/8f309f2ffc02c636d8868afc00478142.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi quiur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi qui!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiperBox">
                                        <img src="https://i.pinimg.com/564x/af/f2/93/aff2931d40ed23223710e4df7ece8d26.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi quiur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi qui!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiperBox">
                                        <img src="https://i.pinimg.com/564x/04/71/c6/0471c6c230a8e9eebcff0ab38789a290.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi quiur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi qui!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiperBox">
                                        <img src="https://i.pinimg.com/564x/71/1f/a4/711fa45ea8ec783fc569b46b7c8be23d.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi quiur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi qui!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiperBox">
                                        <img src="https://i.pinimg.com/564x/18/1c/f5/181cf5d3b6d97bc60736d2361ea38105.jpg" alt="" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi quiur adipisicing elit. Perferendis voluptatum, quae ex esse harum laudantium commodi quos blanditiis modi qui!</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="downerBox">
                            <div className="normalImage">
                                <img src="https://i.pinimg.com/564x/ad/1f/7f/ad1f7fb9f18e1048acd66d55b5028ba6.jpg" alt="" />
                            </div>
                            <div className="normalText">
                                <p>New</p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque corporis nisi nobis, aliquid nulla.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="downBoxinRightBox">
                    <div className="imageBox">
                        <img src="
                        https://i.pinimg.com/736x/b5/6a/44/b56a44a0559e96bef4d73b2bad2ff8fe.jpg" alt="" />
                        <div className="imageClickBtn">
                            <div className="click">
                                <p> <IoMdArrowUp /></p>
                            </div>
                            <div className="notMeanLeftBox">

                            </div>
                            <div className="notMeanDownBox">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header