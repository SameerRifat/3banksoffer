import React from 'react'
import css from './sectionHeading.module.scss'
import cx from 'classnames'

// export const SectionHeadingLarge = ({ children }) => {
//     return (
//         <h2 className={cx("typoH2", "text_gradient", css.heading)}>
//             {children}
//         </h2>
//     )
// }
export const SectionHeading = ({ children, extraStyles }) => {
    return (
        <h3 className={cx("typoH3", css.heading, extraStyles)}>
            {children}
        </h3>
    )
}
