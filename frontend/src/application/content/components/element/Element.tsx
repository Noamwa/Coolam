import React, { FC, useEffect } from 'react';
import ElementSocialData from '../../../../domain/socialData/socialData.model';
import useHover from './useHover';
import ElementReactions from '../reactions';
import './Element.css';
import usePosition from './usePosition';

import hash from '../../../../infrastructure/elementHash';

interface WrappedElementProps {
  socialData: ElementSocialData,
  element: Element
}

const WrappedElement: FC<WrappedElementProps> = ({ element, socialData }) => {

  const { isActive, onWrapperMouseOver } = useHover(element);
  const position = usePosition(element, isActive);

  
  useEffect(() => {
    if (isActive) {
      console.log({ elementHash: hash(element), socialData });
    }
  }, [isActive])

  const style = { ...position } as any;

  return isActive ?
    <div style={style} onMouseOver={() => onWrapperMouseOver(element as HTMLElement)} className='coolamElement'>
      <ElementReactions reactionsData={socialData.reactions} />
    </div>
    : <></>

}

export default WrappedElement;
