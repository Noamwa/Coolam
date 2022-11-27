import { useEffect, useState } from 'react';
import './Element.css';

type PositionStyle = { left: number, top: number };

const usePosition = (element: Element, isActive: boolean) => {
  const [positionStyle, setPositionStyle] = useState<PositionStyle>();
  useEffect(() => {
    const position = getSelfPosition(element as HTMLElement);
    setPositionStyle(position);
  }, [isActive]);
  return positionStyle;
}

function getSelfPosition (element: HTMLElement): PositionStyle {
  const rect = element.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export default usePosition;
