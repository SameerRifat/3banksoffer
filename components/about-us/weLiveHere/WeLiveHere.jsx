import { SectionHeading, SmallHeading } from '@/components/shared/SectionHeading/SectionHeading'
import React from 'react'
import css from './weLiveHere.module.scss'
import cx from 'classnames'

const mapsData = [
    {
        heading: '3bankoffers.com in  Copenhagen',
        description: <>Antonigade 4
            <br />
            1106, Kobenhavn K</>,
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1549.2123765160654!2d-77.1099308!3d39.0512334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cc2ec94dd327%3A0x4a6cc2fbd0961fb1!2sCapital%20Auto%20Upfitters%20%26%20Protective%20Coatings!5e0!3m2!1sen!2s!4v1711469197399!5m2!1sen!2s'
    },
    {
        heading: '3bankoffers.com in  Dubai',
        description: <>Antonigade 4
            <br />
            1106, Kobenhavn K</>,
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1549.2123765160654!2d-77.1099308!3d39.0512334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cc2ec94dd327%3A0x4a6cc2fbd0961fb1!2sCapital%20Auto%20Upfitters%20%26%20Protective%20Coatings!5e0!3m2!1sen!2s!4v1711469197399!5m2!1sen!2s'
    },
]

const WeLiveHere = () => {
    return (
        <div className={cx('custom_container', css.container)}>
            <SectionHeading>
                We live here
            </SectionHeading>
            <p className={cx("typoBody1", css.description)}>
                3bankoffers.com’s head office is located in Copenhagen, but in
                <br />
                the summer of 2018 we opened a subdivision in Dubai.
            </p>
            <div className={css.maps}>
                {mapsData.map((item, ind) => (
                    <Map key={ind} heading={item.heading} description={item.description} mapSrc={item.mapSrc} />
                ))}
            </div>
        </div>
    )
}

export default WeLiveHere

const Map = ({ heading, description, mapSrc }) => {
    return (
        <div className={css.map}>
            {/* <h4 className={cx("typoH4", css.card_heading)}>
                {heading}
            </h4> */}
            <SmallHeading extraStyles={css.sub_heading}>
                {heading}
            </SmallHeading>
            <p className={cx("typoBody1", css.description)}>
                {description}
            </p>
            <div className={css.map_wrapper}>
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px', }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}