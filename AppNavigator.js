import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './src/containers/SignIn'
import SignUp from './src/containers/SignUp'

const AuthStack = createSwitchNavigator({
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
        screen: SignUp
      },
  });


export default createAppContainer(AuthStack);