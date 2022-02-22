import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native'

import layoutStyles from "../../layoutStyles";
import Logo from '../../../assets/imgs/WebFrio.png';

import Icon from 'react-native-vector-icons/Ionicons';
import VehiclesData from "../../data/VehiclesData";
import { FlatList } from "react-native-gesture-handler";

const heavyVehicles = VehiclesData.heavyVehicles
const mediumVehicles = VehiclesData.mediumVehicles
const lightVehicles = VehiclesData.lightVehicles

export default props => {

    const [selected, setSelected] = useState(null);

    const propsData = props.route.params

    const addUserData = () => {
        const userData = { ...propsData, "tipo_veiculo_nome": selected?.name, "tipo_veiculo": selected?.id }
        props.navigation.navigate('ValidVehicles', userData)
    }

    const titleList = (name) => {
        switch (name) {
            case 'hv':
                typeVehicles = 'pesados:'
                break;
            case 'mv':
                typeVehicles = 'médios:'
                break;
            case 'lv':
                typeVehicles = 'leves:'
                break;
        }
        return <Text style={styles.title}>Veículos {typeVehicles}</Text>
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.scrollView}>
                <FlatList
                    ListHeaderComponent={titleList('hv')}
                    data={heavyVehicles}
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
                    ListHeaderComponent={titleList('mv')}
                    data={mediumVehicles}
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
                    ListHeaderComponent={titleList('lv')}
                    data={lightVehicles}
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
    scrollView: [layoutStyles.scrollView, { flex: 1 }],
    logo: layoutStyles.logo,
    title: [layoutStyles.title, { fontSize: 18, marginTop: 0, textAlign: 'left', padding: 5, }],
    subtitle: [layoutStyles.subtitle, { fontSize: 15, textAlign: 'left', paddingTop: 5 }],
    contrastText: layoutStyles.contrastText,
    button: [layoutStyles.button, { marginBottom: 5, marginTop: 5 }],
    buttonText: layoutStyles.buttonText,
    icon: layoutStyles.icon,
    sectionForm: layoutStyles.sectionForm,
    section: [layoutStyles.section, { height: 40, marginTop: 0, margin: 4 }],
});