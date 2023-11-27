import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface PaginationComponentProps {
  totalCircles: number;
  activeIndex: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ totalCircles, activeIndex }) => {
  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < totalCircles; i++) {
      circles.push(
        <View
          key={i}
          style={[styles.circle, i === activeIndex ? styles.activeCircle : styles.inactiveCircle]}
        />
      );
    }
    return circles;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContent} >
        <Text style={styles.leftContentText}>{activeIndex+1}/{totalCircles}</Text>
      </View>
      <View style={styles.rightContent}>{renderCircles()}</View>
    </View>
  );
};



export default PaginationComponent;
