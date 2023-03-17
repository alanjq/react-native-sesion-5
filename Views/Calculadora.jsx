import React, { useState } from 'react';
import { View } from 'react-native';
import Result from '../Components/Result';
import NumericButtons from '../Components/NumericButtons'
import OperationButtons from '../Components/OperationButtons';

function Calculadora() {
    const [displayValue, setDisplayValue] = useState(0)
    const [result, setResult] = useState(0)

    const flexgrid = {
        container: {
            flexWrap: "wrap",
            flexDirection: 'row',
            padding: 10,
            gap: 20
        }
    }

    const handleNumberPress = (value) => {
        setDisplayValue(value)
    }

    const handleOperationPress = (operation) => {
        console.log('Result', displayValue);
        console.log('number', result);
        switch (operation) {
            case "=":
                setDisplayValue(result + displayValue)
                break;

            case "+":
                setResult(displayValue + result)
                break;

            case "-":
                setDisplayValue(result - displayValue)

                break;
            case "C":
                setDisplayValue(0)
                setResult(0)
                break;

            default:
                break;
        }
    }

    return (
        <View>
            {/* Mostrar el resultado */}
            <Result value={displayValue} />

            <View style={flexgrid.container}>
                <View style={{ backgroundColor: "blue", flexDirection: "column", flexGrow: 1 }}>
                    <NumericButtons onPress={handleNumberPress} />
                </View>
                <View style={{ backgroundColor: "yellow", flexDirection: "column", flexShrink: 1 }}>
                    <OperationButtons onPress={handleOperationPress} />
                </View>
            </View>

        </View>
    )
}
export default Calculadora
