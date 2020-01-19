import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
//import ChatScreen from './screens/ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
   // Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
