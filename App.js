import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Calculator from './src/Calculator';

export default function App() {
  const [input, setInput] = useState(0); //계산기 상단에 나타는 것
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null); // 계산 결과 값
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
