import '../styles/components/_button.scss'

interface ButtonProps {
  text: string;
  type?: string;
}

export default function Button({text, type = "primary"}: ButtonProps) {
  return (
    <button className={`btn btn--${type}`}>
        {text}
    </button>
  );
}