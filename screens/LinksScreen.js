import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View,Image,TouchableOpacity  } from 'react-native';
import material from "../images/Button_Materials2_3.png";
import youtube from "../images/Button_MaterialsVideo_3.png";
import postTest from "../images/Button_PosTest_3.png";
import AsyncStorage from '@react-native-community/async-storage';

export default function LinksScreen() {
  //Verifica se já abriu pre teste
  if(global.state){
    console.log("Já fez pre teste");
  } else {
    console.log("Não fez pre teste");
  }
  return (
    <View  style={styles.container} >
       <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress = {() => WebBrowser.openBrowserAsync('https://drive.google.com/drive/folders/1mMOhV7iG0x8gfH41c1L4K0u3C5ojunpE')} >
        <Image
          source = {material}
          style={styles.ImageIconStyle}

        />
        <View style={styles.SeparatorLine} />
    </TouchableOpacity>

      
      <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress = {() => WebBrowser.openBrowserAsync('https://www.youtube.com/channel/UCzLTuxjF2JjPjbDyJwHwMOQ')}>

        <Image
          source={youtube}
          style={styles.ImageIconStyle}
           />
      </TouchableOpacity>

        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress = {() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')}>

        <Image
          source={postTest}
          style={styles.ImageIconStyle}
           />
      </TouchableOpacity>

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#EFF8F8',
  },
   optionIconContainer: {
    marginRight: 12,
  },
  view: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  ImageIconStyle: {
    height: 73,
    width: 200,
    resizeMode: 'stretch',
  },
  FacebookStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#def3f3',
    borderWidth: 0.5,
    borderColor: '#def3f3',
    height: 73,
    width: 200,
    borderRadius: 5,
    margin: 5,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
  
  

});

const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
}


