import React from 'react';
import BaseCreateMenu from './BaseCreateMenu';
import createMenuPropTypes from './CreateMenuPropTypes';

/**
 * The web implementation of the menu needs to trigger actions before the popup closes
 * When the modal is closed it's elements are destroyed
 * Some browser will ignore interactions on elements that were removed or if the
 * the action is not triggered immediately after a click
 * This is a precaution against malicious scripts
 *
 * @param {Object} props
 * @returns {React.ReactElement}
 */
const CreateMenu = (props) => {
    // Trigger the item's `onSelect` action as soon as clicked
    const selectItem = (item) => {
        item.onSelected();
        props.onItemSelected(item);
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <BaseCreateMenu {...props} onItemSelected={selectItem} />;
};

CreateMenu.propTypes = createMenuPropTypes;

export default CreateMenu;
