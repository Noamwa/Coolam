import { ReactionCode } from './enums/reactionCode';

export default class ElementReaction {
    reactionCode: ReactionCode;
    count: number;
    isSelectedByUser: boolean;

    constructor (reactionCode: ReactionCode, count: number, isSelectedByUser: boolean) {
        this.reactionCode = reactionCode;
        this.count = count;
        this.isSelectedByUser = isSelectedByUser;
    }
}