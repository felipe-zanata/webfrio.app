import React, { useState, use } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import Logo from '../../../assets/imgs/WebFrio.png';
import commonStyles from '../../commonStyles';
import layoutStyles from '../../layoutStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cellphone, setCellphone] = useState('')

    const propsData = props.route.params
    
    const addUserData = () => {
        const userData = { ...propsData, "nome": name, "email": email, "celular": cellphone }
        props.navigation.navigate('TypeVehicles', userData)
    }

    const validations = []

    validations.push(email.length >= 7 && cellphone.length >= 6)

    const validForm = validations.reduce((t) => t)

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Faça parte desta comunidade</Text>
                <Text style={styles.subtitle}>Informe seus dados</Text>
                <View style={styles.section}>
                    <Icon name='person-circle-outline' size={25} style={styles.icon} />
                    <TextInput placeholder='Digite seu nome' autoFocus={true}
                        style={styles.inputText}
                        value={name} onChangeText={setName} />
                </View>
                <View style={styles.section}>
                    <Icon name='mail-outline' size={25} style={styles.icon} />
                    <TextInput placeholder='Digite seu email' keyboardType='email-address'
                        style={styles.inputText}
                        value={email} onChangeText={setEmail} />
                </View>
                <View style={styles.section}>
                    <Icon name='call-outline' size={25} style={styles.icon} />
                    <TextInputMask placeholder='Digite seu telefone' keyboardType='number-pad'
                        type={'cel-phone'} options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
                        style={styles.inputText}
                        value={cellphone} onChangeText={setCellphone} />
                </View>
                <TouchableOpacity onPress={() => addUserData()}
                    style={[styles.button, (validForm) ? {} : { backgroundColor: commonStyles.colors.disableBackground }]}
                    disabled={validForm ? false : true}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
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
    inputText: layoutStyles.inputText,
    button: layoutStyles.button,
    buttonText: layoutStyles.buttonText,
    icon: layoutStyles.icon
});