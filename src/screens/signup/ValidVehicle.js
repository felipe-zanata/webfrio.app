import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import Logo from '../../../assets/imgs/WebFrio.png';
import layoutStyles from "../../layoutStyles";

export default props => {

    const [rntrc, setRntrc] = useState('')

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Informe o RNTRC do veículo</Text>
                <Text style={styles.subtitle}>Esta informação é solicitada para comprovar que seu veículo é autorizado pela ANTT a transportar cargas</Text>
                <View style={styles.section}>
                    <TextInput placeholder='Número do RNTRC (ANTT)' maxLength={10}
                        style={styles.inputText}
                        autoFocus={true} keyboardType='number-pad'
                        value={rntrc} onChangeText={setRntrc} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.contrastText}>{`RNTRC vinculado á placa do cavalo,\n não da carroceria.`}</Text>
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
    background: layoutStyles.background,
    scrollView: layoutStyles.scrollView,
    logo: layoutStyles.logo,
    section: layoutStyles.section,
    title: layoutStyles.title,
    subtitle: layoutStyles.subtitle,
    contrastText: [layoutStyles.contrastText, {fontSize: 15, width: '80%', alignSelf: 'center', marginTop: 5}],
    inputText: [layoutStyles.inputText, { textAlign: 'center'}],
    button: layoutStyles.button,
    buttonText: layoutStyles.buttonText,
    icon: layoutStyles.icon,
});