import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface TableProps {
  columns: string[];
  rows: string[][];
}

const TableComponent: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {columns.map((column, index) => (
          <View key={index} style={[
            styles.cell,
            index === columns.length - 1 ? {
              borderRightWidth: 0,
            } : null
          ]}>
            <Text style={styles.columnText}>{column}</Text>
          </View>
        ))}
      </View>

      {rows.map((rowData, rowIndex) => (
        <View key={rowIndex} style={[
          styles.row,
          rowIndex === rows.length - 1 ? { borderBottomWidth: 0 } : null,
        ]}>
          {rowData.map((cellData, cellIndex) => (
            <View key={cellIndex}
              style={[
                styles.cell,
                cellIndex === rowData.length - 1 ? { borderRightWidth: 0 } : null,
              ]}
            >
              <Text style={styles.cellText}>{cellData}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default TableComponent;
