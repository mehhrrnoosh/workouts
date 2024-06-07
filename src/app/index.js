import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from '../../assets/data/exercises.json'
import ExerciseListItem from '../../src/components/ExerciseListItem';

export default function App() {
  // console.log(exercises);
  return (
    <View style={styles.container}>
      <FlatList 
        data={exercises}
        contentContainerStyle={{gap:5}}
        keyExtractor={(item)=> item.name}
        renderItem={({item}) => 
           (

             <ExerciseListItem item={item} />
            
          )
        }
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    marginHorizontal:3,
    shadowColor:'#000',
    textShadowOffset: {
      width:0,
      height:1,
    },
    shadowOpacity:0.2,
    shadowRadius:1.41,
    elevation:10,
 
  
  }
})

