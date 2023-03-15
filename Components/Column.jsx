import React from 'react';
import { View } from 'react-native';


function Column({ children }) {
    const colStyle = {
        flexDirection: "column",
        flex: 1,
        gap: 15,
    }

    return (
        <View style={{ colStyle }}>
            {children}
        </View>
    )
}
export default Column
