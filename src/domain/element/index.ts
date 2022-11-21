export function getAllELementsToWrap (): Array<Element> {
    const classElemets = Array.from(document.querySelectorAll("*[class]"));
    const imageElements = Array.from(document.getElementsByTagName("img"));
    const allElements = [...classElemets, ...imageElements];
    return allElements;
}