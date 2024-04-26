import React from 'react'
import css from './sectionHeading.module.scss'
import cx from 'classnames'

export const SectionHeadingLarge = ({ children, extraStyles }) => {
    return (
        <h2 className={cx('typoH2', css.heading_large, extraStyles)}>
            {children}
        </h2>
    )
}
export const SectionHeading = ({ children, extraStyles }) => {
    return (
        <h3 className={cx("typoH3", css.heading, extraStyles)}>
            {children}
        </h3>
    )
}
export const SmallHeading = ({ children, extraStyles }) => {
    return (
        <h4 className={cx("typoH4", css.small_heading, extraStyles)}>
            {children}
        </h4>
    )
}