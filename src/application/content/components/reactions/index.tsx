import React, { FC, useEffect, useState } from 'react';
import ElementReaction from '../../../../domain/socialData/elementReaction.model';
import { ReactionCode } from '../../../../domain/socialData/enums/reactionCode';
import ReactionNodeData from './ReactionNodeData';
import ReactionCounterNode from './ReactionCounterNode';
import { Provider } from 'react-redux';
import { ReactionStoreProvider } from '../../store/reaction';
const reactionStoreProvider = new ReactionStoreProvider();
import './Reactions.css';

interface ElementReactionsProps {
    reactionsData: Map<ReactionCode, ElementReaction>,
    element: Element
}

const supportedReactions: Map<ReactionCode, string> = new Map([
    [ReactionCode.Like, '👍'],
    [ReactionCode.Dislike, '👎']
]);

const ElementReactions: FC<ElementReactionsProps> = ({ reactionsData, element }) => {

    const [reactionsNodesData, setReactionsNodesData] = useState<Array<ReactionNodeData>>([]);

    useEffect(() => {
        const _reactionsNodesData = Array.from(supportedReactions.entries()).map(([reactionCode, content]) => new ReactionNodeData(reactionCode, reactionsData.get(reactionCode) || getDefaultReaction(reactionCode), content));
        setReactionsNodesData(_reactionsNodesData);
    }, []);

    return (
        <Provider store={reactionStoreProvider.getReactionStoreForElement(element)}>
            <div className='coolamReactionsContainer'>
                {reactionsNodesData.map((reactionNodeData, i) => <ReactionCounterNode key={i} reactionNodeData={reactionNodeData} />)}
            </div>
        </Provider>
    );
}

function getDefaultReaction (reactionCode: ReactionCode): ElementReaction {
    return new ElementReaction(reactionCode, 0, false);
}

export default ElementReactions;