import React, { FC, useState } from 'react';
import ElementReaction from '../../../../domain/socialData/elementReaction.model';
import ReactionNode from './ReactionNode';
import CoolamReactionPicker from './CoolamReactionPicker';
import { Box } from '@mui/material';

interface ElementReactionsProps {
    reactionsData: Array<ElementReaction>
}

const ElementReactions: FC<ElementReactionsProps> = ({ reactionsData }) => {

    const [reactionsDataState, setReactionsDataState] = useState<Array<ElementReaction>>(reactionsData);

    function onReactionPick({ code, emoji }: { code: string, emoji: string }) {
        let existingReactionData = reactionsDataState.find(({ reactionCode }) => reactionCode === code);
        if (!existingReactionData) {
            existingReactionData = new ElementReaction(code, emoji);
            reactionsDataState.push(existingReactionData);
        }
        if (!existingReactionData.isSelectedByUser) {
            existingReactionData.isSelectedByUser = true;
            existingReactionData.count = existingReactionData.count + 1;
        } else {
            existingReactionData.isSelectedByUser = false;
            existingReactionData.count = existingReactionData.count - 1;
        }
        setReactionsDataState([...reactionsDataState]);
    }

    return (
        <Box className='coolamReactionsContainer'>
            <CoolamReactionPicker onReactionPick={onReactionPick} />
            {reactionsDataState
                .filter(reaction => reaction.count !== 0)
                .map((reaction, i) => <ReactionNode onReactionPick={onReactionPick} key={i} reaction={reaction} />)
            }
        </Box>
    );
}

export default ElementReactions;