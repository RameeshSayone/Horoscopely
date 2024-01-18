import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TableProps {
  columns: string[];
  rows: string[][];
}

const TableComponent: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.row}>
        {columns.map((column, index) => (
          <View key={index} style={[
            styles.cell,
            index==columns.length-1?{ 
                borderRightWidth:0,
            }:null
        ]}>
            <Text>{column}</Text>
          </View>
        ))}
      </View>

      {/* Table Body */}
      {rows.map((rowData, rowIndex) => (
        <View key={rowIndex} style={[
            styles.row,
            rowIndex==rows.length-1?{ borderBottomWidth:0}:null,
            ]}>
          {rowData.map((cellData, cellIndex) => (
            <View key={cellIndex}
            style={[
                styles.cell,
                cellIndex==rowData.length-1?{ borderRightWidth:0}:null,
            ]}
            >
              <Text>{cellData}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius:19,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderRightWidth:1
  },
});

export default TableComponent;
