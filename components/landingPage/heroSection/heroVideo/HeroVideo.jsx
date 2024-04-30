'use client'

import React from 'react'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

const HeroVideo = ({ open, setOpen }) => {
    return (
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            // slides={slides}
            // plugins={[Zoom]}
            plugins={[Video]}
            slides={[
                {
                    type: "video",
                    width: 1280,
                    height: 720,
                    poster: "/this-is-how-it-works.png",
                    sources: [
                        {
                            src: "/this-is-how-it-works.mp4",
                            type: "video/mp4",
                        },
                    ],
                },
            ]}
            carousel={{ finite: true }}
            render={{
                buttonPrev: true <= 1 ? () => null : undefined,
                buttonNext: true <= 1 ? () => null : undefined,
            }}
        />
    )
}

export default HeroVideo