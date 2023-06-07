import Word from './src/components/word/Word';
import Sentence from './src/components/sentence/Setence';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './src/styles/styles';
import { theme } from './src/styles/color';
import { useState } from 'react';

export default function App() {
  const [pressed, setPressed] = useState(true);

  const word = async () => {
    setPressed(true);
  };
  const sentence = async () => {
    setPressed(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.header}>
        <TouchableOpacity onPress={word}>
          <Text style={{ ...styles.btnText, color: pressed ? theme.color1 : theme.color3 }}>
            Word
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={sentence}>
          <Text style={{ ...styles.btnText, color: !pressed ? theme.color1 : theme.color3 }}>
            Sentence
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>{pressed ? <Word /> : <Sentence />}</View>
    </View>
  );
}
