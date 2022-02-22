import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = ({ title }) => {

    return (
        <View style={styles.header} >
            <Text style={styles.headerTitle} >{ title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width: '100%',
        height: 150,
        backgroundColor: Colors.primary
    },
    headerTitle: {
        marginTop: 60,
        color: Colors.accent,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Header