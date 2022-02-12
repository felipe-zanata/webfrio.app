import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import useUser from '../../data/hooks/useUser'
import { TextInputMask } from 'react-native-masked-text'

import Logo from '../../../assets/imgs/WebFrio.png';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [password, setPassword] = useState('')

    const { createUser } = useUser()

    //validar
    const [hidePass, setHidePass] = useState(true)

    const Valid = () => {
        if (placa === 'AAA0000') {
            { props.navigation.navigate('Register') };
        } else {
            return login(placa, password, props)
        }
    }

    const validations = []

    validations.push(email.length >= 7 && cellphone.length >= 6)

    const validForm = validations.reduce((t) => t)

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={{ width: '100%', height: '100%', alignContent: 'center' }}>
                <Text style={styles.title}>Faça parte desta comunidade</Text>
                <Text style={styles.subtitle}>Informe seus dados</Text>
                <View style={styles.container}>
                    <View style={styles.Section}>
                        <Icon name='person-circle-outline' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        <TextInput placeholder='Digite seu nome'
                            style={[styles.input, styles.inputText]}
                            autoFocus={true} value={name} onChangeText={setName} />
                    </View>
                    <View style={styles.Section}>
                        <Icon name='mail-outline' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        <TextInput placeholder='Digite seu email'
                            style={[styles.input, styles.inputText]}
                            keyboardType='email-address'
                            value={email} onChangeText={setEmail} />
                    </View>
                    <View style={styles.Section}>
                        <Icon name='call-outline' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        <TextInputMask placeholder='Digite seu telefone'
                            type={'cel-phone'} options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
                            style={[styles.input, styles.inputText]} keyboardType='phone-pad'
                            value={cellphone} onChangeText={setCellphone} />
                    </View>
                   {/*  <View style={styles.Section}>
                        <Icon name='lock-closed' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        <TextInput placeholder='Sua senha'
                            style={[styles.input, styles.inputText]}
                            secureTextEntry={hidePass} value={password}
                            onChangeText={setPassword} />
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            <Icon name={hidePass ? 'eye' : 'eye-off'} size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Section}>
                        <Icon name='lock-closed' size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        <TextInput placeholder='Confirme sua senha'
                            style={[styles.input, styles.inputText]}
                            secureTextEntry={hidePass} value={password}
                            onChangeText={setPassword} />
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            <Icon name={hidePass ? 'eye' : 'eye-off'} size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View> */}
                    <TouchableOpacity onPress={() => props.navigation.navigate('TypeVehicles', { name, email, cellphone, password })/* createUser({ name, email, cellphone, password }) */}
                        style={[styles.button, (password.length >= 6 || validForm) ? {} : { backgroundColor: commonStyles.colors.disableBackground }]}
                        disabled={ validForm ? false : true}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
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