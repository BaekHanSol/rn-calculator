import { useState } from 'react';

export const useCalCulator = () => {
    const [input, setInput] = useState(0); //계산기 상단에 나타는 것
    const [currentOperator, setCurrentOperator] = useState(null);
    const [result, setResult] = useState(null); // 계산 결과 값
    const [tempInput, setTempInput] = useState(null);
    const [tempOperator, setTempOperator] = useState(null);
    const [isClickedOperator, setClickedOperator] = useState(false); //직전에 눌렀는지 체크
    const [isClickedEqual, setIsClickedEqual] = useState(false); //동일한 연산자 클릭한 경우

    const onPressNum = (number) => {
        if (currentOperator && isClickedOperator) {
            setResult(input);
            setInput(number);
            setClickedOperator(false);
        } else {
            setInput(Number(`${input}${number}`));
        }
    };
    const onPressOperator = (operator) => {
        setClickedOperator(true);
        setIsClickedEqual(false);
        setCurrentOperator(operator);
    };
    const onPressResult = () => {
        let finalResult = result;
        const finalInput = isClickedEqual ? tempInput : input;
        const finalOperator = isClickedEqual ? tempOperator : currentOperator;
        switch (finalOperator) {
            case '+':
                finalResult = result + finalInput;
                break;
            case '-':
                finalResult = result - finalInput;
                break;
            case '*':
                finalResult = result * finalInput;
                break;
            case '/':
                finalResult = result / finalInput;
                break;
            default:
                break;
        }
        setResult(finalResult);
        setInput(finalResult);
        setTempInput(finalInput);
        setTempOperator(finalOperator);
        setIsClickedEqual(true);
        setCurrentOperator(null);
    };
    const onPressReset = () => {
        if (!!input) {
            setInput(0);
        } else {
            setInput(0);
            setCurrentOperator(null);
            setResult(null);
            setTempInput(null);
            setTempOperator(null);
        }
    };
    return {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        onPressNum,
        onPressOperator,
        onPressResult,
        onPressReset,
    };
};
