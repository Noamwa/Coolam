import { ReactionCode } from './enums/reactionCode';

export default class ElementReaction {
    reactionCode: ReactionCode;
    quantity: number;

    constructor (reactionCode: ReactionCode, quantity: number) {
        this.reactionCode = reactionCode;
        this.quantity = quantity;
    }
}