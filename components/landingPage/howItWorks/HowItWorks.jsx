import React from 'react'
import css from './howItWorks.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import Iconify from '@/components/shared/iconify/iconify'

const data = [
    {
        _id: 1,
        iconImage: '/how_it_works/icon1.svg',
        title: 'Submit your assignment',
        description: ['Briefly describe the bank you wish ', 'to have carried out']
    },
    {
        _id: 2,
        iconImage: '/how_it_works/icon2.svg',
        title: 'The offer is processed',
        description: ['Our service department will ', 'contact by phone']
    },
    {
        _id: 3,
        iconImage: '/how_it_works/icon3.svg',
        title: 'You receive the Offers',
        description: ['The selected bank will give you an ', 'offer to suits you best']
    },
    {
        _id: 4,
        iconImage: '/how_it_works/icon4.svg',
        title: 'You choose the offer',
        description: ['Choose freely between the three ', 'offers and all done']
    },
]

const HowItWorks = () => {
    return (
        <section className={cx('custom_container', css.how_works_container)}>
            <SectionHeading>That’s how easy it is to obtain bank offers</SectionHeading>

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
                                    sizes="(max-width: 900px) 100vw, 33vw"
                                    className={css.card_img}
                                />
                            </div>
                            {/* <div className={css.image_container}>
                                <Image
                                    src={item.iconImage}
                                    alt={item.title}
                                    fill
                                    quality={100}
                                    priority
                                />
                            </div> */}
                            <h6 className={cx('typoH6', css.card_title)}>{item.title}</h6>
                            <p className={cx("typoBody2", css.card_description)}>
                                {item.description}
                            </p>
                            <Iconify
                                icon="mingcute:arrow-right-line"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HowItWorks