import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ElementReactionDispatcher, ReactionState } from '../../store/reaction';
import ReactionNodeData from './ReactionNodeData';
import './Reactions.css';

interface ReactionCounterNodeProps {
    reactionNodeData: ReactionNodeData
}

const ReactionCounterNode: FC<ReactionCounterNodeProps> = ({ reactionNodeData }) => {
    
    const dispatch = useDispatch();
    const { reactionCode: activeReactionCode } = useSelector<ReactionState, ReactionState>((state: ReactionState) => ({ reactionCode: state.reactionCode }));
    const [isSelected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        setSelected(reactionNodeData.reactionCode === activeReactionCode || reactionNodeData.isSelectedByUser);
    }, [])
    

    useEffect(() => {
        const isSelectedNow = activeReactionCode === reactionNodeData.reactionCode;
        if (!isSelected) {
            if (isSelectedNow) {
                reactionNodeData.count++;
            }
        } else {
            if (!isSelectedNow) {
                reactionNodeData.count--;
            }
        }
        setSelected(isSelectedNow);
    }, [activeReactionCode]);

    function onClick () {
        const reactionDispatcher = new ElementReactionDispatcher(dispatch);
        reactionDispatcher.dispatchActiveReaction(isSelected ? null :reactionNodeData.reactionCode);
    }

    return (
        <div onClick={onClick} className='coolamReaction' style={isSelected ? { backgroundColor: 'grey' } : {}}>
            <div>
                {reactionNodeData.content}
            </div>
            <div>
                {reactionNodeData.count} 
            </div>
        </div>
    );
}

export default ReactionCounterNode;