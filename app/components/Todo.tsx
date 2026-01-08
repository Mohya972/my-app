import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


const Todo = () => {

    // Initialisation des variables d'état
    const [tache, setTache] = useState('');
    const [dataTasks, setDataTasks] = useState([]);

    // Fonction saveTask pour enregistrer une tâche
    const saveTask = () => { 
        console.log('Valeur TextInput : ', tache);
        // Vérifier que la tâche n'est pas vide
        if (tache === '') { 
            Alert.alert('Erreur', 'Veuillez entrer une tâche');
            return;
        } // fin de la vérification

        // Formatage d'une tâche (c'est un objet)
        const newTask = {
            id : Date.now().toString(), // identifiant unique
            task : tache, // texte de la tâche
            complete : false, // statut de la tâche
        } // fin du formatage
        console.log(newTask); // affichage de la nouvelle tâche

        // Ajout de la nouvelle tâche au tableau de tâches
        setDataTasks([...dataTasks, newTask])

        // Vider le formulaire
        setTache('');

    } // fin de la Fonction saveTask

    // Début du rendu d'une tâche
    const renderTask = ({ item }) => { 
        return (<View>
            <Text>
                {item.task}
            </Text>
        </View>)
    } // Fin du rendu d'une tâche


    return (
        <View style={styles.content}>
            <View>
                <Text style={styles.title}>Mon Gestionnaire de Tâches</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    value={tache}
                    onChangeText={setTache}
                    placeholder="Saisir une tâche..." />
                <Button 
                    title='Ajouter' 
                    color='green'
                    onPress={saveTask} />
            </View>
            <View>
                <FlatList 
                    data={dataTasks}
                    renderItem={renderTask}
                    keyExtractor={item => item.id}
                    
                    
                />
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    content : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',

    },

    title : {
        color : 'green',
        fontSize : 24,
        fontWeight : '600',
        padding : 10,
    },
    
    inputContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 20,
    },
})