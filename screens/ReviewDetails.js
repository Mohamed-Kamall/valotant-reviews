import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text ,StyleSheet ,Image ,ImageBackground } from 'react-native'
import { createAppContainer } from 'react-navigation';
import Card from '../shared/Card'
import { globalStyles, images } from '../styles/global';


export default function ReviewDetails({navigation}) {
    const rating = navigation.getParam('rating')
    return (
        <ImageBackground source={require('../assets/valorant-2020-5k-dq-1920x1080.jpg')} style={globalStyles.container}>
            <Card>
            <Text style={styles.rating}> {navigation.getParam('title')} </Text>
            <Text style={styles.rating}> {navigation.getParam('body')} </Text>
            <View style={styles.rating}>
                <Text>rating :</Text>
                <View>
                    <Image source={require('../assets/stars.png')}/>
                    <Image style={{
                        position :'absolute',
                        left : 0,
                        top: 0,
                        }} source={images.ratings[rating]}/>
                </View>
                
            </View>
            </Card>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    rating :{
        flexDirection : 'row',
        justifyContent : 'center',
        padding : 17,
        marginTop : 17,
        borderWidth : 1,
        borderStyle : 'dotted', 
        borderRadius : 8
    },
})
