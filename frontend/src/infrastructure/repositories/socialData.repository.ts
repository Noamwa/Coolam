import SocialDataModel from '../../domain/socialData/socialData.model';
import { ElementHash } from '../../domain/socialData/socialData.model';

async function getSocialData (url: string): Promise<Map<ElementHash, SocialDataModel>> {
    return new Map();
}

export default {
    getSocialData
};