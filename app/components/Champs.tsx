import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Champs = () => {

    const [name, setName] = useState('');

    return (
        <View style={styles.content}>
            <View>
                <Text style={styles.title}>TP Champs de Texte</Text>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Entre ton prénom"
                    value={name}
                    onChangeText={setName}
                />
                
                <Text style={styles.counter}>
                    {name.length} caractère(s)
                </Text>
            </View>

            <View>
                <Text style={styles.greeting}>
                    {name ? `Bonjour, ${name} !` : 'Entre ton prénom ci-dessus.'}
                </Text>
            </View>
        </View>
    );
};

export default Champs

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },

    content : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center',
        paddingTop : 50,
    },

    counter: {
        textAlign: 'right', // Aligne le compteur à droite sous le champ
        marginTop: 5,
        color: '#422e2eff',
        fontSize: 14,
    },

    greeting: {
        fontSize: 24,
        marginTop: 30,
        textAlign: 'center',
        color: '#333'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        fontSize: 18,
        borderRadius: 8
    },

    inputContainer: {
        width: '80%', 
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})