// Imports
import { ReactNode } from "react";

// Styling
import styles from "./modalContainer.module.scss"

interface ModalContainerProps {
  children: ReactNode;
  visible: boolean;
}

const ModalContainer: (props: ModalContainerProps) => JSX.Element = ({ children, visible }) => (
  <div className={`${styles.modalContainer} ${visible ? styles.visible : ""}`}>
    {children}
  </div>
);

export default ModalContainer;
