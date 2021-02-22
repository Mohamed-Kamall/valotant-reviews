import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';
import Header from '../shared/Header';
import React from 'react'



const screens = {
    about : {
        screen : About,
        navigationOptions : ({navigation}) => 
            ({
                headerTitle: ()=>(<Header navigation={navigation} title= 'ABOUT' />),
                headerStyle:{backgroundColor : '#c5c4bf',height:120}
        })  
    },
    
}

const AboutStack = createStackNavigator(screens);

export default AboutStack 