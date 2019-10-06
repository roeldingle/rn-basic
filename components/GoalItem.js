import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {

    const [itemInactive, setitemInactive] = useState(false);

    const inactiveItemHandler = () => {
        (itemInactive == false) ? setitemInactive(true) : setitemInactive(false);
        //console.log(itemInactive);
    };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={inactiveItemHandler}>
            <View style={(itemInactive == false) ? styles.listItem : styles.listItemIncative}>
                <Text>
                    {props.value}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    listItem: {
        borderColor: '#cacaca',
        borderWidth: 1,
        padding: 8,
        marginTop: 5,
    },
    listItemIncative: {
        borderColor: '#cacaca',
        borderWidth: 1,
        padding: 8,
        marginTop: 5,
        backgroundColor: '#cacaca'
    }
});

export default GoalItem;