import React from 'react';
import { Text } from 'react-native';


function Result({ value }) {
    const styles = {
        fontSize: 30,
        color: 'red',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderWidth: 1,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 30,
    }

    return (
        <Text style={styles}>{value}</Text>
    )
}
export default Result
