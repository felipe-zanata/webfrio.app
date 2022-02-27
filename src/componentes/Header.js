import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Truck from '../../assets/imgs/refrigerator.png'
import NoStar from '../../assets/imgs/no-star.png'
import Star from '../../assets/imgs/star.png'

import useUser from '../data/hooks/useUser'
import commonStyles from '../commonStyles'

export default props => {

    const { name, placa } = useUser()

    const [score, setScore] = useState(0)

    const scoreMath = Math.floor(Math.random() * (5 - 1 + 1) + 1)

    useEffect(() => {
        setScore(scoreMath)
    }, [])

    const getImagem = (i) => {
        if (i < score) {
            return Star
        }
        return NoStar
    }

    const RenderStars = () => {
        const starList = []

        for (let i = 0; i < 5; i++) {
            starList.push(
                <Image key={i} source={getImagem(i)} style={styles.image} />
            )
        }
        return starList
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.userContainer}>
                <Image source={Truck} style={styles.imageLogo} />
                <Text style={styles.user}>Fretes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userContainer}>
                <Image source={Truck} style={styles.imageLogo} />
                <Text style={styles.user}>Agregamento</Text>
            </TouchableOpacity>
            <View style={styles.userContainer}>
                <Text style={styles.user}>{'Felipe' + ' - ' + 'FBB-9470'}</Text>
                <View style={styles.rowContainer}>
                    <RenderStars />
                    <Text style={styles.user}>{score}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: commonStyles.colors.subText,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    imageLogo: {
        marginHorizontal: 5,
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    image: {
        height: 18,
        width: 18,
        marginHorizontal: 1,
        resizeMode: 'contain',
        alignContent: 'center',
        alignSelf: 'center'
    },
    userContainer: {
        alignItems: 'center'
    },
    user: {
        fontFamily: commonStyles.fontFamily.semiBold,
        color: commonStyles.colors.title,
        fontSize: 15,
        marginLeft: 3,
        textAlign: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
})