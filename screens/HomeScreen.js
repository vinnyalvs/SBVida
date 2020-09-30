import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Logo} from '../components/Logo';
import {UFJFLogo} from '../components/UFJFLogo';
import AsyncStorage from '@react-native-community/async-storage';


const STORAGE_KEY = '@abriu_pre_teste';


export default function HomeScreen({navigation}) {
  //Verifica se já abriu pre teste
  if(global.state){
    console.log("redirecionando");
    navigation.navigate('Links'); 
  }

  //var text = global.state ? "Essa pagina nao devia ser mostrada" : "Suporte Básico de Vida";
  var text = "Suporte Básico de Vida";
  var title =  global.state ?  "Clique para continuar" : "Clique para abrir o Pré-Teste";
  return (
    

    
    <View style={styles.container}>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Logo></Logo>
        </View>

        <View style={styles.getStartedContainer}>

        <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.welcometext}>
                        Seja bem vindo(a) ao:
                  </Text>
        </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.sbvidatext}>
              {text}
            </Text>   
          </View> 
        

        <View style={styles.welcomeContainer}>
          <UFJFLogo></UFJFLogo>
        </View>

        <View style={{ flexDirection: 'row' }}>
                    <Button color="#6dc9ca" fontFamily="Gotham" fontSize="10px" title={title} onPress={() =>  handlePreTestPress(navigation)} > </Button>
         </View>

        
        </View>

      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


function handlePreTestPress(navigation) {
  navigation.navigate('Links');
  var aux = global.state ? false : true;
  try{
    const t = salvarAberturaPreTeste();
  }catch(erro){
    console.error(erro.message)
  }

  if(aux) {
    WebBrowser.openBrowserAsync(
      'https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform'
    ); 
  }

}

const salvarAberturaPreTeste = async ()=> {
  try{
    AsyncStorage.setItem(STORAGE_KEY, "Sim");
    global.state = true; 
    console.log("Salvou");
  }catch(erro){
    console.error(erro.message)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#def3f3',
  },
  welcometext: {
    color: 'rgba(20,20,20,1.0)',
    fontSize: 18,
    lineHeight: 19,
    fontFamily: 'Gotham',
    textAlign: 'center',

  },
  sbvidatext: {
    color: 'rgba(20,20,20,1.0)',
    fontSize: 22,
    lineHeight: 19,
    fontFamily: 'Gotham',
    fontWeight: 'Bold',
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    backgroundColor: '#EFF8F8', 
    border: 0, 
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
