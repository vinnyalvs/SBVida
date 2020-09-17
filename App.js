import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-community/async-storage';
const STORAGE_KEY = '@abriu_pre_teste';

global.state = 0;

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const aux = abriuPreTeste();
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
          <Stack.Screen name="Início" component={HomeScreen} />
          <Stack.Screen name="Root" component={BottomTabNavigator}/>
           {/*  *}
            {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}


const abriuPreTeste = async ()=> {
  React.useEffect(() => {
  console.log("Iniciando app, lendo AsyncStorage");
  async function loadResourcesAndDataAsync() {
  try{
      const t = await AsyncStorage.getItem(STORAGE_KEY);
      console.log("Já fez pré teste : " + t);
      if(t !== null) {
        global.state = 1; 
      }
  }catch(erro){
    console.error(erro.message)
  } }
  loadResourcesAndDataAsync();
}, []);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

