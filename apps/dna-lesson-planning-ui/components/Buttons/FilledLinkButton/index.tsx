// Imports
import Link from "next/link";

// Styles
import styles from "./FilledLinkButton.module.scss";

export const FilledLinkButton: (props: {
  text: string;
  href: string;
  classNames?: string;
  disabled?: boolean
}) => JSX.Element = ({ text, href, classNames, disabled }) => (
  <Link
    className={`${styles.filledLinkButton} ${classNames ? classNames : ""} ${disabled ? styles.disabled : ""}`}
    href={href}
    aria-disabled={disabled}
  >
    <span>{text}</span>
  </Link>
);
