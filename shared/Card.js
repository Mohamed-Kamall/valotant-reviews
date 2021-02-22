import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card :{
        borderRadius :6,
        elevation : 3,
        backgroundColor : '#FFB6C1',
        shadowOffset :{width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginVertical :10,
        marginHorizontal :4,
        padding:10,
        opacity : 0.75,
    },
    cardContent :{ 
        alignItems : 'center'
    }
})

export default Card
