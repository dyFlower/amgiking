import { theme } from '../../styles/color';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 30,
    backgroundColor: theme.color2,
    color: theme.color4,
  },
  footer: {
    flexDirection: 'row',
    height: '10%',
  },
  footerBtn: {
    flexDirection: 'row',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  footerText: { marginLeft: 5, fontSize: 20, color: theme.color1 },
});
