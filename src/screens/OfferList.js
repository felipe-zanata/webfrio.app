import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import Header from '../componentes/Header'
import Filters from '../componentes/Filters'
import Offer from '../componentes/Offer'
import layoutStyles from "../layoutStyles"

import useOffer from '../data/hooks/useOffer'


export default props => {
    
    const { offer, fetchOffer } = useOffer()

    useEffect(() => {
        fetchOffer()
    }, [])
    
    return (
        <View style={styles.background}>
            <Header />
            <Filters/>
            <FlatList
                data={offer} keyExtractor={item => `${item.id}`}
                renderItem={({item}) =>
                    <Offer key={item.id} {...item} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: [layoutStyles.background],
    
})