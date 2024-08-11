import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Logo from "../Logo/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import FlagPL from "../../assets/flags/pl.png";
import FlagEN from "../../assets/flags/en.png";
import FlagDE from "../../assets/flags/de.png";
import styles from "./NavigationBar.module.scss";

const links = [
  {
    href: "/",
    label: "navigation-bar:home",
  },
  {
    href: "/#partners",
    label: "navigation-bar:partners",
  },
  {
    href: "/services",
    label: "navigation-bar:services",
  },
  {
    href: "/socials",
    label: "navigation-bar:social",
  },
  {
    href: "/gallery",
    label: "navigation-bar:gallery",
  },
  {
    href: "/contact",
    label: "navigation-bar:contact",
  },
];

const flags = [
  {
    id: "pl",
    locale: "pl",
    src: FlagPL,
    alt: "Polish flag",
  },
  {
    id: "en",
    locale: "en",
    src: FlagEN,
    alt: "English flag",
  },
  {
    id: "de",
    locale: "de",
    src: FlagDE,
    alt: "German flag",
  },
];

type NavigationBarProps = {
  stripe?: boolean;
};

const NavigationBar = ({ stripe }: NavigationBarProps) => {
  const { t } = useTranslation(["navigation-bar"]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const redirectToHomePage = () => {
    const { pathname, asPath, query, locale } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <>
      <nav className="w-full flex justify-center items-center flex-col xl:flex-row p-4 bg-white">
        <div className="flex w-full xl:w-auto justify-between items-center">
          <Logo onClick={redirectToHomePage} />
          <HamburgerButton
            onClick={() => setIsOpen(!isOpen)}
            isActivated={isOpen}
          />
        </div>
        <div
          className={`flex justify-around items-center flex-col xl:flex-row px-0 xl:px-4 transition-all ${
            !isOpen ? styles.hidden : ""
          }`}
        >
          <ul
            className={`flex justify-around items-center flex-col xl:flex-row px-0 xl:px-4 transition-all ${
              !isOpen ? styles.hidden : ""
            }`}
          >
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link
                  onClick={() => setIsOpen((previousState) => !previousState)}
                  href={href}
                  className={`${
                    router.pathname === href ? styles.active : ""
                  } w-auto xl:w-44 mx-1 py-4 text-xl uppercase flex justify-center items-center hover:text-ma-s transition-all xl:border-b-2 xl:border-ma-s`}
                >
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center flex-col w-7 h-7">
            {flags
              .filter((flag) => flag.locale !== router.locale)
              .map((flag) => (
                <Image
                  key={flag.id}
                  src={flag.src}
                  alt={flag.alt}
                  width={30}
                  height={30}
                  onClick={() => changeLanguage(flag.locale)}
                  className="cursor-pointer m-1 xl:mb-0 w-7 h-7"
                />
              ))}
          </div>
        </div>
      </nav>
      {stripe && <div className={styles.stripe}></div>}
    </>
  );
};

export default NavigationBar;
