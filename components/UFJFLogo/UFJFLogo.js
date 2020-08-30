import React from 'react';
import {
    View, Text, ImageBackground, Image,
} from 'react-native';

import styles from './style';

const UFJFLogo = () => (
    <View style={styles.container}>
        <ImageBackground
            resizeMode="contain"
            style={styles.containerImage}
            source={require('./images/Logo.png')}
        >

        </ImageBackground>
    </View >
);

export default UFJFLogo;