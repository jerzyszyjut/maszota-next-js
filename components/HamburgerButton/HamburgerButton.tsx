import style from "./HamburgerButton.module.scss";

interface Props {
  onClick: () => void;
  isActivated: boolean;
}

const HamburgerButton = ({ onClick, isActivated }: Props) => {
  return (
    <button
      className="w-12 h-12 flex justify-center items-center xl:hidden"
      type="button"
      aria-label={!isActivated ? "Open menu" : "Close menu"}
      onClick={onClick}
    >
      <span
        className={`${style.hamburgerIcon} ${isActivated ? style.active : ""}`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
