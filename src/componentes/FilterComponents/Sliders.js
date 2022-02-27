import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Slider, Text } from 'react-native-elements'
import commonStyles from '../../commonStyles'
import Icon from 'react-native-vector-icons/Ionicons'

const Sliders = () => {

  const [value, setValue] = useState(50);

  return (
      <View style={[styles.contentView]}>
        <Text style={{ paddingBottom: 5 }}>Distancia: {value} Km</Text>
        <Slider value={value} onValueChange={setValue} maximumValue={200} minimumValue={10} step={10} 
          thumbTintColor='#FFF' allowTouchTrack
          trackStyle={{ height: 3, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 30, width: 30, backgroundColor: 'rgba(250,250,250,0.9)', alignItems: 'center', justifyContent: 'center' }}
          thumbProps={{
            children: (
              <Icon name="navigate" size={25}
                color={commonStyles.colors.icon} />
            ),
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>10 km</Text>
          <Text>100 km</Text>
          <Text>200 km</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default Sliders;