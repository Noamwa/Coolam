import React, { FC, useEffect, useState } from 'react';
import ElementReaction from '../../../../domain/socialData/elementReaction.model';
import { ReactionCode } from '../../../../domain/socialData/enums/reactionCode';
import ReactionNodeData from './ReactionNodeData';
import ReactionCounterNode from './ReactionCounterNode';
import { Provider } from 'react-redux';
import { ReactionStoreProvider } from '../../store/reaction';
const reactionStoreProvider = new ReactionStoreProvider();

interface ElementReactionsProps {
    reactionsData: Map<ReactionCode, ElementReaction>,
    element: Element
}

const supportedReactions: Map<ReactionCode, string> = new Map([
    [ReactionCode.Like, '👍'],
    [ReactionCode.Dislike, '👎'],
    [ReactionCode.ClickBate, 'ClickBate!']
]);

const ElementReactions: FC<ElementReactionsProps> = ({ reactionsData, element }) => {

    const [reactionsNodesData, setReactionsNodesData] = useState<Array<ReactionNodeData>>([]);

    useEffect(() => {
        setReactionsNodesData(Array.from(supportedReactions.entries()).map(([reactionCode, content]) => new ReactionNodeData({ reactionCode, elementReaction: reactionsData.get(reactionCode), content })));
    }, []);

    return (
        <Provider store={reactionStoreProvider.getReactionStoreForElement(element)}>
            <div className='coolamReactionsContainer'>
                {reactionsNodesData.map((reactionNodeData, i) => <ReactionCounterNode key={i} reactionNodeData={reactionNodeData} />)}
            </div>
        </Provider>
    );
}

export default ElementReactions;