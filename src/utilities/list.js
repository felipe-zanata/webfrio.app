import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Icon, Badge, Switch } from 'react-native-elements';

export default props => {

  const [switch1, setSwitch1] = useState(true);
  const [checkbox1, setCheckbox1] = useState(true);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  return (
    <View style={styles.list}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Switch that please 😲</ListItem.Title>
        </ListItem.Content>
        <Switch
          value={switch1}
          onValueChange={(value) => setSwitch1(value)}
        />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Choose 🤯</ListItem.Title>
        </ListItem.Content>
        <ListItem.ButtonGroup
          buttons={['Flower', 'Coco']}
          selectedIndex={selectedButtonIndex}
          onPress={(index) => setSelectedButtonIndex(index)}
        />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.CheckBox
          checked={checkbox1}
          onPress={() => setCheckbox1(!checkbox1)}
        />
        <ListItem.Content>
          <ListItem.Title>Check that please 😢</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'grey',
  }
});

