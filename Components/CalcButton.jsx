import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

function CalcButton({ label, backgroundColor, onPress }) {
    return (
        <TouchableHighlight underlayColor="white" onPress={() => onPress ? onPress(label) : null}>
            <View>
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
            </View>
        </TouchableHighlight>
    )
}
export default CalcButton
