import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Compteur from '../components/Compteur';
import CompteurRedux from '../components/CompteurRedux';
import { store } from '../store/store';

// fonction flèche index
const index = () => {
  return (
    <Provider store={store}>
      <View style={styles.content}>
        <Compteur />
        <CompteurRedux />
      </View>
    </Provider>
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