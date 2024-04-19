import React from 'react'
import css from './testimonials.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Image from 'next/image'
import Slides from './slides/Slides'

const data = [
    {
        _id: 1,
        iconImage: '/testimonials/icon1.svg',
        numbers: '656, 000',
        description: ['Contracts since the year ', '2000'],
    },
    {
        _id: 2,
        iconImage: '/testimonials/icon2.svg',
        numbers: '1,671',
        description: ['Active customers around ', 'the world'],
    },
    {
        _id: 3,
        iconImage: '/testimonials/icon3.svg',
        numbers: '90%',
        description: ['Success rate on ', 'submitted contracts'],
    },
]

const Testimonials = () => {
    return (
        <section className={cx(css.testimonials_container)}>
            <Image
                src={'/testimonials_bg.png'}
                alt='background image'
                fill
                // width={100}
                // height={100}
                // quality={100}
                priority={true}
                // sizes="(max-width: 400px) 50vw, 25vw"
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
                        {data.map((item) => {
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
                                        <h5 className={cx('typoH5', css.card_title)}>{item.numbers}</h5>
                                        <p className={cx("typoBody2", css.card_description1)}>
                                            {item.description[0]}
                                            <br />
                                            {item.description[1]}
                                        </p>
                                        <p className={cx("typoBody2", css.card_description2)}>
                                            {item.description[0]} {" "} {item.description[1]}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={cx(css.column2)}>
                    <div className={css.testimonical_card}>
                        <h5 className={cx("typoH5", css.card_heading)}>
                            This is how customers rate {" "}
                            <br />
                            3bankoffers.com
                        </h5>
                        <Slides />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials