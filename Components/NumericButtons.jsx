import React from 'react';
import { View } from 'react-native';
import CalcButton from './CalcButton';

export function NumericButtons() {
    const GAP = 15

    const flexgrid = {
        container: {
            flexDirection: 'row',
            flexGrow: 1,
            gap: GAP,
        },
        column: {
            backgroundColor: "blue",
            flexDirection: "column",
            flexGrow: 1,
            gap: GAP
        },
    }

    return (
        <View style={flexgrid.container}>
            <View style={flexgrid.column}>
                <CalcButton label="1" />
                <CalcButton label="4" />
                <CalcButton label="7" />
            </View>
            <View style={flexgrid.column}>
                <CalcButton label="2" />
                <CalcButton label="5" />
                <CalcButton label="8" />
            </View>
            <View style={flexgrid.column}>
                <CalcButton label="3" />
                <CalcButton label="6" />
                <CalcButton label="9" />
            </View>
        </View>
    )
}
export default NumericButtons
