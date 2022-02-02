import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

export default props => 

    <View style={styles.container}>
         <Image source={props.Logo} style={styles.avatar} />
        <Text style={styles.nickname}>{props.nickname}</Text>
    </View>

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
})