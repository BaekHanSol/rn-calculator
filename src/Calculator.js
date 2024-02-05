import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useCalCulator } from './use-calculator';

const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
};
const Button = ({ text, onPress, flex, type, isSelected }) => {
    const backgroundColor = COLOR[type.toUpperCase()];
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ flex, backgroundColor, justifyContent: 'center', alignItems: 'center', borderWidth: 0.2, borderColor: 'black', borderWidth: isSelected ? 1 : 0.2 }}>
            <Text style={{ color: 'white', fontSize: 20, height: 50 }}>{text}</Text>
        </TouchableOpacity>
    );
};

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
`;

const InputContainer = styled.View`
    background-color: ${COLOR.RESULT};
    min-height: 50px;
    justfy-content: center;
    align-items: flex-end;
    padding: 10px 5px;
`;

export default () => {
    const { input, currentOperator, onPressReset, onPressNum, onPressOperator } = useCalCulator();
    return (
        <View style={{ flex: 1, width: 250, justifyContent: 'center' }}>
            <InputContainer>
                <Text style={{ color: 'white', fontSize: 35, textAlign: 'right' }}>{input}</Text>
            </InputContainer>
            <ButtonContainer>
                <Button type="reset" text={!!input ? 'C' : 'AC'} onPress={onPressReset} flex={3} />
                <Button type="operator" text="/" onPress={() => onPressOperator('/')} flex={1} isSelected={currentOperator == '/'} />
            </ButtonContainer>
            <ButtonContainer>
                {[7, 8, 9].map((num) => (
                    <Button type="num" text={String(num)} onPress={() => onPressNum(num)} flex={1} key={`{number_${num}`} />
                ))}
                <Button type="operator" text="X" onPress={() => onPressOperator('*')} flex={1} isSelected={currentOperator == '*'} />
            </ButtonContainer>
            <ButtonContainer>
                {[4, 5, 6].map((num) => (
                    <Button type="num" text={String(num)} onPress={() => onPressNum(num)} flex={1} key={`{number_${num}`} />
                ))}
                <Button type="operator" text="-" onPress={() => onPressOperator('-')} flex={1} isSelected={currentOperator == '-'} />
            </ButtonContainer>
            <ButtonContainer>
                {[1, 2, 3].map((num) => (
                    <Button type="num" text={String(num)} onPress={() => onPressNum(num)} flex={1} key={`{number_${num}`} />
                ))}
                <Button type="operator" text="+" onPress={() => onPressOperator('+')} flex={1} isSelected={currentOperator == '+'} />
            </ButtonContainer>
            <ButtonContainer>
                <Button type="num" text="0" onPress={() => onPressNum(0)} flex={3} />
                <Button type="operator" text="=" onPress={() => onPressResult()} flex={1} />
            </ButtonContainer>
        </View>
    );
};
