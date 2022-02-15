import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import Logo from '../../../assets/imgs/WebFrio.png';
import ErrorLogin from '../../../assets/imgs/error.png';
import layoutStyles from "../../layoutStyles";

export default props => {

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <Image source={ErrorLogin}
                style={styles.imagem} />
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <Text style={styles.title}>Ops.. algo não ocorreu bem!</Text>
                <Text style={styles.subtitle}>Vamos confirmar seu cadastro assim que possível.</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Direction')}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Está certo!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    background: layoutStyles.background,
    scrollView: layoutStyles.scrollView,
    logo: layoutStyles.logo,
    formContainer: layoutStyles.formContainer,
    section: layoutStyles.section,
    title: layoutStyles.title,
    subtitle: layoutStyles.subtitle,
    inputText: layoutStyles.inputText,
    button: layoutStyles.button,
    buttonText: layoutStyles.buttonText,
    imagem: {
        marginTop: 50,
        width: '70%',
        height: 170,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
});
