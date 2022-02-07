import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screens/Home'
import Indicator from './screens/Indicator'
import OfferList from './screens/OfferList';
import Rate from './screens/Rate'
import Profile from './screens/Profile'
import Direction from './screens/Direction'
import Login from './screens/Login'
import Localization from './screens/Localization'
import Register from './screens/signup/Register'
import NewUser from './screens/signup/NewUser'
import Details from './screens/Details';

import useUser from './data/hooks/useUser'
import commonStyles from './commonStyles';


const Tab = createBottomTabNavigator()
const SwitchStack = createStackNavigator()
const AuthStack = createStackNavigator()
const PermissionStack = createStackNavigator()

const routeIcon = {
    Home: 'Home',
    Indicator: 'Bar-chart',
    Offer: 'Cube',
    Rate: 'Happy',
    Offer: 'Cube',
    Profile: 'Profile',
}

export default props => {

    const { placa } = useUser()

    const granted = false
    
    const Permission = () => (
        <PermissionStack.Navigator initialRouteName="Localization" screenOptions={{ headerShown: false }}>
                    <PermissionStack.Screen name="AuthOrProfile" component={AuthOrProfile} />
                    <PermissionStack.Screen name="Localization" component={Localization} />
        </PermissionStack.Navigator>
    )

    const Auth = () => (
        <AuthStack.Navigator initialRouteName="Direction"
            screenOptions={{
                headerShown: false
            }}>
            <AuthStack.Screen name="Direction" component={Direction} />
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Localization" component={Localization} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="NewUser" component={NewUser} />
        </AuthStack.Navigator>
    )

    const AuthOrProfile = () => (
        <Tab.Navigator initialRouteName="Cube"
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                activeTintColor: commonStyles.colors.primary,
                inactiveTintColor: commonStyles.colors.subText,
                headerShown: false,
                //tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) =>
                    <Icon name={routeIcon[route.name]} size={size} color={color} />
            })}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Inicio' }} />
            <Tab.Screen name="Indicator" component={Indicator} options={{ tabBarLabel: 'Status' }} />
            <Tab.Screen name="Offer" component={OfferList} options={{ tabBarLabel: 'Fretes' }} />
            <Tab.Screen name="Rate" component={Rate} options={{ tabBarLabel: 'Avaliar' }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Perfil' }} />
        </Tab.Navigator>
    )
    return (
        <NavigationContainer>
            <SwitchStack.Navigator screenOptions={{ headerShown: false }}>
                {placa ?
                    <SwitchStack.Screen name="Permission" component={Permission} />
                    :
                    <SwitchStack.Screen name="Auth" component={Auth} />
                }
            </SwitchStack.Navigator>
        </NavigationContainer>
    )
}

