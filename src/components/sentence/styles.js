import { theme } from '../../styles/color';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, gap: 5 },
  form1: { backgroundColor: theme.color2, flexBasis: '35%', borderRadius: 10 },
  input1: {
    paddingLeft: 7,
    borderRadius: 10,
    fontSize: 30,
    backgroundColor: theme.color2,
    color: theme.color4,
  },
  input2: {
    paddingLeft: 7,
    borderRadius: 10,
    fontSize: 30,
    backgroundColor: theme.color1,
    color: theme.color4,
  },
  form3: {
    backgroundColor: theme.color2,
    borderRadius: 10,
    flexBasis: '50%',
    flexGrow: 1,
  },
  monitor: {
    paddingLeft: 7,
    fontSize: 30,
    backgroundColor: theme.color2,
    color: theme.color4,
  },
  footer: {
    flexDirection: 'row',
    flexba: '10%',
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
