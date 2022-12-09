// Imports
import { Dispatch, ReactNode, SetStateAction } from "react";

// Components
import { CloseModalIcon } from "components/Svg/CloseModalIcon";
import { BackArrow } from "components/Svg/BackArrow";
import ModalContainer from "./ModalContainer";

// Styling
import styles from "./modal.module.scss";

interface PaginationProps {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export interface ModalProps {
  visible: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  closeButton?: boolean;
  paginationProps?: PaginationProps
}

export const Modal: (props: ModalProps) => JSX.Element = ({
  visible,
  setVisible,
  children,
  closeButton,
  paginationProps
}) => {
  const handleModalClose = () => {
    setVisible(false)
    if (paginationProps) {
      paginationProps.setPageNumber(0)
    }
  }

  // TODO - append Modal to ReactDOM.portal
  // TODO - hide Modal on background click
  return (
    <ModalContainer visible={visible}>
      <div className={`${styles.modal} ${visible ? styles.visible : ""}`}>
        <div className={styles.modalContent}>
          {children}
        </div>
        {paginationProps && paginationProps.pageNumber > 0 && <button
          className={`${styles.modalButton} ${styles.backButton}`}
          onClick={() => paginationProps.setPageNumber(0)}
          type="button"
        >
          <BackArrow />
        </button>}
        {closeButton && <button
          className={`${styles.modalButton} ${styles.closeButton}`}
          onClick={handleModalClose}
          type="button"
        >
          <CloseModalIcon />
        </button>}
      </div>
    </ModalContainer>
  );
};
