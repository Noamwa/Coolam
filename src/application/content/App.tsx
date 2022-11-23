import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import WrappedElement from './components/element/Element';
import SocialData, { ElementHash } from '../../domain/socialData/socialData.model';
import hash from '../../infrastructure/elementHash';
import { socialDataRepository } from '../../infrastructure/repositories/index';
import { store } from "./store/element";
import { getAllELementsToWrap } from '../../domain/element';
import { getWebsite } from '../../domain/browser';

function App () {

  const [elements, setElements] = useState<Array<Element>>([]);
  const [socialDataMapping, setSocialDataMapping] = useState<Map<ElementHash, SocialData>>(new Map());

  useEffect(() => {
    const wrappedElements = getAllELementsToWrap();
    const website = getWebsite();
    socialDataRepository.getSocialData(website).then(data => {
      setSocialDataMapping(data);
      setElements(wrappedElements);
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        {elements.map((element, i) => <WrappedElement element={element} key={i} socialData={socialDataMapping.get(hash(element))} />)}
      </div>
    </Provider>
  );
}

export default App;
