import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import Header from '../componentes/Header'
import Offer from '../componentes/Offer'

import useOffer from '../data/hooks/useOffer'

export default props => {
    
    const { offer, fetchOffer } = useOffer()

    useEffect(() => {
        fetchOffer()
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={offer} keyExtractor={item => `${item.id}`}
                renderItem={({item}) =>
                    <Offer key={item.id} {...item} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})