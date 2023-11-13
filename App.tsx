import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import RNBootSplash from "react-native-bootsplash";

const App: React.FC = () => {

  // This useEffect will run after the component has rendered
  useEffect(() => {
    // RNBootSplash.hide({ duration: 600 });
  }, []); // You can specify dependencies here

  return (
    <View>
      <Text>Horoscopely</Text>
    </View>
  );
};

export default App;
