import SocialDataModel from '../../domain/socialData/socialData.model';
import { ElementHash } from '../../domain/socialData/socialData.model';
import { ReactionCode } from '../../domain/socialData/enums/reactionCode'


async function getSocialData (url: string): Promise<Map<ElementHash, SocialDataModel>> {
    return new Map([
        ['a97ddfc0597d610ae3f0672aac47b9291011b8a7', new SocialDataModel(new Map([
            [ReactionCode.Like, { reactionCode: ReactionCode.Like, count: 12, isSelectedByUser: false }],
            [ReactionCode.Dislike, { reactionCode: ReactionCode.Dislike, count: 4, isSelectedByUser: false }]
        ]))]
    ]);
}

export default {
    getSocialData
};