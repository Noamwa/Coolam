const wrappedElementClassName = 'coolamWrappedElement';

function getDocuemntElements () {
    return [
        document.querySelectorAll("*[class]"),
        document.getElementsByTagName("img"),
        document.getElementsByTagName("p"),
        document.getElementsByTagName("h")
    ]
}

export function wrapAllElements (): Array<Element> {
    const allElements = getElementsToWrap();
    allElements.forEach(element => (element as HTMLElement).classList.add(wrappedElementClassName));
    return allElements;
}

function getElementsToWrap () {
    return getDocuemntElements().flatMap(elements => Array.from(elements));
}