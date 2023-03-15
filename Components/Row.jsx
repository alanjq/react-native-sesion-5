import React from 'react';
import { View } from 'react-native';

function Row({ children }) {
    const rowStyles = {
        flexDirection: "row",
        flexWrap: 'wrap',
        gap: 15,
        // backgroundColor: "yellow",
    }

    return (<View style={rowStyles}>
        {children}
    </View>)
}
export default Row
