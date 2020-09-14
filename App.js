import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    const t = abriuPreTeste();
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
          
           <Stack.Screen name="Home" component={HomeScreen}/>
           <Stack.Screen name="Root" component={BottomTabNavigator}/>
           {/* <Stack.Screen name="Home" component={BottomTabNavigator} /> *}
            {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}

          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const abriuPreTeste = async ()=> {
  console.log("Alou mundo");
  try{
      const t = await AsynsStorage.getItem("abriu_pre_teste");
      if(t == "Sim")
        navigation.navigate('Root');
      else 
        console.log("Socorro!");
  }catch(erro){
    console.error(erro.message)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
