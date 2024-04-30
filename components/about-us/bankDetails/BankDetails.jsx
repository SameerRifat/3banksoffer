import { SectionHeading, SectionHeadingLarge } from '@/components/shared/SectionHeading/SectionHeading'
import React from 'react'
import css from './bankDetails.module.scss'
import cx from 'classnames'

const BankDetails = () => {
    return (
        <section className={cx('custom_container', css.bank_details_container)}>
            <div className={css.card}>
                <SectionHeading>
                    Bank Details
                </SectionHeading>
                <div>
                    <h6 className={cx('typoH6')}>Account ( Danske Bank )</h6>
                    <p className={cx('typoBody1')}>0323331787001</p>
                </div>
                <div>
                    <h6 className={cx('typoH6')}>CVR-number</h6>
                    <p className={cx('typoBody1')}>241743501</p>
                </div>
            </div>
        </section>
    )
}

export default BankDetails