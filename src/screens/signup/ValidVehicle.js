import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import Logo from '../../../assets/imgs/WebFrio.png';
import commonStyles from '../../commonStyles';

export default props => {

    const [rntrc, setRntrc] = useState('')

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={{ width: '100%', height: '100%', alignContent: 'center' }}>
                <Text style={styles.title}>Informe o RNTRC do veículo</Text>
                <Text style={styles.subtitle}>Esta informação é solicitada para comprovar que seu veículo é autorizado pela ANTT a transportar cargas</Text>
                <View style={styles.Section}>
                    <TextInput placeholder='Número do RNTRC (ANTT)' maxLength={10}
                        style={[styles.input, styles.inputText]}
                        autoFocus={true} keyboardType='number-pad'
                        value={rntrc} onChangeText={setRntrc} />
                </View>
                <View style={styles.container}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', width: '70%', color: commonStyles.colors.primary, fontSize: 20, fontFamily: commonStyles.fontFamily.regular }}>
                        RNTRC vinculado á placa do cavalo, não da carroceria.</Text>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Bodywork') }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar veículo</Text>
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
        textAlign: 'center',
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