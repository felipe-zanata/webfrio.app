import React, { useState, useEffect } from 'react';
import { Dimensions, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Logo from '../../../assets/imgs/WebFrio.png';
import layoutStyles from '../../layoutStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

  useEffect(() => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        openPicker()
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }, [])

  const [imageUri, setImageUri] = useState(null)

  const openPicker = () => {

    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 500,
      maxWidth: 300,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri, base64: response.assets[0].base64 }
        setImageUri(source)
      }
    });
  }

  const selectLibrary = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 500,
      maxWidth: 300,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      console.log({ response })
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.assets[0].uri, base64: response.assets[0].base64 }
        setImageUri(source)
      }
    });
  }

  const renderFileUri = () => {
    if (imageUri) {
      return <Image
        source={imageUri}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../../../assets/imgs/WebFrio_BG.png')}
        style={styles.images}
      />
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.scrollView}>
        <Text style={styles.title} >Tire a foto da sua carteira de Motorista (CNH)</Text>
        {renderFileUri()}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={openPicker}
            style={styles.buttonSecondary}>
            <Icon name='camera-outline' size={25} style={styles.icon} />
            <Text style={styles.buttonTextSecondary}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectLibrary}
            style={styles.buttonSecondary}>
            <Icon name='images-outline' size={25} style={styles.icon} />
            <Text style={styles.buttonTextSecondary}>Galeria</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { props.navigation.navigate('ValidPass') }}
          style={styles.button}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: layoutStyles.scrollView,
  logo: layoutStyles.logo,
  title: [layoutStyles.title, { marginTop: 10, fontSize: 20 }],
  button: layoutStyles.button,
  buttonSecondary: [layoutStyles.buttonSecondary, { width: '40%', flexDirection: 'row' }],
  buttonText: layoutStyles.buttonText,
  buttonTextSecondary: [layoutStyles.buttonTextSecondary, { textAlign: 'left', alignContent: 'center', marginLeft: 5 }],
  icon: layoutStyles.icon,
  images: {
    height: Dimensions.get('window').height / 2,
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'contain',
  }
});