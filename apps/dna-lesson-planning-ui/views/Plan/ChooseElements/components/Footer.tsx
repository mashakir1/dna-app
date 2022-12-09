// Imports
import { Dispatch, SetStateAction } from "react";

// Components
import DurationCounter from "./DurationCounter";
import FooterButtonList from "./FooterButtonList";
import SelectedElementsList from "./SelectedElementsList";

// Types
import { Element } from "types";

// Styles
import styles from "./footer.module.scss";

interface FooterProps {
  selectedIds: Array<string>;
  setSelectedIds: Dispatch<SetStateAction<Array<string>>>;
  elements: Array<Element>;
}

export const Footer: (props: FooterProps) => JSX.Element = ({
  selectedIds, setSelectedIds, elements
}) => {
  const selectedElements = selectedIds.map(
    id => elements.find(element => element.id === id)
  );

  const totalDuration = selectedElements
    ?.map(element => element.duration)
    ?.reduce((a, b) => a + b, 0);

  const elementCrossOnClick = (selectedElementId: string) => {
    setSelectedIds(selectedIds.filter(id => id !== selectedElementId));
  };

  return <div className={`${styles.footer} flex gap-m items-center`}>
    <DurationCounter minutes={totalDuration} />
    <SelectedElementsList
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
      selectedElements={selectedElements}
      elementCrossOnClick={elementCrossOnClick}
    />
    <FooterButtonList isClickable={selectedElements?.length > 0} />
  </div>;
};

