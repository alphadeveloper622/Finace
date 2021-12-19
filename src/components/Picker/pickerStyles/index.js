import CONST from '../../../CONST';
import getBrowser from '../../../libs/getBrowser';
import styles from '../../../styles/styles';

const pickerStylesWeb = () => {
    if (CONST.BROWSER.FIREFOX === getBrowser()) {
        return {
            textIndent: -2,
        };
    }
    return {};
};

const pickerStyles = (disabled, error, focused) => ({
    ...styles.Picker(disabled, error, focused),
    inputWeb: {
        ...styles.Picker(disabled, error, focused).inputWeb,
        ...pickerStylesWeb(),
    },
});

export default pickerStyles;
