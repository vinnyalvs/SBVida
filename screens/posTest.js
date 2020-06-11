import React, { Component } from 'react';
import { View, StatusBar, Linking } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';


class posTest extends Component {

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Logo />
                <View style={{ flexDirection: 'row' }}>
                    <Button text="Pós-teste" onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform') }} />
                </View>
            </Container>
        );
    }
}

export default Home;

