import React from 'react';
import { View, Text, StyleSheet ,Image ,ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ( {navigation,title} ) => {
    const openMenu = () =>{
        navigation.openDrawer();
    }
    return (
        <ImageBackground style = {styles.header}>
            <MaterialIcons name='menu' size={26} color='black' style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/valorant.png')} style={styles.img}/>
                <Text style = {styles.text}>{ title }</Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    header : {
        width :'100%',
        height : '100%',
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    text : {
        fontWeight : 'bold',
        fontSize : 20,
        color :'black',
        letterSpacing : 1

    },
    icon :{
        position : 'absolute',
        left : 16,

    },
    img :{
        width:40,
        height:40,
        marginRight: 10,
        
    },
    headerTitle :{
        flexDirection :'row',
        alignItems : 'center',

    }
})

export default Header
