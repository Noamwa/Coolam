import React, { FC } from 'react';
import {render} from 'react-dom';

interface IProps {
  
}

export const Popup: FC<IProps> = () => {
  return (
    <div>
      asd
    </div>
  );
}

render(<Popup />, document.getElementById("coolamPopup"));