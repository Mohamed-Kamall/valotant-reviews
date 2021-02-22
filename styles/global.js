import {StyleSheet} from 'react-native';



export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        margin:10,
    },
    text:{
        fontFamily: 'SourceSansPro-ExtraLight', 
        fontSize:24,
        color:'#6385ab',
        fontWeight : 'bold',
        
        
    },
    overlay : {
        flex: 1 ,  
    },
    input :{
        borderWidth : 1,
        borderStyle : 'solid',
        borderRadius : 5 ,
        padding : 10,
        margin : 5,
        fontSize : 18,
        borderColor:'#ddd',
        width: 350,
        
    },
    errorText :{
            color: 'crimson',
            marginBottom: 10,
            marginTop: 10,
            alignSelf: 'center',
        },
})

export const images ={
    ratings : {
        '1' : require('../assets/1star.png'),
        '2' : require('../assets/2star.png'),
        '3' : require('../assets/3star.png'),
        '4' : require('../assets/4star.png'),
        '5' : require('../assets/5star.png'),
    },
}