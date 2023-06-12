import { TextInput, View, Text, ScrollView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../styles/color';
import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Sentence() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [hide, setHide] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleViewTouch = () => {
    if (inputRef.current) inputRef.current.focus();
  };

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

  const deleteSentence = async () => {
    Alert.alert('Delete', '정말로 삭제하시겠습니까?', [
      { text: '취소' },
      {
        text: '확인',
        style: 'destructive',
        onPress: async () => {
          setText1('');
          await AsyncStorage.removeItem(STORAGE_KEY);
        },
      },
    ]);
  };
  const handleHide = () => {
    setHide(!hide);
  };

  useEffect(() => {
    loadSentence();
  }, []);

  const compareText1 = text1.split('');
  const compareText2 = text2.split('');

  const answerLength = compareText2.length;
  const editAnswer = [...compareText1].slice(0, answerLength).join('');

  return (
    <View style={styles.container}>
      {!hide && (
        <TouchableOpacity style={styles.form1} onPress={handleViewTouch} activeOpacity={1}>
          <ScrollView>
            <TextInput
              style={styles.input1}
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
              ref={inputRef}
            />
          </ScrollView>
        </TouchableOpacity>
      )}
      <View>
        <TextInput
          style={styles.input2}
          value={text2}
          onChangeText={handleText2Change}
          returnKeyType='done'
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Enter') {
              Keyboard.dismiss();
            }
          }}
          multiline={false}
          placeholder='암기한 문장을 확인하세요.'
        />
      </View>
      <View style={styles.form3}>
        <ScrollView style={{ borderRadius: 10 }}>
          <Text style={styles.monitor}>
            {compareText2.map((_, i) =>
              compareText1[i] === compareText2[i] ? (
                <Text key={i} style={{ color: theme.color4 }}>
                  {compareText2[i]}
                </Text>
              ) : (
                <Text key={i} style={{ color: 'red' }}>
                  {compareText2[i]}
                </Text>
              ),
            )}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn} onPress={handleHide}>
          <Fontisto name='eye' size={20} color={theme.color1} />
          <Text style={styles.footerText}>{hide ? '보이기' : '숨기기'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn} onPress={deleteSentence}>
          <Fontisto name='trash' size={20} color={theme.color1} />
          <Text style={styles.footerText}>본문 지우기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn} onPress={() => setText2(editAnswer)}>
          <Fontisto name='bell-alt' size={20} color={theme.color1} />
          <Text style={styles.footerText}>답으로 수정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
