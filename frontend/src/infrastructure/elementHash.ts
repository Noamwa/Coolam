import { ElementHash } from "../domain/socialData/socialData.model";
import md5 from 'js-md5';

let set = new Set();

function hash (element: Element): ElementHash {
    const md5Hash = md5.create();
    const htmlElement = (element as HTMLElement)
    const data = {
        attributes: htmlElement.attributes,
        outerHTML: htmlElement.outerHTML,
        accessKey: htmlElement.accessKey,
        childElementCount: htmlElement.childElementCount,
        classList: htmlElement.classList,
        id: htmlElement.id,
        innerText: htmlElement.innerText,
        nodeName: htmlElement.nodeName,
        nodeType: htmlElement.nodeType,
        nodeValue: htmlElement.nodeValue,
        nonce: htmlElement.nonce,
        style: htmlElement.style,
        textContent: htmlElement.textContent,
        title: htmlElement.title,
        parentInnerHtml: htmlElement.parentElement?.innerHTML
    }
    return md5Hash.update(JSON.stringify(data)).hex();
}

export default hash;
