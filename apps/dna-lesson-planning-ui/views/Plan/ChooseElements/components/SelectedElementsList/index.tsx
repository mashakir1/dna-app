// Imports
import { Dispatch, SetStateAction } from "react";

// Components
import Dropbox from "../Dropbox";

// Types
import { Element } from "types";

// Styles
import styles from "./selectedElementsList.module.scss";

export interface SelectedElementsListProps {
  selectedIds: Array<string>;
  setSelectedIds: Dispatch<SetStateAction<Array<string>>>;
  selectedElements: Array<Element>;
  elementCrossOnClick: (id: string) => void;
}

const SelectedElementsList: (props: SelectedElementsListProps) => JSX.Element = ({
  selectedIds, setSelectedIds, selectedElements, elementCrossOnClick
}) => {
  return <div className={`${styles.selectedElementsList} flex gap-s`}>
    {selectedElements?.map((element, index) => <Dropbox
      key={element.id}
      id={index}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      element={element}
      elementCrossOnClick={elementCrossOnClick}
    />)}
  </div>;
};

export default SelectedElementsList;
