import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import Logo from '../../assets/imgs/WebFrio.png';
import Driver from '../../assets/imgs/shipment.png';
import Communication from '../../assets/imgs/communication.png';
import layoutStyles from "../layoutStyles";

export default props => {
    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
                    <Text style={styles.title}>Seja bem vindo,{"\n"}vamos começar? </Text>
                    <Text style={styles.subtitle}>Selecione abaixo,{"\n"}a opção na qual esta buscando.</Text>
                    <TouchableOpacity 
                        onPress={() => { props.navigation.navigate('Login') }} 
                        style={styles.formContainer}>
                        <Image  source={Driver}
                         style={styles.imagem}/>
                        <View style={{width: '70%'}}>
                            <Text style={[styles.title, {flexGrow: 1, fontSize: 20, textAlign: 'left', padding: 0, marginTop: 0, marginHorizontal: 0}]}>
                                Tenho caminhão e {"\n"}quero cargas</Text>
                            <Text style={[styles.subtitle, {flexGrow: 1, fontSize: 15, paddingRight: 10, textAlign: 'left', marginBottom: 0}]}>
                                Aqui caminhoneiros encontram as melhores opções de fretes em todo o Brasil.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { /* Link Site ou Whats */ }} 
                        style={styles.formContainer}>
                        <Image  source={Communication}
                         style={styles.imagem}/>
                        <View style={{width: '70%'}}>
                            <Text style={[styles.title, {flexGrow: 1, fontSize: 20, textAlign: 'left', padding: 0, marginTop: 0, marginHorizontal: 0}]}>
                                Quero anunciar {"\n"}minhas cargas</Text>
                            <Text style={[styles.subtitle, {flexGrow: 1, fontSize: 15, textAlign: 'left', paddingRight: 10, marginBottom: 0}]}>
                                Publicar suas cargas e encontrar caminhoneiros de forma rápida e segura.</Text>
                        </View>
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
    imagem: {
        width: 90, 
        height: 90, 
        resizeMode: 'cover', 
        marginHorizontal: 15,
        alignSelf: 'center'
    },
});