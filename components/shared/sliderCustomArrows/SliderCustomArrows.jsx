import React from 'react'
import css from './sliderCustomArrows.module.scss'
import Iconify from '../iconify';
// import Iconify from "@/components/iconify/iconify";

export const CustomNextArrow = ({ onClick }) => (
    <div
        className={`${css.customNextArrow}`}
        onClick={onClick}
    >
        <Iconify
            // icon={testimonials ? "iconamoon:arrow-right-2" : "ic:round-arrow-right"}
            icon="iconamoon:arrow-right-2"
            // color="#fff"
            width={40}
        />
    </div>
);

export const CustomPrevArrow = ({ onClick }) => (
    <div
        className={`${css.customPrevArrow}`}
        onClick={onClick}
    >
        <Iconify
            // icon={testimonials ? "iconamoon:arrow-left-2" : "ic:round-arrow-left"}
            icon="iconamoon:arrow-left-2"
            // color="#fff"
            width={40}
        />
    </div>
);