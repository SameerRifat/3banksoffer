'use client'

import React, { useRef } from 'react'
import css from './slides.module.scss'
import cx from 'classnames'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from '@/components/shared/iconify/iconify'

const testimonialsData = [
    {
        _id: 1,
        description: 'Really good experience with getting 3 bank offers. Easy and fast process, good follow up.',
        name: 'Elena Johnson',
        date: 'May 15, 2023'
    },
    {
        _id: 2,
        description: 'Application is easy and straightforward, there is great support from 3bankoffers.com',
        name: 'John Smith',
        date: 'February 28, 2023'
    },
    {
        _id: 3,
        description: 'It worked well, and I got an IBAN in 24 hours with their VIP service.',
        name: 'Grace Lee',
        date: 'July 10, 2022'
    },
    {
        _id: 4,
        description: 'Amazing experience, got offers from 3 friendly and trustworthy banks.',
        name: 'Alexander Brown',
        date: 'March 29, 2023'
    },
    {
        _id: 5,
        description: 'Quick to get back, easy communication, great execution.',
        name: 'Sophia Williams',
        date: 'April 5, 2022'
    },
    {
        _id: 6,
        description: 'Quick and efficient help to find useful banks.',
        name: 'Michael Davis',
        date: 'January 20, 2024'
    },
];



const Slides = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
    };
    return (
        <div className={css.slides_container}>
            <div className={css.testimonials}>
                <div className={css.slider_container}>
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                        className={css.slider}
                    >
                        {testimonialsData.map((item) => {
                            return (
                                <div className={`${css.tetimonial}`} key={item._id}>
                                    <p className={cx("typoSubtitle1", css.description)}>
                                        {item.description}
                                    </p>
                                    <p className={cx('typoBody1', css.name)}>{item.name}</p>
                                    <p className={cx('typoBody1', css.date)}>{item.date}</p>
                                </div>
                            )
                        })}
                    </Slider>
                    <div className={css.arrows}>
                        <div className={css.arrow} onClick={previous}>
                            <Iconify
                                icon="raphael:arrowleft"
                            />
                        </div>
                        <div className={css.arrow} onClick={next}>
                            <Iconify
                                icon="raphael:arrowright"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slides