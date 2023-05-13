import {useEffect, useRef, useCallback} from 'react';
import KeyboardShortcut from '../libs/KeyboardShortcut';

export default function useKeyboardShortcut(shortcut, callback, config = {}) {
    const {captureOnInputs = true, shouldBubble = false, priority = 0, shouldPreventDefault = true, excludedNodes = [], isActive = true} = config;

    const subscription = useRef(null);
    const subscribe = useCallback(
        () =>
            KeyboardShortcut.subscribe(
                shortcut.shortcutKey,
                callback,
                shortcut.descriptionKey,
                shortcut.modifiers,
                captureOnInputs,
                shouldBubble,
                priority,
                shouldPreventDefault,
                excludedNodes,
            ),
        [callback, captureOnInputs, excludedNodes, priority, shortcut.descriptionKey, shortcut.modifiers, shortcut.shortcutKey, shouldBubble, shouldPreventDefault],
    );

    useEffect(() => {
        const unsubscribe = subscription.current || (() => {});
        unsubscribe();
        subscription.current = isActive ? subscribe() : null;
        return unsubscribe;
    }, [isActive, subscribe]);
}
