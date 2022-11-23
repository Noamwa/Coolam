import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ElementSocialData from '../../../../domain/socialData/socialData.model'; // TODO :: common models package
import useHover from './useHover';
import ElementReactions from '../reactions';

interface WrappedElementProps {
  socialData: ElementSocialData | undefined,
  element: Element
}

const WrappedElement: FC<WrappedElementProps> = ({ element, socialData }) => {

  const isActive  = useHover(element);

  useEffect(() => {
    element.addEventListener('click', e => e.cancelBubble = true);
  }, [])
  

  const activeWrap = (
    <div className='coolamElement'>
        <ElementReactions element={element} reactionsData={socialData?.reactions || new Map()}/>
    </div>
  );

  const nonActiveWrap = <></>;

  return ReactDOM.createPortal(isActive ? activeWrap : nonActiveWrap, element);
}

export default WrappedElement;
