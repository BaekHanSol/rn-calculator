import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';
const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
};
const Button = ({ text, onPress, flex, type }) => {
    const backgroundColor = COLOR[type.toUpperCase()];
    return (
        <TouchableOpacity onPress={onPress} style={{ flex, backgroundColor, justifyContent: 'center', alignItems: 'center', borderWidth: 0.2, borderColor: 'black' }}>
            <Text style={{ color: 'white', fontSize: 20, height: 50 }}>{text}</Text>
        </TouchableOpacity>
    );
};

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
`;

export default () => {
    return (
        <View style={{ flex: 1, width: 250 }}>
            <ButtonContainer>
                <Button type="reset" text="AC" onPress={() => null} flex={3} />
                <Button type="operator" text="/" onPress={() => null} flex={1} />
            </ButtonContainer>
            <ButtonContainer>
                <Button type="num" text="7" onPress={() => null} flex={1} />
                <Button type="num" text="8" onPress={() => null} flex={1} />
                <Button type="num" text="9" onPress={() => null} flex={1} />
                <Button type="operator" text="x" onPress={() => null} flex={1} />
            </ButtonContainer>
            <ButtonContainer>
                <Button type="num" text="4" onPress={() => null} flex={1} />
                <Button type="num" text="5" onPress={() => null} flex={1} />
                <Button type="num" text="6" onPress={() => null} flex={1} />
                <Button type="operator" text="-" onPress={() => null} flex={1} />
            </ButtonContainer>
            <ButtonContainer>
                <Button type="num" text="1" onPress={() => null} flex={1} />
                <Button type="num" text="2" onPress={() => null} flex={1} />
                <Button type="num" text="3" onPress={() => null} flex={1} />
                <Button type="operator" text="+" onPress={() => null} flex={1} />
            </ButtonContainer>
            <ButtonContainer>
                <Button type="num" text="0" onPress={() => null} flex={3} />
                <Button type="operator" text="=" onPress={() => null} flex={1} />
            </ButtonContainer>
        </View>
    );
};
