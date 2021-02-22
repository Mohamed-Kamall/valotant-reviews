import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>This apllication is dedicated to our heros stuck in iron 2 </Text>
        </View>
    )
}


