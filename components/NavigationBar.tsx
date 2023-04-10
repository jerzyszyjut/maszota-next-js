import Link from "next/link";
import { useTranslation } from 'next-i18next'
import { useState } from "react";
import Logo from "./Logo"
import HamburgerButton from "./HamburgerButton"
import style from './NavigationBar.module.scss'

const links = [
    {
        href: '/',
        label: 'navigation-bar:home',
    },
    {
        href: '/services',
        label: 'navigation-bar:services',
    },
    {
        href: '/about',
        label: 'navigation-bar:about',
    },
    {
        href: '/contact',
        label: 'navigation-bar:contact',
    },
];


const NavigationBar = () => {
    const { t } = useTranslation(['navigation-bar']);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex justify-center items-center flex-col lg:flex-row p-4 bg-white">
            <div className="flex w-full lg:w-auto justify-between items-center">
                <Logo />
                <HamburgerButton
                    onClick={() => setIsOpen(!isOpen)}
                    isActivated={isOpen}
                />
            </div>
            <ul className={`flex justify-around items-center flex-col lg:flex-row px-0 lg:px-4 transition-all ${!isOpen ? style.hidden : ''}`}>
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <Link href={href} className="w-auto lg:w-40 mx-2 py-4 text-xl uppercase flex justify-center items-center hover:text-ma-s transition-all lg:border-b-2 lg:border-ma-s">
                            {t(label)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationBar
