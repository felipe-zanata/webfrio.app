import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import useUser from "../data/hooks/useUser"

import Logo from '../../assets/imgs/WebFrio.png';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    const [placa, setPlaca] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()

    const [hidePass, setHidePass] = useState(true)
    const [showNext, setShowNext] = useState(false)

    const Valid = () => {
        if (placa === 'AAA0000') {
            { props.navigation.navigate('Register', {"placa":placa.toLocaleUpperCase()}) };
        } else {
            return setShowNext(!showNext) // login(placa, password, props)
        }
    }

    const validations = []

    validations.push(placa && placa.length >= 7)
    validations.push(password && password.length >= 6)

    const validForm = validations.reduce((t, a) => t && a)

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={{ width: '100%', height: '100%', alignContent: 'center' }}>
                <Text style={styles.title}>{showNext ? 'Bem vindo de volta!' : 'Faça parte desta comunidade'}</Text>
                <Text style={styles.subtitle}>{!showNext ? 'Informe a placa do veículo' : 'Por favor, agora informe a senha referente à placa: '}
                    {showNext ?
                        <Text style={{ fontFamily: commonStyles.fontFamily.semiBold, color: commonStyles.colors.mainText }}>{placa.toLocaleUpperCase()}</Text>
                        : <></>}</Text>
                <View style={styles.container}>
                    <View style={styles.Section}>
                        <Icon name='car' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        <TextInput placeholder='Digite sua placa' maxLength={7}
                            style={[styles.input, styles.inputText]}
                            autoFocus={true} editable={!showNext} selectTextOnFocus={!showNext}
                            value={placa} onChangeText={setPlaca} />
                    </View>
                    {showNext ?
                        <View style={styles.Section}>
                            <Icon name='lock-closed' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                            <TextInput placeholder='Sua senha'
                                style={[styles.input, styles.inputText]}
                                secureTextEntry={hidePass} value={password}
                                onChangeText={setPassword} />
                            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                                {hidePass ?
                                    <Icon name='eye' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                                    : <Icon name='eye-off' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                                }
                            </TouchableOpacity>
                        </View>
                        : <></>
                    }
                    <TouchableOpacity onPress={() => showNext ? login(placa, password, props) : Valid()}
                        style={[styles.button, ((placa.length >= 7 && !showNext) || validForm) ? {} : { backgroundColor: commonStyles.colors.disableBackground }]}
                        disabled={((!showNext && placa.length >= 7) || validForm) ? false : true}>
                        <Text style={styles.buttonText}>{showNext ? 'Entrar' : 'Próximo'}</Text>
                    </TouchableOpacity>
                    {showNext ?
                        <TouchableOpacity onPress={() => { }/* Esqueci minha senha */}
                            style={[styles.button, { width: '70%', backgroundColor: "#FFF", borderColor: commonStyles.colors.primary, borderWidth: 1 }]}>
                            <Text style={{ color: commonStyles.colors.subText, fontSize: 20, fontFamily: commonStyles.fontFamily.regular }}>
                                Esqueci minha senha</Text>
                        </TouchableOpacity>
                        : <></>
                    }
                    {showNext ?
                        <TouchableOpacity onPress={() => setShowNext(!showNext)}
                            style={[styles.button, { backgroundColor: null, marginTop: 2 }]}>
                            <Text style={{ color: commonStyles.colors.primary, fontSize: 20, fontFamily: commonStyles.fontFamily.regular }}>
                                Não reconheço o cadastro</Text>
                        </TouchableOpacity>
                        : <></>
                    }
                </View>
                {/* <TouchableOpacity onPress={() => login('FBB9470', 1234567) }>
                            <Text style={[styles.subtitle, {fontSize: 15, textAlign: 'left', marginTop: 0}]}>Entra direto</Text>
                 </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    Section: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        height: 60,
        width: '90%',
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    logo: {
        position: 'relative',
        alignSelf: 'center',
        marginTop: 20,
        height: 100,
        width: '80%',
        resizeMode: 'stretch',
    },
    title: {
        fontFamily: commonStyles.fontFamily.bold,
        color: commonStyles.colors.mainText,
        fontSize: 25,
        marginTop: 30,
        marginHorizontal: 15,
        padding: 10,
        alignItems: 'center',
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(245, 245, 245,1)',
        padding: 5,
        margin: 10,
        height: 150,
        width: '90%',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        alignSelf: 'center',
    },
    input: {
        flex: 1,
        flexGrow: 1,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        textAlign: 'left',
    },
    button: {
        backgroundColor: commonStyles.colors.enableBackground,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7,
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily.bold,
        color: "#FFF",
        fontSize: 20
    }
});