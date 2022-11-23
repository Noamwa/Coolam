import ElementReaction from '../../../../domain/socialData/elementReaction.model';
import { ReactionCode } from '../../../../domain/socialData/enums/reactionCode'

export default class ReactionNodeData extends ElementReaction {
    content: string;
    constructor (reactionCode: ReactionCode, elementReaction: ElementReaction, content: string) {
        super(reactionCode, elementReaction.count, elementReaction.isSelectedByUser);
        this.content = content;
    }
}