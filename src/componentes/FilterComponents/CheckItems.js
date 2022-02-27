import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import commonStyles from '../../commonStyles';

export default props => {

  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(true);
  const [checkbox4, setCheckbox4] = useState(true);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <View style={styles.list}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Escolha Carga</ListItem.Title>
        </ListItem.Content>
        <ListItem.ButtonGroup
          buttons={['Vuc', '3/4']}
          selectedIndex={selectedButtonIndex}
          onPress={(index) => setSelectedButtonIndex(index)}
        />
      </ListItem>
      <ListItem bottomDivider style={{flexWrap: 'wrap'}}>
        <ListItem.CheckBox
          title={'Item1'}
          checked={checkbox1}
          onPress={() => setCheckbox1(!checkbox1)}
        />
        <ListItem.CheckBox
          title={'Item2'}
          checked={checkbox2}
          onPress={() => setCheckbox2(!checkbox2)}
        />
        <ListItem.CheckBox
          title={'Item3'}
          checked={checkbox3}
          onPress={() => setCheckbox3(!checkbox3)}
        />
      </ListItem>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderColor: commonStyles.colors.subText,
    width: Dimensions.get('window').width * 0.9,
  }
});

