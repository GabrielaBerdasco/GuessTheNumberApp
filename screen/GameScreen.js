import React, { useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native"
import Button from "../components/Button"
import Card from "../components/Card"

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min) + min)

    if (random === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return random
    }
    
}


const GameScreen = ({ userNumber, onGameOver }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween (0, 99, userNumber))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(0)
    const currentHigh = useRef(99)

    const handleNextGuess = (direction) => () => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert("No mientas!" , "Tu sabes que no es verdad...", [
                {
                    text: "Disculpa",
                    style: "cancel",
                }
            ])

            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds( round => round + 1)
    }

    useEffect( () => {
        if (currentGuess === userNumber) onGameOver(rounds)
    }, [currentGuess, userNumber, onGameOver])

    return (
        <View style={styles.screen}>
            <Text>La suposición del oponente: </Text>
            <Text>{currentGuess}</Text>
            <Card style={styles.buttonContainer}>
                <Button title="MENOR" onPress={handleNextGuess('lower')} />
                <Button title="MAYOR" onPress={handleNextGuess('higher')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    padding: 10,
    width: 300,
    maxWidth: '80%',
    marginBottom: 10
},
})

export default GameScreen