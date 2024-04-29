import React from 'react'
import css from './ourGuarantee.module.scss'
import cx from 'classnames'
import { SectionHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Image from 'next/image'

const data = [
    {
        _id: 1,
        iconImage: '/add-on-service/icon1.svg',
        title: <>Maximum 3 <br /> business days</>,
    },
    {
        _id: 2,
        iconImage: '/add-on-service/icon2.svg',
        title: <>No Cure, <br /> No Pay policy</>,
    },
    {
        _id: 3,
        iconImage: '/add-on-service/icon3.svg',
        title: <>Best available rate <br /> negotiated</>,
    },
]

const OurGuarantee = () => {
    return (
        <section className={css.guarantee_container}>
            <Image
                src={'/how_it_works_bg.png'}
                alt='background image'
                fill
                priority={true}
                quality={100}
                className={css.image_bg}
            />
            <div className={cx('custom_container', css.guarantee_sub_container)}>
                <SectionHeading>Our Guarantee</SectionHeading>
                <div className={css.cards}>
                    {data.map((item) => {
                        return (
                            <div className={css.card} key={item._id}>
                                <div className={css.card_img_container}>
                                    <Image
                                        src={item.iconImage}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        quality={100}
                                        priority={true}
                                        className={css.card_img}
                                    />
                                </div>
                                <h6 className={cx('typoH6', css.card_title)}>{item.title}</h6>
                            </div>
                        )
                    })}
                </div>
                <p className={cx("typoBody1", css.description)}>
                    We stand by our promise of delivering results. With our 'Guaranteed No Cure, No Pay' policy, you can trust that we'll go above and beyond to secure a bank account for your business. If we can't deliver, you don't pay a cent
                </p>
            </div>
        </section>
    )
}

export default OurGuarantee