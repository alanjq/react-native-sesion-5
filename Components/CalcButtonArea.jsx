import React from 'react';
import { View } from 'react-native';

function CalcButtonArea({ left, right }) {  
    const flexgrid = {
        container: {
            flexDirection: 'row', padding: 10
        },
        column: {
            backgroundColor: "blue", flexDirection: "column", flexGrow: 1
        },
    }

    return (
        <View style={flexgrid.container}>
            <View style={flexgrid.column}>
                {left}
            </View>
            <View style={flexgrid.column}>
                {right}
            </View>
        </View>
    )
}
export default CalcButtonArea
