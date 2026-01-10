import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LightSwitch = () => {

    const [isOn, setIsOn] = useState(false);
    const [count, setCount] = useState(0);

    const toggleSwitch = () => {
        if (!isOn) { // Si la lumière est éteinte
            setCount(count + 1); // Incrémenter le compteur si on allume la lumière
        }
        setIsOn(!isOn); // Inverser l'état du switch
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <View style={[
            styles.container, 
            { backgroundColor: isOn ? '#ffeb3b' : '#333' }]
        }>
            <Text style={[styles.counter, { color: isOn ? '#333' : '#fff' }]}>
                Allumée {count} fois
            </Text>
            <Text style={[
                styles.emoji, 
                {opacity: isOn ? 1 : 0.3}
            ]}>

            </Text>
            <TouchableOpacity 
                style={[
                    styles.button,
                    {backgroundColor: isOn ? '#333' : '#ffeb3b'}
                ]} 
                onPress={toggleSwitch}
            >
                <Text style={styles.buttonText}>
                    {isOn ? 'Éteindre' : 'Allumer'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.resetButton, { borderColor: isOn ? '#333' : '#fff' }]} 
                onPress={resetCount}
            >
                <Text style={[styles.resetText, { color: isOn ? '#333' : '#fff' }]}>
                    RÉINITIALISER LE COMPTEUR
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default LightSwitch

const styles = StyleSheet.create({
    
    button: {
        padding: 20,
        borderRadius: 10
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    counter: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        position: 'absolute',
        top: 60
    },

    emoji: {
        fontSize: 100,
        marginBottom: 40
    },

    resetButton: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },

    resetText: {
        fontSize: 14,
        fontWeight: 'bold'
    },

})