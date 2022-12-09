// Components
import { CloseElementIcon, EmptyTick } from "components/Svg";
import { ClickableIcon } from "components/Icons";
import { useMemo } from "react";

interface IconSelectorProps {
  hovering: boolean;
  selected: boolean;
  clickable: boolean;
  stickyCross: boolean;
  crossOnClick?: () => void;
}

export const IconSelector: (props: IconSelectorProps) => JSX.Element = ({
  hovering, selected, clickable,
  stickyCross, crossOnClick
}) => {
  const defaultColour = "#ffffff33";
  const selectedColour = "#177584";

  const shouldShowCross = useMemo(
    () => stickyCross || (hovering && selected),
    [stickyCross, hovering, selected]
  );
  const shouldShowTick = useMemo(
    () => clickable && (hovering || selected),
    [clickable, hovering, selected]
  );

  if (shouldShowCross) {
    const closeIcon = <CloseElementIcon colour="white" fill={selected ? selectedColour : defaultColour} />;
    return crossOnClick
      ? <ClickableIcon icon={closeIcon} onClick={(event) => {
        event.stopPropagation();
        crossOnClick();
      }} />
      : closeIcon;
  }

  if (shouldShowTick) {
    return <EmptyTick colour="white" fill={selected ? selectedColour : defaultColour} />;
  }

  return <svg />;
};
