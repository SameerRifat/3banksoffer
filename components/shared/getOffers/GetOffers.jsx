import React from 'react'
import css from './getOffers.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const GetOffers = () => {
    return (
        <section className={cx('custom_container', css.get_offers_container)}>
            <div className={css.get_offers_left}>
                <div className={css.img_container}>
                    <Image
                        src='/get-offers.svg'
                        alt='icon'
                        width={300}
                        height={300}
                        quality={100}
                        priority={true}
                        sizes="(max-width: 900px) 100vw 50vw"
                        className={css.img}
                    />
                </div>
            </div>
            <div className={css.get_offers_right}>
                <h4 className={cx("typoH4", css.title)}>
                    Haven’t submitted an {" "}
                    <br />
                    assignment yet
                </h4>
                <p className={cx("typoBody1", css.description)}>
                    We can help you with a wide range of {" "}
                    <br />
                    businesses within 80+ industries
                </p>
                <Link href='/get-offers' className={css.btn}>Get 3 offers now</Link>
            </div>
        </section>
    )
}

export default GetOffers