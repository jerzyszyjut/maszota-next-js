import style from './HamburgerButton.module.scss';

interface Props {
    onClick: () => void;
    isActivated: boolean;
}

const HamburgerButton = ({ onClick, isActivated }: Props) => {
    return (
        <button
            className='w-8 h-8 flex justify-center items-center md:hidden'
            type="button"
            onClick={onClick}
        >
            <span className={`${style.hamburgerIcon} ${isActivated ? style.active : ''}`}></span>
        </button >
    );
};

export default HamburgerButton;
