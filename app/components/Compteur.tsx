// import { Button } from '@react-navigation/elements';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Compteur = () => { 
    // déclaration de la variable nombre
    const [nombre, setNombre] = useState(0);

    // fonction d'incrementation
    const incrementation = () => { 
        console.log('incrémentation du compteur', nombre)
        setNombre(nombre + 1);
    }
    // fonction de décrementation
    const decrementation = () => { 
        console.log('décrémentation du compteur', nombre)
        setNombre(nombre - 1);
    }
    // fonction reset
    const reset = () => { 
        console.log('reset du compteur', nombre)
        setNombre(0);
    }

    return (
        <View style={styles.content}>
            <Text>Compteur: {nombre}</Text>

            <Button 
                onPress={decrementation}
                title="DECREMENTATION"
                style={{ backgroundColor: 'blue', 
                height: 40, 
                width: 150, 
                spaceBetween: 30, 
                margin: 30 }}
                accessibilityLabel="learn more about this button" 
            /> 
            <Button 
                onPress={incrementation}
                title="INCREMENTATION"
                style={{ backgroundColor: 'blue', 
                height: 40, 
                width: 150, 
                spaceBetween: 30,
                margin: 30 }}
                accessibilityLabel="learn more about this button" 
            /> 
            <Button 
                onPress={reset}
                title="RESET"
                style={{ backgroundColor: 'blue', 
                height: 40, 
                width: 150, 
                spaceBetween: 30,
                margin: 30 }}
                accessibilityLabel="learn more about this button" 
            /> 
        </View>
    )
}

export default Compteur

const styles = StyleSheet.create({
    content : {
        backgroundColor : 'white',
        height : 300, // hauteur de 300 unités
        width : 200, // largeur de 200 unités
        justifyContent : 'center', // centre verticalement les éléments
        alignItems : 'center', // centre horizontalement les éléments
        padding : 10,
        margin : 10,
        borderRadius : 5,

    }
})