import { StyleSheet } from 'react-native';
import { theme } from '../../styles/color';

export const styles = StyleSheet.create({
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

export const scrollstyles = StyleSheet.create({
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
  wordText: { fontSize: 30, fontWeight: '400' },
});
