import React, { FC, useEffect } from 'react';
import ElementSocialData from '../../../../domain/socialData/socialData.model'; // TODO :: common models package
import useHover from './useHover';
import ElementReactions from '../reactions';
interface WrappedElementProps {
  socialData: ElementSocialData | undefined,
  element: Element
}

const WrappedElement: FC<WrappedElementProps> = ({ element, socialData }) => {
  const isActive = useHover(element);

  useEffect(() => {
    element.addEventListener('click', e => e.stopPropagation());
  }, []);

  const activeWrap = <ElementReactions element={element} reactionsData={socialData?.reactions || new Map()}/>;

  return isActive ? activeWrap : <></>;
}

export default WrappedElement;
