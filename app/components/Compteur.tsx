import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Compteur = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.content}>
            <Text style={styles.number}>Mon Compteur : {count}</Text>

            <View style={styles.buttonsGroup}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>- 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>+ 1</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={() => setCount(0)}>
                    <Text style={styles.buttonText}>REINITIALISER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Compteur

const styles = StyleSheet.create({

    button : {
        backgroundColor: '#121412ff',
        padding: 15,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        minWidth: 80,
    },

    buttonsGroup: {
        // Ce conteneur englobe tous les boutons
        alignItems: 'center',
    },

    buttonText : {
        color: 'white',
        fontSize: 18
    },

    content : {
        flex : 1,
        backgroundColor : 'pink',
        alignItems : 'center',
        justifyContent : 'center'
    },

    number : {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 30 
    },

    resetButton: {
        backgroundColor: '#780c09ff',
        marginTop: 10, 
        padding: 15, 
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'stretch', 
        marginHorizontal: 10,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})