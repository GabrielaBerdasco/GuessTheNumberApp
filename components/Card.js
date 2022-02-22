import React from 'react'
import { View, StyleSheet } from "react-native"
import Colors from '../constants/Colors'

const Card = ({ style, children }) => {
    return (
        <View style={[style, styles.cardContainer]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: Colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.60,
        shadowRadius: 16,

        elevation: 24, 
    }
})

export default Card