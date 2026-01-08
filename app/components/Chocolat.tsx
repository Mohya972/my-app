import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// fonction flèche Chocolat
const Chocolat = ({ couleur, marque }) => { // paramètres couleur et marque
    
    return (
        <View style={styles.content}>
            <Text>Chocolat {couleur} {marque} !</Text>
        </View>
    )
}

export default Chocolat

const styles = StyleSheet.create({
    // style de la vue principale
    content : {
        backgroundColor : 'white', // couleur de fond blanche
        height : 100, // hauteur de 100 unités
        width : 100, // largeur de 100 unités
        justifyContent : 'center', // centre verticalement les éléments
        alignItems : 'center', // centre horizontalement les éléments
        borderRadius : 10, // bord arrondi
        padding : 20, // espace intérieur
        margin : 10 // marge extérieure
        
    }

    
})