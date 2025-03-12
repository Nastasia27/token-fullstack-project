
import "../styles/components/_button.scss";

interface BurgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function BurgerButton({isOpen, toggleMenu}: BurgerButtonProps) {

  return (
    <button
      className={`btn btn--menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}