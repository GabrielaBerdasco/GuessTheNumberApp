import React from "react"
import { TextInput, StyleSheet } from "react-native"
import Colors from "../constants/Colors"

const Input = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
input: {
  height: 40,
  width: 80,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: Colors.borderColor
}
})

export default Input