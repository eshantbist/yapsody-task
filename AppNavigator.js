import { createSwitchNavigator,createDrawerNavigator, createAppContainer } from 'react-navigation';
import SignIn from './src/containers/SignIn';
import SignUp from './src/containers/SignUp';
import TaskList from './src/containers/TaskList';
import CustomDrawer from './src/components/CustomDrawer';
import { Dimensions} from "react-native";

const width=Dimensions.get('window').width;
const halfWidth=width/2;
const AuthStack = createSwitchNavigator({
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
        screen: SignUp
      },
  });

const DrawerStack=createDrawerNavigator({
    Auth:{
            screen:AuthStack,
            navigationOptions: ({navigation}) => ({
                drawerLockMode: 'locked-closed'
            })
        },
    TaskList:{screen:TaskList},
},{
    drawerWidth: halfWidth,
    contentComponent: CustomDrawer
});


export default createAppContainer(DrawerStack);