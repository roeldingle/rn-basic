import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isOnModal, setIsOnModal] = useState(false);

  const addGoalHandler = inputValue => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: inputValue }
    ]);

    setIsOnModal(false);
  }

  const cancelAddGoalHandler = () => {
    setIsOnModal(false);
  }

  // const removeGoalHandler = goalId => {
  //   setCourseGoals(currentGoal => {
  //     return currentGoal.filter((goal) => goal.id !== goalId);
  //   });
  // }

  

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsOnModal(true)}/>
      <GoalInput onAddGoal={addGoalHandler} onCancel={cancelAddGoalHandler} isVisible={isOnModal}/>
      <FlatList
        style={styles.contentContainer}
        data={courseGoals}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} value={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 40
  },
  contentContainer: {
    marginTop: 10,
    width: '100%'
  }
});
