import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Image } from 'react-native'

import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import VehiclesData from "../../data/VehiclesData";
import { FlatList } from "react-native-gesture-handler";

const heavyVehicles = VehiclesData.heavyVehicles
const mediumVehicles = VehiclesData.mediumVehicles
const lightVehicles = VehiclesData.lightVehicles

export default props => {

    const [selected, setSelected] = useState(null);

    return (
        <SafeAreaView style={styles.background}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Veículos pesados:</Text>
                    <FlatList
                        data={heavyVehicles}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: { id, name }, item }) => (
                            <TouchableOpacity
                                onPress={() => setSelected(item)}
                                style={styles.Section} >
                                <Icon name={id === selected?.id ? 'radio-button-on' : 'radio-button-off'} size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                                <Text style={styles.subtitle}>{name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Veículos médios:</Text>
                    <FlatList
                        data={mediumVehicles}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: { id, name }, item }) => (
                            <TouchableOpacity
                                onPress={() => setSelected(item)}
                                style={styles.Section} >
                                <Icon name={id === selected?.id ? 'radio-button-on' : 'radio-button-off'} size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                                <Text style={styles.subtitle}>{name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Veículos leves:</Text>
                    <FlatList
                        data={lightVehicles}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: { id, name }, item }) => (
                            <TouchableOpacity
                                onPress={() => setSelected(item)}
                                style={styles.Section} >
                                <Icon name={id === selected?.id ? 'radio-button-on' : 'radio-button-off'} size={25} color={commonStyles.colors.secondary} style={{ marginRight: 10 }} />
                                <Text style={styles.subtitle}>{name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <TouchableOpacity onPress={() => { props.navigation.navigate('ValidVehicles') }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </TouchableOpacity>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '90%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    Section: {
        flex: 2,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        height: 40,
        width: '95%',
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
        marginVertical: 5,
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
        fontSize: 20,
        marginHorizontal: 15,
        padding: 5,
        textAlign: 'left'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.subText,
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 10
    },
    formContainer: {
        flex: 3,
        backgroundColor: 'rgba(245, 245, 245,1)',
        padding: 5,
        margin: 5,
        height: 200,
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