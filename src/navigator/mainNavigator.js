import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings191740Navigator from '../features/Settings191740/navigator';
import Settings191725Navigator from '../features/Settings191725/navigator';
import NotificationList191724Navigator from '../features/NotificationList191724/navigator';
import Maps191723Navigator from '../features/Maps191723/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings191740: { screen: Settings191740Navigator },
Settings191725: { screen: Settings191725Navigator },
NotificationList191724: { screen: NotificationList191724Navigator },
Maps191723: { screen: Maps191723Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
