'use client'

import React, { useRef, useState } from 'react'
import css from './heroSection.module.scss'
import cx from 'classnames'
import Iconify from '@/components/shared/iconify/iconify';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    const [isClicked, setIsClicked] = useState(false);
    const videoRef = useRef();

    const handleVideoIconClick = () => {
        setIsClicked(!isClicked);
        const video = videoRef.current;
        if (video) {
            if (isClicked) {
                video.pause();
            } else {
                video.play();
            }
        }
    };
    return (
        <div className={css.how_it_works_container}>
            <Image
                src={'/how_it_works_bg.png'}
                alt='background image'
                fill
                priority={true}
                quality={100}
                className={css.image_bg}
            />
            <div className={cx('custom_container', css.sub_container)}>
                <h2 className={cx('typoH2', css.heading)}>
                    This is how 3bankOffers.com work
                </h2>
                <p className={cx("typoBody1", css.description)}>
                    So easily and quickly you can obtain a free and non-binding
                    <br />
                    offer for your business
                </p>
                <div className={css.columns}>
                    <div className={css.column1}>
                        <div className={css.video_wrapper}>
                            <video className={css.video} poster='/this-is-how-it-works.png' ref={videoRef} controls={isClicked ? true : false}>
                                <source src="/this-is-how-it-works.mp4" type="video/mp4" />
                            </video>
                            {!isClicked && (
                                <span className={css.icon} onClick={handleVideoIconClick}>
                                    <Iconify icon="mage:play-fill" width={30} />
                                </span>
                            )}
                        </div>
                    </div>
                    <div className={css.column2}>
                        <h4 className={cx("typoH4", css.column2_heading)}>
                            Understand 3bankoffers.com’s
                            <br />
                            concept in 1 minute
                        </h4>
                        <ul>
                            <li className={cx('typoBody1')}>Describe and submit your assignment</li>
                            <li className={cx('typoBody1')}>We will call you and process your task</li>
                            <li className={cx('typoBody1')}>Banks contact you</li>
                            <li className={cx('typoBody1')}>Choose a bank</li>
                        </ul>
                    </div>
                </div>
                <div className={css.btns}>
                    <p className={cx("typoBody1", css.btn1)}>
                        See how simple it is
                        <Iconify icon="tabler:arrow-down" width={15} />
                    </p>
                    <Link href='#' className={cx("hero_btn", css.link)}>
                        Order 3 non-binding offers
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection