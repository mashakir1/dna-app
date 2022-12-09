// Imports
import { ReactNode } from "react";

// Components
import { Header } from "./Header";

// Styles
import styles from "./LessonPlanningLayout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.page}>
    <Header />
    <div className={`${styles.container} flex column gap-l`}>{children}</div>
  </div>
);
export default Layout;
