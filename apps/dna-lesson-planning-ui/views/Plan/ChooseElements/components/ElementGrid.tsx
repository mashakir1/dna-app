// Components
import { ElementCard } from "components/Cards/ElementCard";

// Types
import { Element } from "types";

interface ElementGridProps {
  elements: Array<Element>;
  selectedIds: Array<string>;
  addSelectedId: (id: string) => void;
  removeSelectedId: (id: string) => void;
}

const ElementGrid: (props: ElementGridProps) => JSX.Element = (
  { elements, selectedIds, addSelectedId, removeSelectedId }
) => {
  const elementOnClick = (selectedElementId: string) => {
    if (selectedIds.includes(selectedElementId)) {
      removeSelectedId(selectedElementId);
    } else {
      addSelectedId(selectedElementId);
    }
  };

  return <div className={"flex gap-m wrap"}>
    {elements?.map((element: Element) => (
      <ElementCard
        key={element.id}
        id={element.id}
        title={element.subject}
        text={element.title}
        subjectColour={element.subjectColour}
        duration={element.duration}
        onClick={elementOnClick}
        selected={selectedIds.includes(element.id)}
      />
    ))}
  </div>;
};

export default ElementGrid;
