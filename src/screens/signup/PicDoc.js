import React, { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView, StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/imgs/WebFrio.png';
import commonStyles from '../../commonStyles';

export default props => {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
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
  };

  const [imageData, setImageData] = useState(null)
  const [imageUri, setImageUri] = useState(null)

  const openPicker = () => {

    const options = {
      //maxWidth: 2000,
      //maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(source)
      }
    });
  }

  const selectLibrary = async () => {
    const options = {
      //maxWidth: 2000,
      //maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

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
        const source = { uri: response.uri }
        const sourceData = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(source);
        console.log({ sourceData });
        //setImageData(sourceData)
        setImageUri(source)
      }
    });
  }

  const renderFileData = () => {
    if (imageData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + imageData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('../../../assets/imgs/star.png')}
        style={styles.images}
      />
    }
  }

  const renderFileUri = () => {
    if (imageUri) {
      return <Image
        source={{ uri: imageUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../../../assets/imgs/star.png')}
        style={styles.Section}
      />
    }
  }

  return (
    <SafeAreaView>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.body}>
        <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10 }} >Pick Images from Camera & Gallery</Text>
        <View style={styles.formContainer}>
         {/*  <View style={styles.Section}>
            {renderFileData()}
            <Text style={{ textAlign: 'center' }}>teste Base 64</Text>
          </View> */}
          <View style={styles.Section}>
            {renderFileUri()}
            <Text style={{ textAlign: 'center' }}>teste Arquivo URI</Text>
          </View>
        </View>

        <View style={styles.btnParentSection}>
          <TouchableOpacity onPress={
            requestCameraPermission} style={[styles.button, { width: '70%', backgroundColor: "#FFF", borderColor: commonStyles.colors.primary, borderWidth: 1 }]}  >
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={selectLibrary} style={[styles.button, { width: '70%', backgroundColor: "#FFF", borderColor: commonStyles.colors.primary, borderWidth: 1 }]}  >
            <Text style={styles.buttonText}>Galeria</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('ValidPass')}
          style={styles.button}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  Section: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 3,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  logo: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 20,
    height: 100,
    width: '80%',
    resizeMode: 'stretch',
  },
  title: {
    fontFamily: commonStyles.fontFamily.bold,
    color: commonStyles.colors.mainText,
    fontSize: 25,
    marginTop: 30,
    marginHorizontal: 15,
    padding: 10,
    alignItems: 'center',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily.regular,
    color: commonStyles.colors.subText,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  formContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(245, 245, 245,1)',
    padding: 5,
    margin: 10,
    height: 150,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 3,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    flexGrow: 1,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontFamily: commonStyles.fontFamily.regular,
    color: commonStyles.colors.subText,
    fontSize: 20,
    textAlign: 'left',
  },
  button: {
    backgroundColor: commonStyles.colors.enableBackground,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily.bold,
    color: "#FFF",
    fontSize: 20
  }
});