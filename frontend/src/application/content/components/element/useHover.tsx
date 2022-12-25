import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ElementState, ElementDispatcher } from '../../store/element';

function useHover (element: Element) {
    
    const [isActive, setActive] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { element: activeElement } = useSelector<ElementState, ElementState>((state: ElementState) => ({ element: state.element }));

    useEffect(() => {
        const mouseEnterEventListener = () => onElementHover(element as HTMLElement);
        const mouseLeaveEventListener = onElementUnHover;
        element.addEventListener('mouseenter', mouseEnterEventListener);
        element.addEventListener('mouseleave', mouseLeaveEventListener);
        return () => {
            element.removeEventListener('mouseenter', mouseEnterEventListener);
            element.removeEventListener('mouseleave', mouseLeaveEventListener);
        };
    }, []);

    useEffect(() => { 
        const isCurrentElementActive = element === activeElement;
        setActive(isCurrentElementActive);
        if (isCurrentElementActive) {
            onElementActive(element as HTMLElement);
        } else {
            onElementInactive(element as HTMLElement);
        }
    }, [activeElement]);

    function onElementActive (element: HTMLElement) {
        element.style.transform = 'scale(1.05)'
        element.style.transition = 'transform .1s';
    }

    function onElementInactive (element: HTMLElement) {
        element.style.transform = 'scale(1)'
        element.style.transition = 'transform .2s';
    }

    function onElementHover (element: HTMLElement) {
        const elementDispatcher = new ElementDispatcher(dispatch);
        elementDispatcher.dispatchActiveElement(element);
    }

    function onElementUnHover () {
        const elementDispatcher = new ElementDispatcher(dispatch);
        elementDispatcher.dispatchActiveElement(null);
    }

    function onWrapperMouseOver (element: HTMLElement) {
        onElementHover(element);
    }

    return { isActive, onWrapperMouseOver };
}

export default useHover;