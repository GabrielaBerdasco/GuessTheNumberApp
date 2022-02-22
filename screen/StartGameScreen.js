import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors"

const StartGameScreen = ({ onStartGame }) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState ('')

    const handleChangeText = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    }
    const handleReset = ()=> {
        setEnteredValue('')
        setConfirmed(false)
        setSelectedNumber('')
        setErrorMessage('')
    }
    const handleConfirm = () => {
        if (enteredValue.length>= 1) {
            setConfirmed(true)
            setSelectedNumber(enteredValue)
        } else {
            setErrorMessage('Seleccionar número entre 0 y 99')
        }
    }
    const handleStartGame = () => onStartGame(selectedNumber)


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text>Elija un número</Text>
                    <Input
                        blurOnSubmit
                        keyboardType='numeric'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={handleChangeText}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Limpiar" onPress={handleReset} />
                        <Button title="Confirmar" onPress={handleConfirm} >
                        <Text> ;)</Text>   
                        </Button>
                    </View>
                </Card>
                    {confirmed ? (
                        <Card>
                            <Text style={styles.title}>Número elegido: {selectedNumber}</Text>
                            <Button title='COMENZAR' onPress={handleStartGame} color={Colors.primary} />
                        </Card>
                    ) : (
                        <Text style={styles.title}>{errorMessage}</Text>
                    )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    title:{
        fontSize: 22,
        margin: 10,
    },
    inputContainer:{
        width:300,
        maxWidth: '80%',
        padding:20,
        alignItems: 'center',
        backgroundColor: 'white',    
    },
    buttonContainer:{
        paddingHorizontal:15,
        width: 230,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    }

})

export default StartGameScreen