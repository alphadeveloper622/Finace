import React, {useRef} from 'react';
import {ScrollView} from 'react-native';

// eslint-disable-next-line rulesdir/no-inline-named-export
export const ScrollViewWithPickersContext = React.createContext();

// eslint-disable-next-line react/forbid-foreign-prop-types
const propTypes = ScrollView.propTypes;

export default function ScrollViewWithPickers(props) {
    // eslint-disable-next-line react/destructuring-assignment
    const {children, ...restProps} = props;
    const scrollViewRef = useRef(null);

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ScrollView {...restProps} ref={scrollViewRef}>
            <ScrollViewWithPickersContext.Provider value={{scrollViewRef}}>
                {children}
            </ScrollViewWithPickersContext.Provider>
        </ScrollView>
    );
}
ScrollViewWithPickers.propTypes = propTypes;
