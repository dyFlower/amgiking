import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../styles/color';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface WordMean {
  [key: string]: { word: string; mean: string };
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
    const newWordMean: WordMean = { ...wordMean, [Date.now()]: { word, mean } };
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
          value={word}
          placeholder='단어'
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMean}
          returnKeyType='next'
          value={mean}
          placeholder='뜻'
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={addWordMean}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={scrollstyles.container}>
        {Object.keys(wordMean).map((key) => (
          <View style={scrollstyles.wordbox} key={key}>
            <TouchableOpacity style={scrollstyles.word}>
              <Text style={scrollstyles.wordText}>{wordMean[key].word}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={scrollstyles.word}>
              <Text style={scrollstyles.wordText}>{wordMean[key].mean}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: { flexDirection: 'row', marginBottom: 10 },
  input: {
    flex: 4,
    backgroundColor: theme.color2,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: theme.color3,
    flex: 2,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: { color: theme.color1, fontWeight: '700' },
});

const scrollstyles = StyleSheet.create({
  container: {},
  wordbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: theme.color3,
    marginTop: 10,
    borderRadius: 10,
  },
  word: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    flex: 1,
  },
  wordText: { fontSize: 30, color: theme.color1, fontWeight: '400' },
});
