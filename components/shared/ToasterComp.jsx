import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterComp = () => {
    return (
        <Toaster
            position="top-right"
            // toastOptions={{
            //     success: {
            //         style: {
            //             background: 'var(--background-color2)',
            //             color: 'var(--white)',
            //             border: '1px solid var(--primary-color)'
            //         },
            //     },
            //     error: {
            //         style: {
            //             background: 'var(--background-color2)',
            //             color: 'var(--white)',
            //         }
            //     }
            // }}
        />
    )
}

export default ToasterComp