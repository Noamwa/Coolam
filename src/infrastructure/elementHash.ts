const objectHash = require('object-hash');
import { ElementHash } from "../domain/socialData/SocialData.model";

function hash (element: Element): ElementHash {
    return objectHash(element.innerHTML);
}

export default hash;
