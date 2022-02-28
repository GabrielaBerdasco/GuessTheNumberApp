import React from "react";
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";

const Header = ({ title }) => {

    const { width, height } = useWindowDimensions()
    const isPortrait = height >= width

    return (
        <View style={[styles.header, isPortrait ? styles.headerPortrait : styles.headerLandscape]} >
            <Text style={styles.headerTitle} >{ title }</Text>
        </View>
    )
}

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: Colors.primary
    },
    headerPortrait : {
        width: '100%',
        height: 150,
        backgroundColor: Colors.primary
    },
    headerLandscape: {
        width: '100%',
        height: 110,
        backgroundColor: Colors.primary
    },
    headerTitle: {
        marginTop: height >= 450 ? 60 : 18,
        color: Colors.accent,
        fontSize: 40,
        fontFamily: 'Shizuru',
        textAlign: 'center',
    }
})

export default Header