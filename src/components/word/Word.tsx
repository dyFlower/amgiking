import { TextInput, TouchableOpacity, View, Text, ScrollView, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../styles/color';
import { useEffect, useRef, useState } from 'react';
import { styles, scrollstyles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface WordMean {
  [key: string]: { word: string; mean: string; wordPress: boolean; meanPress: boolean };
}

export default function Word() {
  const [word, setWord] = useState('');
  const [mean, setMean] = useState('');
  const [wordMean, setWordMean] = useState<WordMean>({});

  const STORAGE_KEY = '@words';

  const onChangeWord = (payload: string) => {
    setWord(payload);
  };
  const onChangeMean = (payload: string) => {
    setMean(payload);
  };
  const saveWordMean = async (toSave: WordMean) => {
    const s = JSON.stringify(toSave);
    await AsyncStorage.setItem(STORAGE_KEY, s);
  };
  const loadWordMean = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    s !== null ? setWordMean(JSON.parse(s)) : null;
  };
  const addWordMean = async () => {
    if (word === '' || mean === '') {
      return;
    }
    const newWordMean: WordMean = {
      ...wordMean,
      [Date.now()]: { word, mean, wordPress: false, meanPress: true },
    };
    setWordMean(newWordMean);
    await saveWordMean(newWordMean);
    setWord('');
    setMean('');
  };
  const deleteWordMean = (key: string) => {
    Alert.alert('Delete', '정말로 삭제하시겠습니까?', [
      { text: '취소' },
      {
        text: '확인',
        style: 'destructive',
        onPress: async () => {
          const newWordMean: WordMean = { ...wordMean };
          delete newWordMean[key];
          setWordMean(newWordMean);
          await saveWordMean(newWordMean);
        },
      },
    ]);
  };

  const toggleWord = (key: string) => {
    const toggledWord: WordMean = { ...wordMean };
    toggledWord[key].wordPress = !toggledWord[key].wordPress;
    setWordMean(toggledWord);
  };
  const toggleMean = (key: string) => {
    const toggledMean: WordMean = { ...wordMean };
    toggledMean[key].meanPress = !toggledMean[key].meanPress;
    setWordMean(toggledMean);
  };

  const inputRef = useRef(null);

  const nextInput = (nextInputRef: any) => {
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  useEffect(() => {
    loadWordMean();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeWord}
          returnKeyType='next'
          onSubmitEditing={() => nextInput(inputRef)}
          value={word}
          placeholder='단어'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMean}
          onSubmitEditing={addWordMean}
          returnKeyType='done'
          value={mean}
          ref={inputRef}
          placeholder='뜻'
        />
        <TouchableOpacity style={styles.button} onPress={addWordMean}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={scrollstyles.container}>
        {Object.keys(wordMean).map((key) => (
          <View style={scrollstyles.wordbox} key={key}>
            <TouchableOpacity style={scrollstyles.word} onPress={() => toggleWord(key)}>
              <Text
                style={{
                  ...scrollstyles.wordText,
                  color: wordMean[key].wordPress ? theme.color3 : theme.color1,
                }}
              >
                {wordMean[key].word}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={scrollstyles.word} onPress={() => toggleMean(key)}>
              <Text
                style={{
                  ...scrollstyles.wordText,
                  color: wordMean[key].meanPress ? theme.color3 : theme.color1,
                }}
              >
                {wordMean[key].mean}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={scrollstyles.delete}
              onPress={() => {
                deleteWordMean(key);
              }}
            >
              <Fontisto name='trash' size={25} color={theme.color4} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
