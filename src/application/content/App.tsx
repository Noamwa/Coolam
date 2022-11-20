import React, { useEffect, useState } from 'react';
import WrappedElement from './components/Element';
import SocialData, { ElementHash } from '../../domain/socialData/SocialData.model';
import hash from '../../infrastructure/elementHash';
import { socialDataRepository } from '../../infrastructure/repositories/index';

function App () {
  const [elements, setElements] = useState<Array<Element>>([]);
  const [activeElement, setActiveElement] = useState<Element | null>(null);
  const [socialDataMapping, setSocialDataMapping] = useState<Map<ElementHash, SocialData>>(new Map());


  useEffect(() => {
    const classElemets = Array.from(document.querySelectorAll("*[class]"));
    const imageElements = Array.from(document.getElementsByTagName("img"));
    const allElements = [...classElemets, ...imageElements];

    socialDataRepository.getSocialData('www.asd.com').then(data => {
      setSocialDataMapping(data);
      setElements(allElements);
      setHoverEvent(allElements);
    });
    return () => removeHoverEvent(allElements);
  }, []);

  function mouseenterHandler (event: Event) {
    const element = event.target as Element;
    setActiveElement(element);
  }

  function mouseleaveHandler () {
    setActiveElement(null);
  }

  
  function setHoverEvent (elements: Array<Element>) {
    elements.forEach(element => {
      element.addEventListener('mouseenter', mouseenterHandler);
      element.addEventListener('mouseleave', mouseleaveHandler);
    });
  }

  function removeHoverEvent (elements: Array<Element>) {
    elements.forEach(element => {
      element.removeEventListener('mouseenter', mouseenterHandler);
      element.removeEventListener('mouseleave', mouseleaveHandler);
    });
  }

  return (
    <div className="App">
      {elements.map((element, i) => <WrappedElement key={i} originalElement={element as Element} socialData={socialDataMapping.get(hash(element))} activeElement={activeElement} />)}
    </div>
  );
}

// function unHighlightElements (elements: Array<Element>) {
//   elements.forEach(element => {
//     const htmlElement = element as Element as HTMLElement;
//     htmlElement.style.transform = 'scale(1)'
//     htmlElement.style.transition = 'transform .1s';
//   });
// }

// function highlightElement (element: Element) {
//   const htmlElement = element as Element as HTMLElement;
//   htmlElement.style.transform = 'scale(1.1)'
//   htmlElement.style.transition = 'transform .2s';
// }



export default App;
