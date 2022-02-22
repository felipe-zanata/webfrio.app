import React, { useState } from 'react';
import { Switch } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import commonStyles from '../commonStyles'

export default props => {

    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={{ flexDirection: 'row' }}>
                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                    />
                    <Text style={styles.texto}>Pgto à vista</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                    />
                    <Text style={styles.texto}>Pgto à vista</Text>

                </View>
            </View>
            <View style={styles.view2}>
                <View style={{ flexDirection: 'row' }}>
                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                    />
                    <Text style={styles.texto}>Pgto à vista</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Switch
                        color={commonStyles.colors.primary}
                        value={checked}
                        onValueChange={(value) => setChecked(value)}
                    />
                    <Text style={styles.texto}>Pgto à vista</Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
        backgroundColor: "#704949",
    },
    view1: {
        margin: 10,
        backgroundColor: "#464646",
    },
    view2: {
        margin: 10,
        backgroundColor: "#FFFF",
    },
    texto: {
        color: commonStyles.colors.mainText
    }
});
