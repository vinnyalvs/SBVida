import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#ebebeb'

});

export default () => <Home />;

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Let's build a Currency Converter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f6d7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
