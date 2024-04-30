'use client'

import { SectionHeadingLarge } from '@/components/shared/SectionHeading/SectionHeading'
import React, { useRef, useState } from 'react'
import css from './aboutHero.module.scss'
import cx from 'classnames'
import Iconify from '@/components/shared/iconify/iconify';

const AboutHero = () => {
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
        <div className={cx('custom_container', css.about_hero_container)}>
            <SectionHeadingLarge>
                About 3bankoffers.com
            </SectionHeadingLarge>
            <p className={cx("typoBody1", css.description)}>
                At 3byggetilbud.dk you can obtain free quotes from tradesmen when you have a construction or renovation task. We help you find tradesmen or contractors that suit your work task. Our nationwide network of craftsmen and business partners numbers more than 1,600 companies.
            </p>

            <div className={css.video_wrapper}>
                <video className={css.video} poster='/thumbnail2.jpg' ref={videoRef} controls={isClicked ? true : false}>
                    <source src="/video2.mp4" type="video/mp4" />
                </video>
                {/* {!isClicked && (
                    <span className={css.icon} onClick={handleVideoIconClick}>
                        <Iconify icon="mage:play-fill" width={35} />
                    </span>
                )} */}
            </div>
        </div>
    )
}

export default AboutHero