import React, { FC } from 'react';
import ElementSocialData from '../../../../domain/socialData/socialData.model';
import useHover from './useHover';
import ElementReactions from '../reactions';
import './Element.css';
import usePosition from './usePosition';

interface WrappedElementProps {
  socialData: ElementSocialData | undefined,
  element: Element
}

const WrappedElement: FC<WrappedElementProps> = ({ element, socialData }) => {

  const { isActive, onWrapperMouseOver } = useHover(element);
  const positionStyle = usePosition(element, isActive);

  const activeWrap = 
  <div onMouseOver={() => onWrapperMouseOver(element as HTMLElement)} className='coolamElement' style={positionStyle}>
    <ElementReactions element={element} reactionsData={socialData?.reactions || new Map()}/>
  </div>

  return isActive ? activeWrap : <></>;
}

export default WrappedElement;
