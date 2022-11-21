import React, { FC } from 'react';
import Reaction from '../../../domain/socialData/reaction.model';

interface ReactionsProps {
    reactionsData: Array<Reaction>
}

const Reactions: FC<ReactionsProps> = ({ reactionsData }) => {

    return (
        <div>
            {reactionsData.at(0)?.quantity || 0} likes
        </div>
    );
}

export default Reactions;