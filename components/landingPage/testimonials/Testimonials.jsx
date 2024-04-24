'use client'

import React from 'react'
import css from './testimonials.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Image from 'next/image'
import Slides from './slides/Slides'
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const data = [
    {
        _id: 1,
        iconImage: '/testimonials/icon1.svg',
        numbers: 656000,
        description: 'Contracts since the year 2000',
    },
    {
        _id: 2,
        iconImage: '/testimonials/icon2.svg',
        numbers: 1671,
        description: 'Active customers around the world',
    },
    {
        _id: 3,
        iconImage: '/testimonials/icon3.svg',
        numbers: 90,
        description: 'Success rate on submitted contracts',
    },
]


const Testimonials = () => {
    const { ref, inView } = useInView({ threshold: 0.4 });

    return (
        <section ref={ref} className={cx(css.testimonials_container)}>
            <Image
                src={'/testimonials_bg.png'}
                alt='background image'
                fill
                quality={100}
                priority={true}
                className={css.image_bg}
            />
            <div className={css.heading_wrapper}>
                <SectionHeading>
                    We have been mediating businesses since the {" "}
                    <br />
                    year 2000
                </SectionHeading>
            </div>
            <div className={cx(css.columns)}>
                <div className={cx(css.column1)}>
                    <div className={css.cards}>
                        {data.map((item, ind) => {
                            return (
                                <div className={css.card} key={item._id}>
                                    <div className={css.card_left}>
                                        <div className={css.card_img_container}>
                                            <Image
                                                src={item.iconImage}
                                                alt={'icons'}
                                                // fill
                                                width={100}
                                                height={100}
                                                quality={100}
                                                priority={true}
                                                className={css.card_img}
                                            />
                                        </div>
                                    </div>
                                    <div className={css.card_text}>
                                        <motion.h4
                                            className={cx('typoH4', css.card_title)}
                                        >
                                            {inView ? (
                                                <CountUp
                                                    start={0}
                                                    end={item.numbers}
                                                    duration={5}
                                                    decimal=","
                                                    suffix={data.length === (ind + 1) ? " %" : ""}
                                                >
                                                </CountUp>
                                            ) : 1}
                                        </motion.h4>
                                        <p className={cx("typoBody1", css.card_description)}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={cx(css.column2)}>
                    <div className={css.testimonical_card}>
                        <h4 className={cx("typoH4", css.card_heading)}>
                            This is how customers rate {" "}
                            <br />
                            3bankoffers.com
                        </h4>
                        <Slides />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials