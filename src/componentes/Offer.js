import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AddComment from './AddComment'
import Company from './Company'
import Comments from './Comments'
import commonStyles from '../commonStyles'

import useUser from '../data/hooks/useUser'

export default props => {

    const { placa } = useUser()

    return (
        <View style={{flex:1, flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.formContainer}>
                <Image source={props.logo}
                    style={styles.image} />
                <View >
                    <Text>Nome da empresa</Text>
                    <Text style={ styles.title }>{props.name}</Text>
                    <Text>Tipo de pagamento</Text>
                    <Text style={ styles.title }>{props.payment}</Text>
                    <Text>Preço</Text>
                    <Text style={ styles.title }>{props.price}</Text>
                </View>
                <View>
                    <Text>Origem</Text>
                    <Text style={ styles.title }>{props.origin}</Text>
                    <Text>Destino</Text>
                    <Text style={ styles.title }>{props.destination}</Text>
                    <Text>Kilometragem</Text>
                    <Text style={ styles.title }>{props.km}</Text>
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
        /*borderWidth: 1,
        borderColor: commonStyles.colors.subText,*/
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily.semiBold,
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
        fontSize: 20,
        marginTop: 15,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 5,
        margin: 5,
        height: 150,
        width: '95%',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        alignSelf: 'center',
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