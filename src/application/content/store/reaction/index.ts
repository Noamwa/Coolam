import { Reducer, Action, Dispatch, createStore, Store } from 'redux';
import { ReactionCode } from '../../../../domain/socialData/enums/reactionCode';
import { ActionType } from '../enums/actionType';

const initialState: ReactionState = {
    reactionCode: null
};

const actionReducer: Reducer<ReactionState, DispatchAction> = (state = initialState, action) => {
    let reactionState: ReactionState;
    if (action.type === ActionType.SelectedElementReaction) {
        reactionState = { reactionCode: action.payload.reactionCode ?? 0 };
    } else {
        reactionState = state;
    }
    return reactionState;
};

export interface ReactionState {
    reactionCode: ReactionCode | null
}

export interface DispatchAction extends Action {
    payload: Partial<ReactionState>;
}

export class ElementReactionDispatcher {
    
    private readonly dispatch: Dispatch<DispatchAction>;
    
    constructor (dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }
    dispatchActiveReaction = (reactionCode: ReactionCode | null) => this.dispatch({ type: ActionType.SelectedElementReaction, payload: { reactionCode } });
}

export class ReactionStoreProvider {
    private stores: Map<Element, any>;

    constructor () {
        this.stores = new Map();
    }

    getReactionStoreForElement (element: Element) {
        let store: Store = this.stores.get(element);
        if (!store) {
            store = createStore<ReactionState, DispatchAction, null, null>(actionReducer);
            this.stores.set(element, store);
        }
        return store; 
    }
}
