import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import commonStyles from '../commonStyles'

export default props => {

    return (
        <View style={styles.formContainer}>
            <TouchableOpacity style={styles.section} onPress={() => { }} >
                <Icon name={props.icon} size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                <Text style={styles.subtitle}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        //justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        height: 15,
        width: '95%',
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        marginVertical: 10,
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
        padding: 5,
        textAlign: 'left'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 20,
        textAlign: 'left',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(245, 245, 245,1)',
        padding: 5,
        margin: 10,
        height: 400,
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
        textAlign: 'left',
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