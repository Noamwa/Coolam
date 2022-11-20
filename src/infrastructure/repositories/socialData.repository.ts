import SocialDataModel from '../../domain/socialData/SocialData.model';
import { ElementHash } from '../../domain/socialData/SocialData.model';


async function getSocialData (url: string): Promise<Map<ElementHash, SocialDataModel>> {
    return new Map([
        ['a97ddfc0597d610ae3f0672aac47b9291011b8a7', new SocialDataModel({ likes: 12 })],
        ['c8847f5b172c57acef8c2745d33107418a74c5c6', new SocialDataModel({ likes: 10 })]
    ]);
}

export default {
    getSocialData
};