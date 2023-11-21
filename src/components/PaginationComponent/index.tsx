import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { fontFamily } from '../../constant/fontFamily';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  leftContent: {
    flex: 1,
  },
  leftContentText: {
    fontFamily: fontFamily.medium,
    fontSize: 15,
    color: '#09182B',
    lineHeight:18
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  activeCircle: {
    backgroundColor: '#328AEE', // Change the color for the active circle
  },
  inactiveCircle: {
    backgroundColor: '#8EBDF3', // Change the color for inactive circles
  },
});

export default PaginationComponent;
