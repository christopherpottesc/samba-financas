import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import Dashboard from '../screens/Dashboard';
import EsqueciSenha from '../screens/EsqueciSenha';
import Receita from '../screens/Receitas';
import Ajuda from '../screens/Help';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const CadastroStack = createStackNavigator({
  Cadastro: CadastroScreen,
});

CadastroStack.navigationOptions = {
  tabBarLabel: 'Cadastro',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const DashboardStack = createStackNavigator({
  Dashboard: Dashboard,
});

DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const EsqueciSenhaStack = createStackNavigator({
  EsqueciSenha: EsqueciSenha,
});

EsqueciSenhaStack.navigationOptions = {
  tabBarLabel: 'EsqueciSenha',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ReceitaStack = createStackNavigator({
  Receita: Receita,
});

ReceitaStack.navigationOptions = {
  tabBarLabel: 'Receitas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const HelpStack = createStackNavigator({
  Ajuda: Ajuda,
});

HelpStack.navigationOptions = {
  tabBarLabel: 'Ajuda',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LoginStack,
  CadastroStack,
  EsqueciSenhaStack,
  DashboardStack,
  ReceitaStack, 
  HelpStack
});