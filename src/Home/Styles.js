import { Dimensions, StyleSheet } from "react-native";

const {height}=Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    headingText: {
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginBottom: 10,
    },
    summary: {
      width: 40,
      borderColor: 'grey',
      alignSelf: "center",
      borderBottomWidth: 1,
    },
    summaryText: {
      textAlign: "center",
      marginTop: 10,
      color: 'grey'
    },
    card: {
      backgroundColor: '#f5f5f0',
      borderRadius: 10,
      marginTop: height * 0.02,
      elevation: 6,
      marginVertical: 8,
    
    },
    cardHeader: {
      backgroundColor: '#003366',
      padding: 4,
      borderRadius: 10,
      elevation: 2,

    },
    missionName: {
      alignSelf: 'center',
      fontSize: 16,
      color: '#fff',
      letterSpacing: 1,
      fontWeight: "bold"
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal:15
    },
    details:{
      width:'90%',
      alignSelf:"center"
    },
    launchDate: {
      alignSelf: 'center',
      fontSize: 12,
      color: '#000',
      marginTop: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
     marginVertical:8,
     marginHorizontal:15
    },
    button: {
      width: 120,
      height: 30,
      backgroundColor: '#ff9900',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      alignSelf: 'center',
      fontSize: 14,
      color: '#fff',
      fontWeight:'bold'
    },
  });