import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation' ;
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const rootDrawerNavigator = createDrawerNavigator({
    home : {
        screen : HomeStack 
    },
    about : {
        screen : AboutStack
    }
})

export default createAppContainer(rootDrawerNavigator)