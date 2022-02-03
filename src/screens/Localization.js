import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, PermissionsAndroid  } from 'react-native';
import React from 'react';

import Logo from '../../assets/imgs/WebFrio.png';
import Map from '../../assets/imgs/map.png';
import commonStyles from '../commonStyles';

export default props => {

    //const [alreadyGranted, setGranted] = useState(false)

    const requestGeoPermission = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            alert('Acesso concedido');
        }
    };

    
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
                <TouchableOpacity onPress={() => {
                    requestGeoPermission
                   // props.navigation.navigate('AuthOrProfile')
                }}
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
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    imagem: {
        margin: 30,
        width: '70%', 
        height: 170,
        resizeMode: 'contain',  
        alignSelf: 'center'
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
        marginTop: 10,
        marginHorizontal: 10,
        padding: 5,
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: commonStyles.colors.enableBackground,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7,
        width: '80%',
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily.bold,
        color: "#FFF",
        fontSize: 20
    }
});