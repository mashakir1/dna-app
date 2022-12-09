// Imports
import { useCallback, useMemo, useState } from "react";

// Components
import { InfoIcon } from "components/Svg";
import { ClickableIcon } from "components/Icons";
import { IconSelector } from "./IconSelector";

// Styles
import styles from "./elementCard.module.scss";

/*
* How to use the ElementCard:
*  title, text, duration & subjectColour all show up as content on the card
*  selected determines if the card has been chosen by a user
*  onClick determines what happens when a user clicks on the card.
*    it also applies hover states
*  stickyCross will keep the crossIcon shown at all times
*  crossOnClick determines what will happen when the cross is clicked
*  infoOnClick determines what will happen when the infoIcon is clicked
*/

export interface ElementCardProps {
  id: string;
  title: string;
  text: string;
  duration: number;
  subjectColour: string;
  selected?: boolean;
  onClick?: (id: string) => void;
  stickyCross?: boolean;
  crossOnClick?: (id: string) => void;
  infoOnClick?: () => void;
}

export const ElementCard: (props: ElementCardProps) => JSX.Element = ({
  id, title, text, duration, subjectColour,
  selected, onClick, stickyCross, crossOnClick, infoOnClick
}) => {
  const clickable = useMemo(() => !!onClick, [onClick]);
  const [hovering, setHovering] = useState<boolean>(false);

  const onClickHandler = useCallback(() => onClick(id), [id, onClick]);
  const crossOnClickHandler = useCallback(() => crossOnClick(id), [id, crossOnClick]);

  return <div
    className={`${styles.elementCard} ${clickable ? styles.clickable : ""} flex column`}
    {...(onClick && { onClick: onClickHandler })}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
  >
    <ElementCardHeader
      title={title}
      subjectColour={subjectColour}
      hovering={hovering}
      selected={selected}
      clickable={clickable}
      stickyCross={stickyCross}
      {...(crossOnClick && { crossOnClick: crossOnClickHandler })}
    />
    <ElementCardBody
      text={text}
      duration={duration}
      infoOnClick={infoOnClick}
    />
  </div>;
};

interface ElementCardHeaderProps {
  title: string;
  subjectColour: string;
  hovering: boolean;
  selected: boolean;
  clickable: boolean;
  stickyCross?: boolean;
  crossOnClick?: () => void;
}

const ElementCardHeader: (props: ElementCardHeaderProps) => JSX.Element = ({
  title, subjectColour, hovering,
  selected, clickable, stickyCross, crossOnClick
}) => {
  const headerColour = selected ? "#30CCD6" : subjectColour;

  return <div
    className={`${styles.elementCardHeader} flex justify-between items-center`}
    style={{ backgroundColor: headerColour }}
  >
    <p><b>{title}</b></p>
    <IconSelector
      hovering={hovering}
      selected={selected}
      clickable={clickable}
      stickyCross={stickyCross}
      crossOnClick={crossOnClick}
    />
  </div>;
};

interface ElementCardBodyProps {
  text: string;
  duration: number;
  infoOnClick: () => void;
}

const ElementCardBody: (props: ElementCardBodyProps) => JSX.Element = ({
  text, duration, infoOnClick
}) => {
  const handleInfoIconClick = (event) => {
    event.stopPropagation();
    infoOnClick();
  };

  return <div className={`${styles.elementCardBody} flex column justify-between`}>
    <p>{text}</p>
    <div className={`${styles.elementCardFooter} flex justify-between items-center`}>
      <p className={`${styles.duration} button small`}><b>{duration} mins</b></p>
      {infoOnClick && <ClickableIcon icon={<InfoIcon />} onClick={handleInfoIconClick} />}
    </div>
  </div>;
};
