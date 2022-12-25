import ElementReaction from './elementReaction.model';

export default class ElementSocialData {
    reactions: Array<ElementReaction>;
    
    constructor (reactions: Array<ElementReaction>) {
        this.reactions = reactions;
    }
}

export type ElementHash = string;
