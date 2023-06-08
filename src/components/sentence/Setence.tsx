import { TextInput, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../styles/color';

export default function Sentence() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.form} scrollEnabled={false}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder='암기할 문장을 작성해주세요.'
        />
      </ScrollView>
      <ScrollView contentContainerStyle={styles.form} scrollEnabled={false}>
        <TextInput style={styles.input} multiline={true} placeholder='암기한 문장을 확인하세요.' />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
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
