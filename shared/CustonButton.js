import React from 'react'
import { View, Text , TouchableOpacity , StyleSheet } from 'react-native'

const CustonButton = ({ text , handler}) => {
    return (
        <TouchableOpacity onPress={handler}>
            <View style={styles.button}>
                <Text style={styles.textButton}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button :{
        borderRadius : 1,
        paddingHorizontal : 10,
        paddingVertical : 15,
        backgroundColor :'#B20000'
    },
    textButton :{
        color : 'white',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 16 ,
        textAlign : 'center',
    }
})

export default CustonButton
