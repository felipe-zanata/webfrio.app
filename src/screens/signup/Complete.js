import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';


import Logo from '../../../assets/imgs/WebFrio.png';
import Map from '../../../assets/imgs/map.png';
import commonStyles from '../../commonStyles';

export default props => {

    return (
        <SafeAreaView>
            <Image source={Logo} style={styles.logo} />
            <View>
                <Image source={Map}
                    style={styles.imagem} />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Text style={styles.title}>Ative sua localização para fechar mais cargas</Text>
                    <Text style={styles.subtitle}>Avisamos transportadoras e embarcadores quando motoristas estão mais perto das cargas, assim fica mais fácil para todos.</Text>
                </View>
                <TouchableOpacity onPress={
                    requestGeoPermission
                }
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Ativar localização</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => 
                    {props.navigation.navigate('AuthOrProfile')}}
                    style={[styles.button, { width: '70%', backgroundColor: "#FFF", borderColor: commonStyles.colors.primary, borderWidth: 1 }]}>
                    <Text style={{ color: commonStyles.colors.primary, fontSize: 20, fontFamily: commonStyles.fontFamily.regular }}>
                        Não, obrigado.</Text>
                </TouchableOpacity>
            </View>
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
    contrastText: layoutStyles.contrastText,
    inputText: layoutStyles.inputText,
    button: layoutStyles.button,
    buttonSecondary: layoutStyles.buttonSecondary,
    buttonText: layoutStyles.buttonText,
    buttonTextSecondary: layoutStyles.buttonTextSecondary,
    buttonHelp: layoutStyles.buttonHelp,
    icon: layoutStyles.icon
});
