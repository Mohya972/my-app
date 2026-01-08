import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bouton = () => {
    return (
        <View style={styles.content}>
            <Text>Valider</Text>
        </View>
    )
};

export default Bouton

const styles = StyleSheet.create({
    content : {
        backgroundColor : 'orange', // couleur de fond orange
        height : 50, // hauteur de 50 unités
        width : 100, // largeur de 100 unités
        justifyContent : 'center', // centre verticalement les éléments
        alignItems : 'center', // centre horizontalement les éléments
        borderRadius : 10, // bord arrondi
        padding : 10, // espace intérieur
        margin : 10 // marge extérieure
    }
});