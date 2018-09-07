import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements'

import Home from './containers/Home';
import Activo from './containers/ActiveScreen';
import Selected from './containers/Selected';
// import CHeader from './containers/CustomHeader';

const HomeStack =  createStackNavigator({
  All:{
    screen: Home,
  }
});
const ActiveStack = createStackNavigator({
  Active:{
    screen:Activo,
  }
});
const CheckedStack = createStackNavigator({
  Checked:{
    screen:Selected,
  }
});

export default createBottomTabNavigator({
  All:{
    screen: HomeStack,
    navigationOptions:{
      tabBarIcon:()=><Icon size ={40} name={'navicon'} color={'gray'} type={'font-awesome'}/>
    }
  },
  Active:{
    screen: ActiveStack,
    navigationOptions:{
      tabBarIcon:()=><Icon size ={40} name={'flash'} color={'gray'} type={'font-awesome'}/>
    },
  },
  Checked:{
    screen: CheckedStack,
    navigationOptions:{
      tabBarIcon:()=><Icon size ={40} name={'check-square'} color={'gray'} type={'font-awesome'}/>
    },
  },
},
{
  tabBarOptions:{
    showIcon: true,
  },
});