const wrappedElementClassName = 'coolamWrappedElement';
const wrapperElementClassName = 'coolamWrapperElement';

function getDocuemntElements () {
    return [
        document.querySelectorAll("*[class]"),
        document.getElementsByTagName("img")
    ]
}

export function wrapAllElements (): Array<Element> {
    const allElements = getElementsToWrap();
    allElements.forEach(element => (element as HTMLElement).classList.add(wrappedElementClassName));
    // const wrappers = wrapRecursive(allElements.filter(withoutChildren), []);
    return allElements;
    //return wrappers;
}

function wrapRecursive (elementsToWrap: Array<Element>, alreadyWrapped: Array<Element>): Array<Element> {
    let wrappedElements: Array<Element> = [];
    const elementsThatWereNotAlreadyWrapped = elementsToWrap.filter(elementToWrap => !alreadyWrapped.includes(elementToWrap));
    if (elementsThatWereNotAlreadyWrapped.length !== 0) {
        const newWrapperElements = elementsThatWereNotAlreadyWrapped.map(wrapElement);
        elementsThatWereNotAlreadyWrapped.forEach(e => alreadyWrapped.push(e));
        const wrappersParents = [...new Set(elementsToWrap.map(getCoolamWrapperParent).filter(parent => !!parent && !alreadyWrapped.includes(parent)))];
        const wrappedParents = wrapRecursive(wrappersParents.map(wrapperParent => wrapperParent as Element), alreadyWrapped);
        wrappedElements = [...newWrapperElements, ...wrappedParents];
    }
    return wrappedElements;
}

function getCoolamWrapperParent (element: Element): Element | undefined {
    let parent = element.parentNode as Element;
    while (parent) {
        const parentHTMLElement = parent as HTMLElement;
        if (parentHTMLElement?.classList?.contains(wrappedElementClassName)) {
            return parent;
        }
        parent = parent.parentNode as Element;
    }
}

function wrapElement (element: Element): Element {
    const wrapper = document.createElement('div');
    wrapAround(element, wrapper);
    wrapper.classList.add(wrapperElementClassName);
    return wrapper;
}

function wrapAround (targetNode: Element, wrapperNode: Element) {
    targetNode.parentNode?.insertBefore(wrapperNode, targetNode);
    const newElement = targetNode.parentNode?.removeChild(targetNode);
    if (newElement) {
        wrapperNode.appendChild(newElement);
    }
}

function withoutChildren (element: Element): boolean {
    return element.getElementsByClassName(wrappedElementClassName).length <= 0;
}

function getElementsToWrap () {
    return getDocuemntElements().flatMap(elements => Array.from(elements));
}