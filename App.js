import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';
import Navigator from './routes/Drawer'

const getFont = () => Font.loadAsync({
  'SourceSansPro-Bold' :require('./assets/fonts/SourceSansPro-Bold.ttf') ,
  'SourceSansPro-BoldItalic' : require('./assets/fonts/SourceSansPro-BoldItalic.ttf'),
  'SourceSansPro-ExtraLight' : require('./assets/fonts/SourceSansPro-ExtraLight.ttf')
})

export default function App() {
  const [fontsloaded, setFontsloaded] = useState(false)

  if(fontsloaded) {
    return (
      
        <Navigator/>
      
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={()=>setFontsloaded(true)}
      />
    )
}
}


