import React from 'react';
import { StyleSheet, View } from 'react-native';
import Champs from '../components/Champs';

// fonction flèche index
const index = () => {
  return (
    <View style={styles.content}>
      <Champs />
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