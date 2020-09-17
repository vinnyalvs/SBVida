import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity  } from 'react-native';
import material from "../images/Button_Materials2.png";
import youtube from "../images/Button_MaterialsVideo.png";
import postTest from "../images/Button_PosTest.png";
import AsyncStorage from '@react-native-community/async-storage';

export default function LinksScreen() {
  return (
    <View  style={styles.container} >
      {/*<View style={styles.getStartedContainer}>

      <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')} >
        <Image
          source = {require("../images/Button_Materials2.png")}
          style={styles.ImageIconStyle}

  /> 
        

    </TouchableOpacity> 
    </View>*/}

    
      
      <button style={{ backgroundColor: '#EFF8F8', border: 0 }}  onClick={() => WebBrowser.openBrowserAsync('http://www.saude.gov.br/images/pdf/2016/outubro/26/livro-basico-2016.pdf')}><img src={material} /></button>
      <button style={{ backgroundColor: '#EFF8F8', border: 0 }} onClick={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=ER7YrPJp9Dc')}><img src={youtube} /></button>
      <button style={{ backgroundColor: '#EFF8F8', border: 0 }}  onClick={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')}><img src={postTest} /></button>
      
      
    </View>
  );
}



function myfunction() {
  console.log("CLICKED");
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
  
  
  

});

const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
}


