import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import Logo from '../../assets/imgs/WebFrio.png';
import Driver from '../../assets/imgs/shipment.png';
import Communication from '../../assets/imgs/communication.png';
import commonStyles from '../commonStyles';

export default props => {
    return (
        <SafeAreaView>
            <Image source={Logo} style={styles.logo} />
                <View>
                    <Text style={styles.title}>Seja bem vindo,{"\n"}vamos começar? </Text>
                    <Text style={styles.subtitle}>Selecione abaixo,{"\n"}a opção na qual esta buscando.</Text>
                    <TouchableOpacity 
                        onPress={() => { props.navigation.navigate('Login') }} 
                        style={styles.formContainer}>
                        <Image  source={Driver}
                         style={styles.imagem}/>
                        <View style={{width: '70%'}}>
                            <Text style={[styles.title, {fontSize: 20, fontWeight: 'bold', textAlign: 'left',  marginTop: 0}]}>Tenho caminhão e quero cargas</Text>
                            <Text style={[styles.subtitle, {fontSize: 15, textAlign: 'left', marginTop: 0}]}>Aqui caminhoneiros encontram as melhores opções de fretes em todo o Brasil.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { /* Link Site ou Whats */ }} 
                        style={styles.formContainer}>
                        <Image  source={Communication}
                         style={styles.imagem}/>
                        <View style={{width: '70%'}}>
                            <Text style={[styles.title, {fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginTop: 0}]}>Quero anunciar minhas cargas</Text>
                            <Text style={[styles.subtitle, {fontSize: 15, textAlign: 'left', marginTop: 0}]}>Opção para transportadoras que buscam publicar suas cargas e encontrar caminhoneiros de forma rápida e segura.</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        position: 'relative',
        alignSelf: 'center',
        marginTop: 20,
        height: 100,
        width: '80%',
        resizeMode: 'stretch',
    },
    imagem: {
        width: 90, 
        height: 90, 
        resizeMode: 'cover', 
        /*borderWidth: 1,
        borderColor: commonStyles.colors.subText,*/
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily.bold,
        color: commonStyles.colors.mainText,
        fontSize: 25,
        marginTop: 30,
        alignItems: 'center',
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        marginTop: 15,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(245, 245, 245,1)',
        padding: 5,
        margin: 10,
        height: 150,
        width: '95%',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        alignSelf: 'center',
    },
    input: {
        marginTop: 15,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: 'rgb(66, 66, 66,0.8)',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily.bold,
        color: commonStyles.colors.secondary,
        fontSize: 20
    }
});