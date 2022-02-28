import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/Colors"


const GameOverScreen = ({ userRounds, userNumber }) => {

    return (
        <View>
            <Text style={styles.maintitle}>Game over</Text>
            <Text style={styles.subtitle}>{userRounds} rondas</Text>
            <Text style={styles.subtitle}>El número era: {userNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    maintitle: {
        margin: 10,
        fontSize: 38,
        fontFamily: 'Shizuru',
        color: Colors.accent
    },
    subtitle:{
        margin: 10,
        fontSize: 28,
        fontFamily: 'Shizuru',
        color: Colors.accent
    },
})

export default GameOverScreen