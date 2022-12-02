import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WrappedElement from './components/element/Element';
import SocialData, { ElementHash } from '../../domain/socialData/socialData.model';
import hash from '../../infrastructure/elementHash';
import { socialDataRepository } from '../../infrastructure/repositories/index';
import { store } from "./store/element";
import { getWebsite } from '../../domain/browser';

interface AppProps {
  wrappedElements: Array<Element>
}

const App: FC<AppProps> = ({ wrappedElements }) => {
  const [socialDataMapping, setSocialDataMapping] = useState<Map<ElementHash, SocialData>>(new Map());

  useEffect(() => {
    const website = getWebsite();
    socialDataRepository.getSocialData(website).then(data => {
      setSocialDataMapping(data);
    });
  }, []);

  return (
    <Provider store={store}>
      <div >
        {wrappedElements.map((element, i) =>
          <div className="coolamElement" key={i} >
            <WrappedElement element={element} socialData={socialDataMapping.get(hash(element))} />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
