import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import Navigation from './src/navigation/navigation';

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []); 

  return (
    <Navigation />
  );
};

export default App;
