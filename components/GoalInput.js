import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setenteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setenteredGoal(enteredText);
    }

    const goalAddHandler = () => {
        props.onAddGoal(enteredGoal);
        setenteredGoal('');
    }

    const cancelHandler = () => {
        props.onCancel();
        setenteredGoal('');
    }

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="CANCEL" color="#ed0000" onPress={cancelHandler} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="ADD" onPress={goalAddHandler} style={styles.primary} />
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderColor: '#cacaca',
        borderWidth: 1,
        padding: 4,
        width: '80%',
        marginBotton: 20,
    },
    buttonContainer: {
        marginTop: 6,
        width: '80%'
    },
});

export default GoalInput;