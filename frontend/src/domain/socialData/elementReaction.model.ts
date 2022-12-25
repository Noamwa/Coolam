
export default class ElementReaction {
    count: number;
    isSelectedByUser: boolean;
    reactionCode: string;
    emoji: string;

    constructor (reactionCode: string, emoji: string, count: number = 0, isSelectedByUser: boolean = false) {
        this.reactionCode = reactionCode;
        this.count = count;
        this.isSelectedByUser = isSelectedByUser;
        this.emoji = emoji;
    }
}