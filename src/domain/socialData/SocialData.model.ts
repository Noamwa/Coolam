import ElementReaction from './elementReaction.model';
import { ReactionCode } from './enums/reactionCode';

export default class ElementSocialData {
    reactions: Map<ReactionCode, ElementReaction>;
    
    constructor (reactions: Map<ReactionCode, ElementReaction>) {
        this.reactions = reactions;
    }
}

export type ElementHash = string;
