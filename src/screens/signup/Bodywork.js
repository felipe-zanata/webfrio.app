import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'

import layoutStyles from "../../layoutStyles";
import Logo from '../../../assets/imgs/WebFrio.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Bodywork from "../../data/BodyworkData";
import { FlatList } from "react-native-gesture-handler";

const OpenBodywork = Bodywork.OpenBodywork
const closeBodywork = Bodywork.closeBodywork

export default props => {

    const [selected, setSelected] = useState(null);

    const propsData = props.route.params

    const addUserData = () => {
        const userData = { ...propsData, "tipo_carroceria": selected?.name, "tipo_carroceria_id": selected?.id }
        props.navigation.navigate('Tracker', userData)
    }

    const titleList = (name) => {
        switch (name) {
            case 'cb':
                typeVehicles = 'fechada:'
                break;
            case 'op':
                typeVehicles = 'aberta:'
                break;
        }
        return <Text style={styles.title}>Carroceria {typeVehicles}</Text>
    }

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.scrollView}>
                <FlatList
                    ListHeaderComponent={titleList('cb')}
                    data={closeBodywork}
                    keyExtractor={(item) => item.id}
                    style={styles.sectionForm}
                    renderItem={({ item: { id, name }, item }) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item)}
                            style={styles.section} >
                            <Icon name={id === selected?.id ? 'radio-button-on' : 'radio-button-off'} size={25} style={styles.icon} />
                            <Text style={styles.subtitle}>{name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <FlatList
                    ListHeaderComponent={titleList('ob')}
                    data={OpenBodywork}
                    keyExtractor={(item) => item.id}
                    style={styles.sectionForm}
                    renderItem={({ item: { id, name }, item }) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item)}
                            style={styles.section} >
                            <Icon name={id === selected?.id ? 'radio-button-on' : 'radio-button-off'} size={25} style={styles.icon} />
                            <Text style={styles.subtitle}>{name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity onPress={() => addUserData()}
                style={styles.button}>
                <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: layoutStyles.background,
    scrollView: layoutStyles.scrollView,
    logo: [layoutStyles.logo, { marginBottom: 50 }],
    title: [layoutStyles.title, { fontSize: 18, marginTop: 0, textAlign: 'left', padding: 5, }],
    subtitle: [layoutStyles.subtitle, { fontSize: 15, textAlign: 'left', paddingTop: 5 }],
    contrastText: layoutStyles.contrastText,
    button: [layoutStyles.button, { marginBottom: 5, marginTop: 5 }],
    buttonText: layoutStyles.buttonText,
    icon: layoutStyles.icon,
    sectionForm: layoutStyles.sectionForm,
    section: [layoutStyles.section, { height: 40, marginTop: 0, margin: 4 }],
});