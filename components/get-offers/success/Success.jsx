import React from 'react'
import css from './success.module.scss'
import cx from 'classnames'
import Image from 'next/image'

const Success = () => {
    return (
        <section className={css.success_wrapper}>
            <div className={css.done_image}>
                <Image
                    src="/done.svg"
                    alt='icon'
                    width={400}
                    height={400}
                    priority
                    quality={100}
                />
            </div>
            <h3 className={cx("typoH3", "text_gradient", css.thanks_heading)}>
                Thanks for {" "}
                <br />
                Submission
            </h3>
        </section>
    )
}

export default Success