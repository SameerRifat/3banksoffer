import React from 'react'
import css from './contactSection.module.scss'
import cx from 'classnames'
import { SectionHeading, SmallHeading } from '@/components/shared/SectionHeading/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'

const ContactSection = () => {
    return (
        <div className={cx('custom_container', css.container)}>
            <div className={css.contact_left}>
                <SectionHeading extraStyles={css.heading}>
                    Do you have questions regarding a bank?
                </SectionHeading>
                <SmallHeading extraStyles={css.sub_heading}>
                    Then our service team is always available.
                </SmallHeading>
                <p className={cx("typoBody1", css.description)}>
                    Call <Link href='tel:+45 71651281' target='_blank'>+45 71651281</Link> or send an email to <Link href='mailto:info@3bankoffers.com' target='_blank'>info@3bankoffers.com</Link> Our service
                    <br />
                    team is on call every weekday between 9am and 4pm and also on
                    <br />
                    most weekends.
                </p>
            </div>
            <div className={css.contact_right}>
                <div className={css.img_container}>
                    <Image
                        src='/get-offers.svg'
                        alt='icon'
                        width={300}
                        height={300}
                        quality={100}
                        priority={true}
                        className={css.img}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactSection