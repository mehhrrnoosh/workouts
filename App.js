import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'

export default function App() {
  console.log(exercises);
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.exerciseName}>{exercises.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {exercises.muscle.toUpperCase()} | {exercises.equipments}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    // alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  exerciseName:
  {
    fontSize:20,
    fontWeight:'500'
  },
  exerciseSubtitle:
  {
    color:'dimgray',
  },
  exerciseContainer:
  { 
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    gap:5,

  },
});
