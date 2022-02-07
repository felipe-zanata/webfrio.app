import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import useUser from "../../data/hooks/useUser"

import Logo from '../../../assets/imgs/WebFrio.png';
import commonStyles from '../../commonStyles';

export default props => {

    const { placa } = props.route.params

    const greetingMessage = () => {
        let h = new Date().getHours().toLocaleTimeString('pt-br');
        switch (true) {
            case h <= 5: return 'Boa madrugada';
            case h < 12: return 'Bom dia';
            case h < 18: return 'Boa tarde';
            default: return 'Boa noite';
        }
    }

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={{ width: '100%', height: '100%', alignContent: 'center' }}>
                <Text style={styles.title}>{greetingMessage()}, é um prazer ter você aqui.</Text>
                <Text style={styles.subtitle}>Sua placa
                    <Text style={{ fontFamily: commonStyles.fontFamily.semiBold, color: commonStyles.colors.mainText }}> {placa} </Text>
                    ainda não foi cadastrada.
                </Text>
                <Text style={styles.subtitle}>
                    Para cadastrar são apenas alguns passos, vamos inciar?
                </Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('NewUser') }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar veículo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}
                        style={[styles.button, { backgroundColor: null, marginTop: 2 }]}>
                        <Text style={{ color: commonStyles.colors.primary, fontSize: 20, fontFamily: commonStyles.fontFamily.regular }}>
                            A Placa está incorreta? Clique aqui</Text>
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