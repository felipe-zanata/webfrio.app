import React, { useState, useEffect } from 'react';
import { Dimensions, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Logo from '../../../assets/imgs/WebFrio.png';
import Cnh from '../../../assets/imgs/cnh.png';
import layoutStyles from '../../layoutStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

  useEffect(() => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permissão para acesso câmera",
          message: "Precisamos confirmar seus dados da CNH",
          buttonNeutral: "Me pergunte depois",
          buttonNegative: "Cancelar",
          buttonPositive: "Aceitar"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Acesso concedido");
        openPicker()
      } else {
        console.log("Acesso negado");
      }
    } catch (err) {
      console.warn(err);
    }
  }, [])

  const [imageUri, setImageUri] = useState(null)

  const propsData = props.route.params

  const addUserData = () => {
    const userData = { ...propsData, "imagem": imageUri.uri }
    props.navigation.navigate('ValidPass', userData)
  }

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
      if (response.didCancel) {
        console.log('Usuário cancelou');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri/* , base64: response.assets[0].base64 */ }
        setImageUri(source)
      }
    });
  }

  const selectLibrary = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 600,
      maxWidth: 300,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Usuário cancelou');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.assets[0].uri/* , base64: response.assets[0].base64  */ }
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
        source={Cnh}
        style={styles.images}
      />
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <Image source={Logo} style={styles.logo} />
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
      <TouchableOpacity onPress={() => addUserData()}
        style={styles.button}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: layoutStyles.background,
  logo: layoutStyles.logo,
  title: [layoutStyles.title, { marginTop: 10, fontSize: 20 }],
  button: layoutStyles.button,
  buttonSecondary: [layoutStyles.buttonSecondary, { width: '40%', flexDirection: 'row', margin: 5 }],
  buttonText: layoutStyles.buttonText,
  buttonTextSecondary: [layoutStyles.buttonTextSecondary, { textAlign: 'left', alignContent: 'center', marginLeft: 5 }],
  icon: layoutStyles.icon,
  images: {
    height: Dimensions.get('window').height / 2.5,
    width: '80%',
    alignSelf: 'center',
    resizeMode: 'contain',
  }
});