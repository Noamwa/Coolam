import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SocialData from '../../../domain/socialData/SocialData.model';

interface WrappedElementProps {
  originalElement: Element
  socialData: SocialData | undefined,
  activeElement: Element | null
}

const WrappedElement: FC<WrappedElementProps> = props => {
  const [socialData, setSocialData] = useState<SocialData>(getInitialSocialData());

  useEffect(() => {
    if (props.socialData) {
      setSocialData(props.socialData);
    }
  }, []);

  return ReactDOM.createPortal(
    props.activeElement === props.originalElement ? <div className='coolamElement'>
      {socialData?.likes.toString()} likes
    </div> : <></>,
    props.originalElement
  );
}

function getInitialSocialData (): SocialData {
  return new SocialData({ likes: 0 });
}

export default WrappedElement;
