import { useEffect, useState } from 'react';
import './Element.css';

type PositionStyle = { left: number, top: number, direction: string };

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
  const { direction } = getComputedStyle(element);
  const offset = rect.width * 0.9;
  return { top: rect.top + rect.height + scrollTop, left: rect.left + offset + scrollLeft, direction };
}

export default usePosition;
