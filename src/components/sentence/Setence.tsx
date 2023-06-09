import { TextInput, View, Text, ScrollView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../styles/color';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Sentence() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [hide, setHide] = useState(false);

  const STORAGE_KEY = '@sentence';

  const handleText1Change = (text: string) => {
    setText1(text);
  };

  const handleText2Change = (text: string) => {
    setText2(text);
  };

  const saveSentence = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, text1);
  };

  const loadSentence = async () => {
    const savedText1 = await AsyncStorage.getItem(STORAGE_KEY);
    if (savedText1 !== null) {
      setText1(savedText1);
    }
  };

  const deleteSentence = async () => {};
  const handleHide = () => {
    setHide(!hide);
  };

  useEffect(() => {
    loadSentence();
  }, []);

  return (
    <View style={styles.container}>
      {!hide && (
        <ScrollView contentContainerStyle={styles.form} scrollEnabled={false}>
          <TextInput
            style={styles.input}
            value={text1}
            onChangeText={handleText1Change}
            returnKeyType='done'
            onEndEditing={saveSentence}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Enter') {
                Keyboard.dismiss();
                saveSentence();
              }
            }}
            multiline={true}
            placeholder='암기할 문장을 작성해주세요.'
          />
        </ScrollView>
      )}
      <ScrollView contentContainerStyle={styles.form} scrollEnabled={false}>
        <TextInput
          style={{ ...styles.input, backgroundColor: theme.color2 }}
          value={text2}
          onChangeText={handleText2Change}
          returnKeyType='done'
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Enter') {
              Keyboard.dismiss();
            }
          }}
          multiline={true}
          placeholder='암기한 문장을 확인하세요.'
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn} onPress={handleHide}>
          <Fontisto name='eye' size={25} color={theme.color1} />
          <Text style={styles.footerText}>{hide ? '보이기' : '숨기기'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn} onPress={deleteSentence}>
          <Fontisto name='trash' size={25} color={theme.color1} />
          <Text style={styles.footerText}>본문 지우기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn}>
          <Fontisto name='mic' size={25} color={theme.color1} />
          <Text style={styles.footerText}>음성 입력</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
