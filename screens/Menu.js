import React, { Component } from 'react';
import { View, StatusBar, Linking } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';


class Menu extends Component {

    itemIndisponivel = () => {
        alert("Função Indisponível no momento!");

    };

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Logo />
                <View style={{ flexDirection: 'row' }}>
                    <Button text="Menu"
                        onPress={this.itemIndisponivel}
                    />

                    <Button text="Tutorial"
                        onPress={this.itemIndisponivel}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Button text="Pre-teste" onPress={() => { Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSf6TKsJoIvsPqDyscJ4zCoyEkvWb92Iu5mDw5MyAEQ1jcNjPQ/viewform') }} />
                </View>
            </Container>
        );
    }
}

export default Home;

