import { useEffect, useState } from 'react';
import Main from './src/components/main/Main';
import Splash from './src/components/splash/Splash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <Splash /> : <Main />;
}
