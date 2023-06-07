import { StyleSheet } from 'react-native';
import { theme } from './color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color4,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    marginTop: 70,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  btnText: { fontSize: 40, fontWeight: '700' },
});
