import React from 'react';
import {
    View, Text, ImageBackground, Image,
} from 'react-native';

import styles from './style';

const Logo = () => (
    <View style={styles.container}>
        <Image
            resizeMode="contain"
            style={styles.containerImage}
            source={require('./images/LogoSemNome.png')}
        >
            { /* <ImageesizeMode="contain" style={styles.logo} source={require('./images/logo2.png')} /> */}
        </Image>
        <Text style={styles.text}>SBVida</Text>
    </View >
);

export default Logo;

