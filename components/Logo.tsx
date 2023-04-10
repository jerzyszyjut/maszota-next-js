import Image from "next/image"
import LogoImage from "../assets/logo-navbar.png"

const Logo = () => (
    <Image
        src={LogoImage}
        alt="Logo"
        width={360}
        height={80}
    />
)

export default Logo
