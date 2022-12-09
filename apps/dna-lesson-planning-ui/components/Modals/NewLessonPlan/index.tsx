// Imports
import { Dispatch, SetStateAction, useState } from "react";

// Components
import { Modal } from "..";
import { NewLessonPlanFirstPage } from "./firstPage";
import { NewLessonPlanSecondPage } from "./secondPage";

interface NewLessonPlanProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const NewLessonPlan: (props: NewLessonPlanProps) => JSX.Element = ({
  visible,
  setVisible
}) => {
  const [pageNumber, setPageNumber] = useState<number>(0);

  return <Modal
    visible={visible}
    closeButton
    setVisible={setVisible}
    paginationProps={{ pageNumber, setPageNumber }}
  >
    {pageNumber === 0
      ? <NewLessonPlanFirstPage setPageNumber={setPageNumber} />
      : <NewLessonPlanSecondPage />}
  </Modal>;
};

export default NewLessonPlan;
