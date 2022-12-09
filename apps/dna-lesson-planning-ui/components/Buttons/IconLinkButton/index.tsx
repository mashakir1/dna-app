// Imports
import Link from "next/link";

interface IconLinkButtonProps {
  icon: JSX.Element;
  text: string;
  classNames?: string;
  href: string;
}

export const IconLinkButton: (props: IconLinkButtonProps) => JSX.Element = ({
  icon,
  text,
  classNames,
  href,
}) => (
  <Link href={href} className={classNames} aria-label={text}>
    <>
      {icon}
      <span>{text}</span>
    </>
  </Link>
);
