import React from 'react';
import { Text } from 'react-native';

function CalcButton({ label, backgroundColor }) {

    return (
        <Text style={{
            fontSize: 30,
            backgroundColor: backgroundColor || "lightgray",
            color: "blue",
            padding: 15,
            flexBasis: "auto",
            flexGrow: 1,
            fontWeight: "bold",
            textAlign: "center",

        }}>{label}</Text>
    )
}
export default CalcButton
