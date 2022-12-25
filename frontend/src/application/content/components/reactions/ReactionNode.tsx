import React, { FC } from 'react';
import ElementReaction from '../../../../domain/socialData/elementReaction.model';
import { IconButton } from '@mui/material';
import './Reactions.css';

interface ReactionCounterNodeProps {
    reaction: ElementReaction,
    onReactionPick: ({ code, emoji }: { code: string, emoji: string }) => void;
}

const ReactionCounterNode: FC<ReactionCounterNodeProps> = ({ reaction, onReactionPick }) => {

    return (
        <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => onReactionPick({ code: reaction.reactionCode, emoji: reaction.emoji })} className='coolamReaction' style={reaction.isSelectedByUser ? { backgroundColor: 'grey' } : {}}>
            <div>
                {reaction.count}
            </div>
            <div>
                {reaction.emoji}
            </div>
        </IconButton>
    );
}

export default ReactionCounterNode;