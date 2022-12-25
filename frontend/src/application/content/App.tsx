import React, { FC, useEffect, useState } from 'react';
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
    console.log({ wrappedElementsLen: wrappedElements.length, hashesLen: new Set([... wrappedElements.map(element => hash(element))]).size })
  }, []);

  return (
    <Provider store={store}>
      <div >
        {wrappedElements.map((element, i) => {
          const elementHash = hash(element);
          let elementSocialData = socialDataMapping.get(elementHash)
          if (!elementSocialData) {
            elementSocialData = new SocialData([]);
            socialDataMapping.set(elementHash, elementSocialData);
          }
          return <div className="coolamElement" key={i} >
            <WrappedElement element={element} socialData={elementSocialData}/>
          </div>
        }
        )}
      </div>
    </Provider>
  );
}

export default App;
