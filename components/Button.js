import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Colors from "../constants/Colors"

const Button = ({ title, onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{title}</Text>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
button:{
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.accent
}
})

export default Button