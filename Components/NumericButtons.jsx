import React from 'react';
import { View } from 'react-native';
import CalcButton from './CalcButton';

export function NumericButtons({ onPress }) {
    const GAP = 15

    const flexgrid = {
        container: {
            flexDirection: 'row',
            flexGrow: 1,
            gap: GAP,
        },
        column: {
            flexDirection: "column",
            flexGrow: 1,
            gap: GAP
        },
    }

    const COLUMNS = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]

    return (
        <View style={flexgrid.container}>
            {/* Renderizar los botones numéricos */}
            {COLUMNS.map((column) =>
                <View style={flexgrid.column}>
                    {column.map(numericbutton =>
                        <CalcButton key={numericbutton} label={numericbutton} onPress={onPress} />
                    )}
                </View>
            )}
        </View>
    )
}
export default NumericButtons
