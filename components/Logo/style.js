import { Dimensions, StyleSheet } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const estilo =  StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    logo: {
        width: imageWidth / 2,
    },
    text: {
        color: '$white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        fontWeight: '600',
    }
});

export default estilo;

