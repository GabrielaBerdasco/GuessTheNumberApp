import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet, useWindowDimensions } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors"

const StartGameScreen = ({ onStartGame }) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState ('')
    const { width, height } = useWindowDimensions()
    const isPortrait = height >= width

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
            let enteredValueInt = parseInt(enteredValue)
            setSelectedNumber(enteredValueInt)
        } else {
            setErrorMessage('Seleccionar número entre 0 y 99')
        }
    }
    const handleStartGame = () => onStartGame(selectedNumber)


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <Text style={isPortrait ? styles.title : styles.titleLandscape}>Comenzar Juego</Text>
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        flex: 1,
    },
    title:{
        margin: 10,
        fontSize: 28,
        fontFamily: 'Shizuru',
        color: Colors.primary
    },
    titleLandscape:{
        margin: 15,
        fontSize: 35,
        fontFamily: 'Shizuru',
        color: Colors.primary
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