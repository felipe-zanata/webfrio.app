import React, { useEffect } from 'react'
import { StyleSheet, Image } from 'react-native'
import useEvent from '../data/hooks/useEvent'

export default props => {

    const { endSplash } = useEvent()

    useEffect(() => {
        setTimeout(endSplash, 500)
    }, [])

    return (
            <Image source={require('../../assets/imgs/SplashScreen.png')}
                style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
})