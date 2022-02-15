import React, { useEffect, useState } from "react"
import { Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import Logo from '../../../assets/imgs/WebFrio.png';
import layoutStyles from "../../layoutStyles";

export default props => {

    const { placa } = props.route.params

    initialState = {}

    const [userData, setUserData] = useState(initialState);
    
    useEffect(() => {
        setUserData({ ...userData, "placa": placa })
    },[])
    
    const greetingMessage = () => {
        let h = new Date().getHours();
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
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{greetingMessage()}, é um prazer ter você aqui.</Text>
                <Text style={styles.subtitle}>
                    Sua placa
                    <Text style={styles.contrastText}> {placa} </Text>
                    ainda não foi cadastrada.
                </Text>
                <Text style={styles.subtitle}>
                    {`Para cadastrar são apenas \n alguns passos, vamos inciar?`}
                </Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate('NewUser', userData) }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar veículo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}>
                    <Text style={[styles.subtitle, { marginTop: 10 }]}> A Placa está incorreta?
                        <Text style={styles.buttonHelp}> Clique aqui </Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: layoutStyles.background,
    scrollView: layoutStyles.scrollView,
    logo: layoutStyles.logo,
    title: layoutStyles.title,
    subtitle: layoutStyles.subtitle,
    contrastText: layoutStyles.contrastText,
    button: layoutStyles.button,
    buttonText: layoutStyles.buttonText,
    buttonHelp: layoutStyles.buttonHelp,
});