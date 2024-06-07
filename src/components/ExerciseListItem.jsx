
import { StyleSheet, Text, View, } from 'react-native';



export default function ExerciseListItem ({item})
{
  return(
    <View style={styles.exerciseContainer}>
              <Text>Open up App.js to start working on your app!</Text>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                <Text style={styles.subValue}>{item.muscle}</Text> | <Text style={styles.subValue}>{item.equipments}</Text>
              </Text>
            </View>

  )

}

const styles = StyleSheet.create({
  
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
      marginHorizontal:3,

      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.16,
      shadowRadius: 1.51,
      elevation: 2
  
    },
    subValue: {

        textTransform: 'capitalize'
    }
  });
  