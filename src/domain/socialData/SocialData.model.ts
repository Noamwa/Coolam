import Reaction from './elementReaction.model';
export default class ElementSocialData {
    reactions: Array<Reaction>;
    
    constructor (reactions: Array<Reaction>) {
        this.reactions = reactions;
    }
}

export type ElementHash = string;
