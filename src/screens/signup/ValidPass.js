import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'
import useUser from "../../data/hooks/useUser"
import Logo from '../../../assets/imgs/WebFrio.png'
import commonStyles from '../../commonStyles'
import layoutStyles from '../../layoutStyles'
import Icon from 'react-native-vector-icons/Ionicons'

export default props => {

    const [password, setPassword] = useState('')
    const [acceptTerm, setAcceptTerm] = useState(false)
    const [acceptPolitic, setAcceptPolitic] = useState(false)

    const { createUser } = useUser()

    const [hidePass, setHidePass] = useState(true)

    const propsData = props.route.params

    const addUserData = () => {
        const userData = { ...propsData, "senha": password }
        createUser(userData, props)
    }

    const validations = []

    validations.push(password && password.length >= 8)
    validations.push(acceptTerm && acceptPolitic)

    const validForm = validations.reduce((t, a) => t && a)

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Cadastrar sua senha</Text>
                <Text style={styles.subtitle}>A Senha deve conter ao menos 8 caracteres</Text>
                <View style={styles.section}>
                    <Icon name='lock-closed' size={25} style={styles.icon} />
                    <TextInput placeholder='Sua senha'
                        style={styles.inputText}
                        secureTextEntry={hidePass} value={password}
                        onChangeText={setPassword} />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        <Icon name={hidePass ? 'eye' : 'eye-off'} size={25} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.section, { marginBottom: 20 }]}>
                    <Icon name='lock-closed' size={25} style={styles.icon} />
                    <TextInput placeholder='Confirme sua senha'
                        style={styles.inputText}
                        secureTextEntry={hidePass} value={password}
                        onChangeText={setPassword} />
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        <Icon name={hidePass ? 'eye' : 'eye-off'} size={25} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.terms} onPress={() => setAcceptTerm(!acceptTerm)}>
                    <Icon name={acceptTerm ? 'checkbox-outline' : 'square-outline'} size={25} style={styles.icon} />
                    <Text style={styles.subtitle}> {`Eu li e concordo com\n os`}
                        <Text style={styles.buttonHelp}> Termos de uso.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.terms} onPress={() => setAcceptPolitic(!acceptPolitic)}>
                    <Icon name={acceptPolitic ? 'checkbox-outline' : 'square-outline'} size={25} style={styles.icon} />
                    <Text style={styles.subtitle}> {`Aceito as condições descritas\n na`}
                        <Text style={styles.buttonHelp}> Política de Privacidade.</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => addUserData()}
                    style={[styles.button, validForm ? {} : { backgroundColor: commonStyles.colors.disableBackground }]}
                    disabled={validForm ? false : true}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
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
    icon: layoutStyles.icon,
    terms: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'flex-start'
    }
});