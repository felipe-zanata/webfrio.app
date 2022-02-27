import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Divider } from 'react-native-elements'
import commonStyles from '../commonStyles'

export default props => {

    return (
        <View style={{ paddingHorizontal: 10 }}>
            <TouchableOpacity
                onPress={() => { }}
                style={styles.formContainer}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.subtitle}>Origem: <Text style={styles.title}>{props.origin}</Text></Text>
                        <Text style={styles.subtitle}>Destino: <Text style={styles.title}>{props.destination}</Text></Text>
                        <Text style={styles.subtitle}>Distancia: <Text style={styles.title}>{props.km}</Text></Text>
                        <Text style={styles.subtitle}>Tipo de pagamento: <Text style={styles.title}>{props.payment}</Text></Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', marginLeft: 10 }}>
                        <Image source={props.logo}
                            style={styles.image} />
                        <Text style={styles.subtitle}>Preço: <Text style={styles.title}>{props.price}</Text></Text>
                    </View>
                </View>
                <Divider />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.subtitle}>Há 2 dias</Text>
                    <Text style={styles.subtitle}>+Detalhes</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily.bold,
        color: commonStyles.colors.mainText,
        margin: 1,
        marginLeft: 5,
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'left'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 15,
        margin: 3,
    },
    formContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        width: Dimensions.get('window').width * 0.95,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
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
