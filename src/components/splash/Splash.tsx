import { View, Image } from 'react-native';
import { styles } from './styles';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/splash.png')} style={styles.logo} />
    </View>
  );
}
