import React, { useState } from 'react';
import { Switch } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import commonStyles from '../commonStyles'
import layoutStyles from '../layoutStyles';
import { Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Sliders from './FilterComponents/Sliders';
import CheckItems from './FilterComponents/CheckItems';

export default props => {

    const [checked, setChecked] = useState(false)
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible)
    }

    return (
        <View style={styles.formContainer}>
            <View>
                <View style={styles.filter}>
                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                    />
                    <Text style={styles.subtitle}>Pgto à vista</Text>
                </View>
                <View style={styles.filter}>

                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked1}
                        onValueChange={(value) => setChecked1(value)}
                    />
                    <Text style={styles.subtitle}>20km Origem</Text>
                </View>
            </View>
            <View>

                <View style={styles.filter}>
                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked2}
                        onValueChange={(value) => setChecked2(value)}
                    />
                    <Text style={styles.subtitle}>+3 Viagens</Text>
                </View>
                <TouchableOpacity onPress={() => toggleOverlay()} style={styles.filter} >
                    <Icon name="filter" size={25} color={commonStyles.colors.icon} style={styles.icon} />
                    <Text style={styles.subtitle}>Filtros {2} </Text>
                </TouchableOpacity>
            </View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Sliders />
                <CheckItems />
                <TouchableOpacity onPress={() => toggleOverlay()} style={styles.filter}>
                    <Text style={styles.subtitle}> Aplicar Filtro </Text>
                    <Icon name="checkmark-circle" size={25} color={commonStyles.colors.icon} style={styles.icon} />
                </TouchableOpacity>
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: commonStyles.colors.backgroundForm,
        alignSelf: 'center',
        padding: 5,
        width: '100%',
        shadowRadius: 2,
        shadowColor: commonStyles.colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    filter: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: [layoutStyles.subtitle, { marginBottom: 0, fontSize: 18 }],
    icon: layoutStyles.icon
})
