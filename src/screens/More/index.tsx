// Import necessary modules from React and React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the functional component for the screen
const More: React.FC = () => {
  return (
    // The main container view
    <View style={styles.container}>
      {/* Displaying a text */}
      <Text style={styles.text}>Hello, React Native with TypeScript!</Text>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export the component
export default More;