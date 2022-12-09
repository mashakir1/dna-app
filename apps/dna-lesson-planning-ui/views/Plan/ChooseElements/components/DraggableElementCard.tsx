import { useDrag } from "react-dnd";
import { DraggableElementCardItem, DraggableItems } from "utils/dragAndDrop";
import { ElementCard, ElementCardProps } from "components/Cards/ElementCard";

interface DraggableElementCardProps {
  dropBoxId: number;
  element: ElementCardProps;
}

const DraggableElementCard: (props: DraggableElementCardProps) => JSX.Element = ({
  dropBoxId, element
}) => {
  // TODO - drag icon looks weird sometimes
  const [, drag] = useDrag<DraggableElementCardItem>(() => ({
    type: DraggableItems.ElementCard,
    item: { elementId: element.id, dropBoxId: dropBoxId }
  }));

  return <div ref={drag}>
    <ElementCard {...element} />
  </div>;
};

export default DraggableElementCard;
