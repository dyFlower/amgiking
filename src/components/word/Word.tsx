import { StyleSheet, TextInput, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../styles/color';

export default function Word() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='단어'></TextInput>
        <TextInput placeholder='뜻' style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={scrollstyles.container}>
        <View style={scrollstyles.wordbox}>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>사과</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.delete}>
            <Fontisto name='trash' size={25} color={theme.color4} />
          </TouchableOpacity>
        </View>
        <View style={scrollstyles.wordbox}>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>Banana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>바나나</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.delete}>
            <Fontisto name='trash' size={25} color={theme.color4} />
          </TouchableOpacity>
        </View>
        <View style={scrollstyles.wordbox}>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>Orange</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>오렌지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.delete}>
            <Fontisto name='trash' size={25} color={theme.color4} />
          </TouchableOpacity>
        </View>
        <View style={scrollstyles.wordbox}>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>fun</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>즐겁다</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.delete}>
            <Fontisto name='trash' size={25} color={theme.color4} />
          </TouchableOpacity>
        </View>
        <View style={scrollstyles.wordbox}>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>아아아아아아아</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.word}>
            <Text style={scrollstyles.wordText}>아아아아아아아아</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scrollstyles.delete}>
            <Fontisto name='trash' size={25} color={theme.color4} />
          </TouchableOpacity>
        </View>
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
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    flex: 1,
    // backgroundColor: 'purple'
  },
  wordText: { fontSize: 30, color: theme.color1, fontWeight: '400' },
});
