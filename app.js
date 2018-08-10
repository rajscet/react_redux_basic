
import { createStackNavigator } from 'react-navigation';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import App from './Main'


 

export default st= createStackNavigator({
    App: {
    screen: App
  },
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
});


