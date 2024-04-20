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
        description: 'Ajamaker provides best features to organize your expenses in one application and save more money Ajamaker provides best features to organize your expenses in one application and save more money provides best features to organize your expenses in one application and save more money',
        name: 'Lena Larsen',
        date: 'April 10, 2024'
    },
    {
        _id: 2,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis voluptatibus unde nihil quia et nisi, minus aperiam ullam. Voluptatum, accusamus porro? Dolorem id, culpa saepe aliquid optio error provides best features to organize your expenses in one application and save more money',
        name: 'John Doe',
        date: 'March 04, 2023'
    },
    {
        _id: 3,
        description: ' recusandae veritatis distinctio commodi, omnis est a molestiae odit numquam debitis tenetur, fuga odio minus accusantium velit veniam ab! quae maiores eaque recusandae veritatis distinctio commodi, omnis est.provides best features to organize your expenses in one application and save more money',
        name: 'Grayson',
        date: 'June 29, 2024'
    },
]

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
                                    <p className={cx("typoBody2", css.description)}>
                                        {item.description}
                                    </p>
                                    <p className={cx('typoBody1', css.name)}>{item.name}</p>
                                    <p className={cx('typoCaption', css.date)}>{item.date}</p>
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