// Styling
import styles from "./spacing.module.scss";

interface SpacingProps {
  height: "xs" | "s" | "m" | "l" | "xl" | "xxl";
}

const propToCssClassMap = {
  xs: styles.spacingXS,
  s: styles.spacingS,
  m: styles.spacingM,
  l: styles.spacingL,
  xl: styles.spacingXL,
  xxl: styles.spacingXXL
}

const Spacing: (props: SpacingProps) => JSX.Element = ({ height }) => {
  return <div className={propToCssClassMap[height]} />;
};

export default Spacing;
