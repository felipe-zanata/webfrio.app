import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import useUser from "../data/hooks/useUser"

import Logo from '../../assets/imgs/WebFrio.png';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import layoutStyles from "../layoutStyles";

export default props => {

    const [placa, setPlaca] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()

    const [hidePass, setHidePass] = useState(true)
    const [showNext, setShowNext] = useState(false)

    const ValidPlaca = () => {
        if (placa === 'AAA0000') {
            { props.navigation.navigate('Register', { "placa": placa.toLocaleUpperCase() }) };
        } else {
            return setShowNext(!showNext) // login(placa, password, props)
        }
    }

    const validations = []

    validations.push(placa && placa.length >= 7)
    validations.push(password && password.length >= 8)

    const validForm = validations.reduce((t, a) => t && a)

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{showNext ? 'Bem vindo de volta!' : 'Faça parte desta comunidade'}</Text>
                <Text style={styles.subtitle}>{!showNext ? 'Informe a placa do veículo' : 'Por favor, agora informe a senha referente à placa: '}
                    {showNext ? <Text style={styles.contrastText}>{placa.toLocaleUpperCase()}</Text> : <></>}
                </Text>
                <View style={styles.section}>
                    <Icon name='car' size={25} style={styles.icon} />
                    <TextInput placeholder='Digite sua placa' maxLength={7}
                        style={[styles.input, styles.inputText]} autoFocus={true}
                        editable={!showNext} selectTextOnFocus={!showNext}
                        value={placa} onChangeText={setPlaca} />
                </View>
                {showNext ?
                    <View style={styles.section}>
                        <Icon name='lock-closed' size={25} style={styles.icon} />
                        <TextInput placeholder='Sua senha'
                            style={styles.inputText} secureTextEntry={hidePass} value={password}
                            onChangeText={setPassword} />
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            <Icon name={hidePass ? 'eye' : 'eye-off'} size={25} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    : <></>
                }
                <TouchableOpacity onPress={() => showNext ? login(placa, password, props) : Valid()}
                    style={[styles.button, ((placa.length >= 8 && !showNext) || validForm) ? {} : { backgroundColor: commonStyles.colors.disableBackground }]}
                    disabled={((!showNext && placa.length >= 8) || validForm) ? false : true}>
                    <Text style={styles.buttonText}>{showNext ? 'Entrar' : 'Próximo'}</Text>
                </TouchableOpacity>
                {showNext ?
                    <>
                        <TouchableOpacity onPress={() => { }/* Esqueci minha senha */}
                            style={styles.buttonSecondary}>
                            <Text style={styles.buttonTextSecondary}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowNext(!showNext)} >
                            <Text style={styles.buttonHelp}>Não reconheço o cadastro</Text>
                        </TouchableOpacity>
                    </>
                    : <></>
                }
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: layoutStyles.background,
    scrollView: layoutStyles.scrollView,
    logo: layoutStyles.logo,
    formContainer: layoutStyles.formContainer,
    section: layoutStyles.section,
    title: layoutStyles.title,
    subtitle: layoutStyles.subtitle,
    contrastText: layoutStyles.contrastText,
    inputText: layoutStyles.inputText,
    button: layoutStyles.button,
    buttonSecondary: layoutStyles.buttonSecondary,
    buttonText: layoutStyles.buttonText,
    buttonTextSecondary: layoutStyles.buttonTextSecondary,
    buttonHelp: layoutStyles.buttonHelp,
    icon: layoutStyles.icon
});