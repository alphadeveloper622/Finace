import React from 'react';
import PropTypes from 'prop-types';
import UsersSvg from '../../../assets/images/users.svg';
import themeColors from '../../styles/themes/default';
import variables from '../../styles/variables';

const propTypes = {
    // Width of the icon
    width: PropTypes.number,

    // Height of the icon
    height: PropTypes.number,

    // Fill of the icon
    fill: PropTypes.string,
};

const defaultProps = {
    width: variables.iconSizeNormal,
    height: variables.iconSizeNormal,
    fill: themeColors.icon,
};

const UsersIcon = props => (
    <UsersSvg
        width={props.width}
        height={props.height}
        fill={props.fill}
    />
);

UsersIcon.propTypes = propTypes;
UsersIcon.defaultProps = defaultProps;

export default UsersIcon;
