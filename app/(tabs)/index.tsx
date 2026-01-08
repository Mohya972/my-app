import React from 'react';
import { StyleSheet, View } from 'react-native';
import Todo from '../components/Todo';

// fonction flèche index
const index = () => {
  return (
    <View style={styles.content}>
      <Todo />
    </View>
  );
};

export default index;

// ajout du style de index
const styles = StyleSheet.create({
  // style de la vue principale
  content : {
    flex : 1, // prend toute la place disponible
    backgroundColor : 'green', // couleur de fond verte
  }
});