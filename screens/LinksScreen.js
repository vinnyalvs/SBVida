import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity  } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import material from "../images/Button_Materials2.png";
import youtube from "../images/Button_MaterialsVideo.png";
import postTest from "../images/Button_PosTest.png";

export default function LinksScreen() {
  return (
    <View  style={styles.container} >

      <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')} >
        <Image
          source = {require("../images/Button_Materials2.png")}
          style={styles.ImageIconStyle}

        />

    </TouchableOpacity> 
    <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')} >
        <Image
          source = {require("../images/Button_MaterialsVideo.png")}
          style={styles.ImageIconStyle}

        />

    </TouchableOpacity>
    <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')} >
        <Image
          source = {require("../images/Button_PosTest.png")}
          style={styles.ImageIconStyle}

        />

    </TouchableOpacity>
      
    <button style={styles.MyButton}  onClick={() => WebBrowser.openBrowserAsync('http://www.saude.gov.br/images/pdf/2016/outubro/26/livro-basico-2016.pdf')}><img src={material} /></button>
      <button style={styles.MyButton} onClick={() => WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=ER7YrPJp9Dc')}><img src={youtube} /></button>
      <button style={styles.MyButton}  onClick={() => WebBrowser.openBrowserAsync('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform')}><img src={postTest} /></button>
      
      
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
    backgroundColor: '#def3f3',
  },
   optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
 
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#def3f3',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  FacebookStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#def3f3',
    borderWidth: 0.5,
    borderColor: '#def3f3',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 96,
    width: 200,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },


});
