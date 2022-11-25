export function wrapAllElements (): Array<Element> {
    const classElemets = Array.from(document.querySelectorAll("*[class]"));
    const imageElements = Array.from(document.getElementsByTagName("img"));
    const allElements = [...classElemets, ...imageElements];
    return allElements;
    // allElements.forEach(element => (element as HTMLElement).classList.add('coolamWrappedElement'));
    // const children = allElements.filter(withoutChildren);
    // const wrappers = wrapAll(children, []);
    // return wrappers;
}

function withoutChildren (element: Element): boolean {
    return element.getElementsByClassName('coolamWrappedElement').length <= 0;
}

function wrapAll (elementsToWrap: Array<Element>, alreadyWrapped: Array<Element>): Array<Element> {
    const elementsThatWereNotAlreadyWrapped = elementsToWrap.filter(elementToWrap => !alreadyWrapped.includes(elementToWrap));
    if (elementsToWrap.length === 0 || elementsThatWereNotAlreadyWrapped.length === 0) {
        return [];
    }
    const newWrapperElements = elementsThatWereNotAlreadyWrapped.map(wrapElement);
    elementsThatWereNotAlreadyWrapped.forEach(e => alreadyWrapped.push(e));
    const wrappersParents = [...new Set(elementsToWrap.map(getCoolamWrapperParent).filter(parent => !!parent && !alreadyWrapped.includes(parent)))];
    const newElementsToWrap = wrappersParents.map(wrapperParent => wrapperParent as Element);
    const wrappedParents = wrapAll(newElementsToWrap, alreadyWrapped);
    return [...newWrapperElements, ...wrappedParents];
}

function getCoolamWrapperParent (element: Element): Element | undefined {
    let parent = element.parentNode as Element;
    while (parent) {
        const parentHTMLElement = parent as HTMLElement;
        if (parentHTMLElement?.classList?.contains('coolamWrappedElement')) {
            return parent;
        }
        parent = parent.parentNode as Element;
    }
}

function wrapElement (element: Element): Element {
    const wrapper = document.createElement('div');
    wrapAround(element, wrapper);
    wrapper.classList.add('coolamWrapperElement');
    return wrapper;
}

function wrapAround (targetNode: Element, wrapperNode: Element) {
    targetNode.parentNode?.insertBefore(wrapperNode, targetNode);
    const newElement = targetNode.parentNode?.removeChild(targetNode);
    if (newElement) {
        wrapperNode.appendChild(newElement);
    }
}