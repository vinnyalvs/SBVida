import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Component } from 'react';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import {Logo} from '../components/Logo';
import { StackActions } from '@react-navigation/native';



export default function PreTest() {
    return (
            <View>
                <ScrollView>
                <View >
                    <Button title="Clique para abrir o Pré-Teste" onPress={handlePreTestPress} > </Button>
                </View>
                </ScrollView>
            </View> 
        );
}


function handlePreTestPress() {
    StackActions.pop();
    WebBrowser.openBrowserAsync(
      'https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform'
    );
  }



