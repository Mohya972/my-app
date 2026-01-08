import React from "react";
import {
  Text,
  View
} from "react-native";

const Index = () => {
  return (
    <View style ={styles.main}>
      <Text style={styles.montexte}>Index</Text>
      <Bonjour />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  main: {
    backgroundColor : 'green',
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  montexte : {
    color : 'white',
    fontSize : 18,
    fontWeight : 700
  }
})