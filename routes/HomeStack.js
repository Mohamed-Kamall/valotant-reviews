import {createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header'

const screens = {
    home : {
        screen : Home,
        navigationOptions : ({navigation}) => 
            ({
                headerTitle: ()=>(<Header navigation={navigation} title='VALORATE'/>),
                headerStyle:{backgroundColor : '#c5c4bf',height:120}
        })  
    },
    reviewDetails : {
        screen : ReviewDetails,
        navigationOptions :{
            title : 'Review Details',
            headerStyle : {backgroundColor : '#c5c4bf'}
        },
        
    },

}

const HomeStack = createStackNavigator(screens);

export default HomeStack
