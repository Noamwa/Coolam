type ElementHash = string;

class SocialData {
    likes: number;

    constructor ({ likes }: { likes: number }) {
        this.likes = likes;
    }
}

export {
    ElementHash
}

export default SocialData;