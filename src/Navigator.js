import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screens/tab/Home'
import Indicator from './screens/tab/Indicator'
import OfferList from './screens/OfferList'
import Rate from './screens/tab/Rate'
import Profile from './screens/tab/Profile'
import Details from './screens/Details'
import Direction from './screens/Direction'
import Login from './screens/Login'
import Localization from './screens/Localization'
import Register from './screens/signup/Register'
import NewUser from './screens/signup/NewUser'
import TypeVehicles from './screens/signup/TypeVehicles'
import ValidVehicles from './screens/signup/ValidVehicle'
import Bodywork from './screens/signup/Bodywork'
import Tracker from './screens/signup/Tracker'
import PicDoc from './screens/signup/PicDoc'
import ValidPass from './screens/signup/ValidPass'
import Complete from './screens/signup/Complete'

import useUser from './data/hooks/useUser'
import commonStyles from './commonStyles';
import CreateError from './screens/signup/CreateError'


const Tab = createBottomTabNavigator()
const SwitchStack = createStackNavigator()
const AuthStack = createStackNavigator()
const PermissionStack = createStackNavigator()

const routeIcon = {
    Home: 'home',
    Indicator: 'bar-chart',
    Offer: 'cube',
    Rate: 'happy',
    Profile: 'person',
}

export default props => {

    const { placa } = useUser()

    const granted = false

    const Permission = () => (
        <PermissionStack.Navigator initialRouteName="Localization" screenOptions={{ headerShown: false }}>
            <PermissionStack.Screen name="HomeTab" component={HomeTab} />
            <PermissionStack.Screen name="Localization" component={Localization} />
        </PermissionStack.Navigator>
    )

    const Auth = () => (
        <AuthStack.Navigator initialRouteName="Direction"
            screenOptions={{
                headerShown: true
            }}>
            <AuthStack.Screen name="Direction" component={Direction} options={{ headerShown: false }} />
            <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false, title: 'Tela de cadastro' }} />
            <AuthStack.Screen name="NewUser" component={NewUser} options={{ title: 'Novo usuário' }} />
            <AuthStack.Screen name="TypeVehicles" component={TypeVehicles} options={{ title: 'Tipo de Veículo' }} />
            <AuthStack.Screen name="ValidVehicles" component={ValidVehicles} options={{ title: 'Rntrc Carro' }} />
            <AuthStack.Screen name="Bodywork" component={Bodywork} options={{ title: 'Tipo de carroceria' }} />
            <AuthStack.Screen name="Tracker" component={Tracker} options={{ title: 'Tem rastreador?' }} />
            <AuthStack.Screen name="PicDoc" component={PicDoc} options={{ title: 'Foto da CNH' }} />
            <AuthStack.Screen name="ValidPass" component={ValidPass} options={{ title: 'Criar Senha' }} />
            <AuthStack.Screen name="Complete" component={Complete} options={{ title: 'Cadastro Concluído', headerShown: false}} />
            <AuthStack.Screen name="CreateError" component={CreateError} options={{ title: 'Erro',headerShown: false }} />
            <AuthStack.Screen name="Permission" component={Permission} options={{ headerShown: false }}/>
        </AuthStack.Navigator>
    )

    const HomeTab = () => (
        <Tab.Navigator initialRouteName="Offer"
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

