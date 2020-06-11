import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Component } from 'react';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import HomeScreen from './HomeScreen';

import { MonoText } from '../components/StyledText';
import {Logo} from '../components/Logo';
import { StackActions } from '@react-navigation/native';



export default function PreTest({navigation}) {
    return (
            <View>
                <ScrollView>
                <View >
                    <Button title="Clique para abrir o Pré-Teste" onPress={() => navigation.navigate('Root')} > </Button>
                </View>
                </ScrollView>
            </View> 
        );
}


function handlePreTestPress()  {
   // this.props.navigation.navigate('HomeScreen');    
    WebBrowser.openBrowserAsync(
      'https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform'
    );
  }



