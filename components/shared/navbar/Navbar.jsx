'use client'

import React, { useState } from 'react'
import css from './navbar.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Iconify from "@/components/shared/iconify/iconify";
import { navLinks } from './navData'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import Image from 'next/image'

const Navbar = () => {
    const pathname = usePathname();
    const [openSidebar, setOpenSidebar] = useState(false)
    const [open, setOpen] = useState(false);

    const halfLength = Math.ceil(navLinks.length / 2);
    const leftLinks = navLinks.slice(0, halfLength);
    const rightLinks = navLinks.slice(halfLength);

    return (
        <>
            <header className={cx('custom_container', css.navbar)}>
                <div className={css.menu_icon} onClick={() => setOpenSidebar((prevState) => !prevState)}>
                    <Iconify
                        // icon="basil:menu-outline"
                        icon="heroicons-outline:menu-alt-1"
                        // color="#D9F6FF"
                        width={45}
                    />
                </div>
                <div className={css.navlinks}>
                    {leftLinks.map((navlink) => {
                        const isActive =
                            (pathname.includes(navlink.route) && navlink.route.length > 1) ||
                            pathname === navlink.route;
                        return (
                            <Link key={navlink.label} href={navlink.route} className={`${css.navlink} ${isActive && css.active_link}`}>
                                {navlink.label} {isActive}
                            </Link>
                        )
                    })}
                </div>
                <div className={css.logo}>
                    <Link href='/'>
                        <Image 
                            src={'/logo2.png'}
                            alt='logo'
                            width={100}
                            height={100}
                            quality={100}
                            priority
                        />
                    </Link>
                </div>
                <div className={css.navlinks}>
                    {rightLinks.map((navlink) => {
                        const isActive =
                            (pathname.includes(navlink.route) && navlink.route.length > 1) ||
                            pathname === navlink.route;
                        return (
                            <Link key={navlink.label} href={navlink.route} className={`${css.navlink} ${isActive && css.active_link}`}>
                                {navlink.label} {isActive}
                            </Link>
                        )
                    })}
                </div>
            </header>
            <MobileSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </>
    )
}

export default Navbar



// 'use client'

// import React, { useState } from 'react'
// import css from './navbar.module.scss'
// import cx from 'classnames'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import Iconify from "@/components/shared/iconify/iconify";
// import { navLinks } from './navData'

// const Navbar = () => {
//     const pathname = usePathname();
//     const [openSidebar, setOpenSidebar] = useState(false)
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//             <header className={css.navbar}>
//                 <div className={css.navlinks}>
//                     {navLinks.map((navlink) => {
//                         const isActive =
//                             (pathname.includes(navlink.route) && navlink.route.length > 1) ||
//                             pathname === navlink.route;
//                         return (
//                             <Link key={navlink.label} href={navlink.route} className={`${css.navlink} ${isActive && css.active_link}`}>
//                                 {navlink.label} {isActive}
//                             </Link>
//                         )
//                     })}
//                 </div>
//                 <Link href='/' className={css.logo}>
//                     Main Logo
//                 </Link>
//                 <div className={css.menu_icon} onClick={() => setOpenSidebar((prevState) => !prevState)}>
//                     <Iconify
//                         icon="basil:menu-outline"
//                         color="#D9F6FF"
//                         width={40}
//                     />
//                 </div>
//             </header>
//         </>
//     )
// }

// export default Navbar