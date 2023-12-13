import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { screenSize } from '../../constant/screenSize';
import { styles } from './styles';

interface RingChartProps {
  data: number[]; 
  labels: string[];
  labelColor:string;
  chartColor:string;
}

const RingChart: React.FC<RingChartProps> = ({ data, labels ,labelColor,chartColor}) => {
  const totalPercentage = 100;

  return (
    <SafeAreaView>
      <ProgressChart
        data={{
          labels: labels,
          data: data.map((value) => value / totalPercentage),
        }}
        width={(screenSize.width - 100) / 3}
        height={90}
        strokeWidth={8}
        radius={35}
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: 'transparent',
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: () => chartColor,
        }}
        hideLegend={true}
        style={styles.chart}
      />
      <View style={styles.centeredText}>
        <Text style={[styles.percentText,{color:labelColor}]}>{`${data[0]}%`}</Text>
      </View>
      <View style={styles.labelRow}>
        {labels.map((label, index) => (
          <Text key={index} style={[styles.labelText,{color:labelColor}]}>
            {label}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};



export default RingChart;
