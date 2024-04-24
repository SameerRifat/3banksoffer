import React from 'react'
import css from './advantages.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Image from 'next/image'

const data = [
    {
        _id: 1,
        iconImage: '/advantages/icon1.svg',
        title: 'Save time and money',
        description: "Don't have to find and contact banks yourself. 3bankoffers.com does the work for you. You receive 3 non-binding offers, after which you can choose the best one."
    },
    {
        _id: 2,
        iconImage: '/advantages/icon2.svg',
        title: 'Personal guidance',
        description: "Our service department will contact you and review your banking requirements with you. We are always available and are your guarantee for a professional onboarding in one of our partner banks."
    },
    {
        _id: 3,
        iconImage: '/advantages/icon3.svg',
        title: 'Bank guarantee',
        description: "As we only deal with electronic money institutions that aren’t allowed to take any risks at all with client funds makes it safer than conventional banks."
    },
    {
        _id: 4,
        iconImage: '/advantages/icon4.svg',
        title: 'Free Service',
        description: "3bankoffers.com is a free and 100% non-binding service. You are therefore not forced to choose any of the offers you obtain. You also don't have to pay to submit assignments."
    },
]

const Advantages = () => {
    return (
        <section className={cx(css.advantages_container)}>
            <Image
                src={'/advantages/bg.png'}
                alt='background image'
                fill
                quality={100}
                priority={true}
                className={css.image_bg}
            />
            <div className={cx('custom_container', css.sub_container)}>
                <SectionHeading>Advantages of obtaining banks quotes online</SectionHeading>
                <p className={cx('typoBody1', css.sub_title)}>
                    80% of all American businesses during the {" "}
                    <br />
                    last year have been made online
                </p>
                <div className={css.cards}>
                    {data.map((item) => {
                        return (
                            <div className={css.card} key={item._id}>
                                <div className={css.card_img_container}>
                                    <Image
                                        src={item.iconImage}
                                        alt={item.title}
                                        fill
                                        quality={100}
                                        priority={true}
                                        sizes="(max-width: 900px) 100vw 25vw"
                                        className={css.card_img}
                                    />
                                </div>
                                <h6 className={cx('typoH6', css.card_title)}>{item.title}</h6>
                                <p className={cx("typoBody1", css.card_description)}>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Advantages