// Styles
import styles from "./iconWithBackground.module.scss";

interface IconWithBackgroundProps {
  classNames?: string;
  icon: JSX.Element;
}

export const IconWithBackground: (props: IconWithBackgroundProps) => JSX.Element = ({ classNames, icon }) => {
  return <div className={`${styles.iconWithBackground} ${classNames ? classNames : ""} flex`}>
    {icon}
  </div>;
};
