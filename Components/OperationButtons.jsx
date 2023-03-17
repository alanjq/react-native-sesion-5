import React from 'react';
import { View } from 'react-native';
import CalcButton from './CalcButton';

function OperationButtons({ onPress }) {
    const GAP = 10

    const flexgrid = {
        container: {
            flexDirection: 'column',
            gap: GAP
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
            <CalcButton label="C" backgroundColor="orange" onPress={onPress} />
            <CalcButton label="-" backgroundColor="orange" onPress={onPress} />
            <CalcButton label="+" backgroundColor="orange" onPress={onPress} />
            <CalcButton label="=" backgroundColor="orange" onPress={onPress} />
        </View>
    )
}
export default OperationButtons
