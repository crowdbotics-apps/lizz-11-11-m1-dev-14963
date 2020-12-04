import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315478Navigator from '../features/BlankScreen315478/navigator';
import BlankScreen215178Navigator from '../features/BlankScreen215178/navigator';
import BlankScreen115177Navigator from '../features/BlankScreen115177/navigator';
import BlankScreen015176Navigator from '../features/BlankScreen015176/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen315478: { screen: BlankScreen315478Navigator },
BlankScreen215178: { screen: BlankScreen215178Navigator },
BlankScreen115177: { screen: BlankScreen115177Navigator },
BlankScreen015176: { screen: BlankScreen015176Navigator },

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
