'use client';

import Image from 'next/image';
import Logo from '../../public/images/Logo.png'
import Link from 'next/link';
import Menu from "../../public/images/Menu.svg";
import Cross from "../../public/images/Cross.svg";
import { NavMenu } from './NavMenu';
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <nav className="main-container fixed top-0 left-0 max-h-[80px] border-b border-[#EBEBEB] bg-white z-50">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-12">
                        <div id="logo" className="relative cursor-pointer">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    className="logo"
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex gap-6">
                                <li className="navLink">
                                    <Link href="/directions">
                                        使用說明
                                    </Link>
                                </li>
                                <li className="navLink">
                                    <Link href="/charge">
                                        收費說明
                                    </Link>
                                </li>
                                <li className="navLink">
                                    <Link href="/stepInfo">
                                        站點資訊
                                    </Link>
                                </li>
                                <li className="navLink">
                                    <Link href="/news">
                                        最新消息
                                    </Link>
                                </li>
                                <li className="navLink">
                                    <Link href="/activity">
                                        活動專區
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button
                            type="button"
                            className="bg-success py-[10px] px-6 rounded-3xl text-[18px] text-white font-noto"
                        >
                            登入
                        </button>
                    </div>
                    <div className="md:hidden">
                        {isOpen
                            ?
                            <button type="button" onClick={() => setOpen(isOpen => !isOpen)}>
                                <Image
                                    src={Cross}
                                    alt="close-button"
                                    width={24}
                                    height={24}
                                />
                            </button>
                            :
                            <button type="button" onClick={() => setOpen(isOpen => !isOpen)}>
                                <Image
                                    src={Menu}
                                    alt="menu-button"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        }
                    </div>
                </div>
            </nav>
            <NavMenu isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}