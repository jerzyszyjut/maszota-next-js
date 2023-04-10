import Image from "next/image"
import LogoImage from "../../assets/logo-navbar.png"
import style from "./Logo.module.scss"

const Logo = () => (
    <Image
        src={LogoImage}
        alt="Logo"
        width={360}
        height={80}
        className={style.logo}
    />
)

export default Logo
