// Imports
import { Dispatch, SetStateAction } from "react";
import { useDrop } from "react-dnd";

// Components
import DraggableElementCard from "../DraggableElementCard";

// Types
import { Element } from "types";
import { DraggableElementCardItem, DraggableItems } from "utils/dragAndDrop";

interface DropboxProps {
  id: number;
  selectedIds?: Array<string>;
  setSelectedIds?: Dispatch<SetStateAction<Array<string>>>;
  element: Element;
  elementCrossOnClick: (id: string) => void;
}

const Dropbox: (props: DropboxProps) => JSX.Element = ({
  id, selectedIds, setSelectedIds, element, elementCrossOnClick
}) => {
  const [, drop] = useDrop<DraggableElementCardItem>(() => ({
    accept: DraggableItems.ElementCard,
    drop: (item) => {
      const selectedIdsWithoutDragged = selectedIds.filter(id => id !== item.elementId);
      selectedIdsWithoutDragged.splice(id, 0, item.elementId);
      setSelectedIds(selectedIdsWithoutDragged);
    }
  }), [selectedIds]);

  return <div ref={drop} className="dropBox" key={element.id}>
    <DraggableElementCard
      dropBoxId={id}
      element={{
        id: element.id,
        title: element.subject,
        text: element.title,
        subjectColour: element.subjectColour,
        duration: element.duration,
        stickyCross: true,
        crossOnClick: elementCrossOnClick
      }}
      // id={element.id}
      // title={element.subject}
      // text={element.title}
      // subjectColour={element.subjectColour}
      // duration={element.duration}
      // stickyCross
      // crossOnClick={elementCrossOnClick}
    />
  </div>;
};

export default Dropbox;
