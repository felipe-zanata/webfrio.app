import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Platform, Dimensions } from 'react-native'
import Logo from '../../assets/imgs/WebFrio.png'
import NoStar from '../../assets/imgs/no-star.png'
import Star from '../../assets/imgs/star.png'

import useUser from '../data/hooks/useUser'
import commonStyles from '../commonStyles'

export default props => {

    const { name, placa } = useUser()

    const [score, setScore] = useState(0)

    const getImagem = (index) => {
        if (index < score) {
            return Star
        }
        return NoStar
    }

    const RenderStars = () => {
        const starList = []

        const scoreMath = Math.floor(Math.random() * (5 - 1 + 1) + 1)
        setScore(scoreMath)

        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Image key={i} source={getImagem(index)} style={estilos.estrela} />
            )
        }
        return starList
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.imageLogo} />
            <View style={styles.userContainer}>
                <Text style={styles.user}>{name + ' - ' + placa}</Text>
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
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    imageLogo: {
        height: 50,
        width: 150,
        resizeMode: 'contain',
    },
    image: {
        flex: 1,
        height: 30,
        width: 30,
        marginTop: 20,
        marginHorizontal: 1,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    title: {
        color: "#000",
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    },
    userContainer: {
        alignItems: 'center'
    },
    user: {
        fontFamily: commonStyles.fontFamily.semiBold,
        color: commonStyles.colors.title,
        fontSize: 20,
        marginLeft: 3,
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
})