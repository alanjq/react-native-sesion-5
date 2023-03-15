import React from 'react';
import { View } from 'react-native';
import Result from '../Components/Result';
import NumericButtons from '../Components/NumericButtons'
import OperationButtons from '../Components/OperationButtons';

function Calculadora() {
    const flexgrid = {
        container: {
            flexWrap: "wrap",
            flexDirection: 'row',
            padding: 10,
            gap: 20
        }
    }

    return (
        <View>
            <Result value={40} />

            <View style={flexgrid.container}>
                <View style={{ backgroundColor: "blue", flexDirection: "column", flexGrow: 1 }}>
                    <NumericButtons />
                </View>
                <View style={{ backgroundColor: "yellow", flexDirection: "column", flexShrink: 1 }}>
                    <OperationButtons />
                </View>
            </View>

        </View>
    )
}
export default Calculadora
