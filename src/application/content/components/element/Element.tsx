import React, { FC } from 'react';
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

  const activeWrap = (
    <div className='coolamElement'>
      <ElementReactions reactionsData={socialData?.reactions || []}/>
    </div>
  );

  const nonActiveWrap = <></>;

  return ReactDOM.createPortal(isActive ? activeWrap : nonActiveWrap, element);
}

export default WrappedElement;
