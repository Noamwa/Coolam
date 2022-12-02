import { Reducer, Action, Dispatch, createStore } from 'redux';
import { ActionType } from '../enums/actionType'

const initialState: ElementState = {
    element: null,
};

const actionReducer: Reducer<ElementState, DispatchAction> = (state = initialState, action) => {
    let elementState: ElementState;
    if (action.type === ActionType.ActiveElement) {
        elementState = { ...state, element: action.payload.element };
    } else {
        elementState = state;
    }
    return elementState;
};

export interface ElementState {
    element: Element | null | undefined;
}

export interface DispatchAction extends Action {
    payload: Partial<ElementState>;
}

export class ElementDispatcher {
    
    private readonly dispatch: Dispatch<DispatchAction>;
    
    constructor (dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }
    dispatchActiveElement = (element: Element | null) => this.dispatch({ type: ActionType.ActiveElement, payload: { element } });
}

export const store = createStore<ElementState, DispatchAction, null, null>(actionReducer);
