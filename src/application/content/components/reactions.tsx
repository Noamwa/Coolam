import React, { FC } from 'react';
import ElementReaction from '../../../domain/socialData/elementReaction.model';

interface ElementReactionsProps {
    reactionsData: Array<ElementReaction>
}

const ElementReactions: FC<ElementReactionsProps> = ({ reactionsData }) => {

    return (
        <div>
            {reactionsData.at(0)?.quantity || 0} likes
        </div>
    );
}

export default ElementReactions;