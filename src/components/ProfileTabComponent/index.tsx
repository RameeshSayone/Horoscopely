import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fontFamily } from '../../constant/fontFamily';
import { screenSize } from '../../constant/screenSize';
import TableComponent from '../TableComponent';

interface TabProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const PLANETS='Planets';
const HOUSES='Houses';
const TRAITS='Traits';
const columns = ['Name', 'Age', 'Country'];
const rows = [
  ['John', '25', 'USA'],
  ['Alice', '30', 'Canada'],
  ['Bob', '22', 'UK'],
];


const Tab: React.FC<TabProps> = ({ label, isActive, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.tab, isActive && styles.activeTab]} onPress={onPress}>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>{label}</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const ProfileTabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(PLANETS);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View>
       <LinearGradient
       colors={['#2272FCFC', '#4BE1DCFC']}
       useAngle={true}
       angle={98}
       style={styles.container}>
        <Tab label={PLANETS} isActive={activeTab === PLANETS} onPress={() => handleTabPress(PLANETS)} />
        <Tab label={HOUSES} isActive={activeTab === HOUSES} onPress={() => handleTabPress(HOUSES)} />
        <Tab label={TRAITS} isActive={activeTab === TRAITS} onPress={() => handleTabPress(TRAITS)} />
      </LinearGradient>
      <View style={[styles.activelineContainer,{
        alignItems:activeTab === PLANETS?'flex-start':
        activeTab === HOUSES?'center':'flex-end',
      }]}>
        <View style={styles.activeLine} />
      </View>
      <View style={{
        flex:1,
        marginVertical:10
        }}>
      <TableComponent columns={columns} rows={rows} />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding:8,
    marginHorizontal:25,
    borderRadius:3
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontFamily:fontFamily.medium,
    fontSize: 14,
    lineHeight:16,
    color: '#FFFFFF',
  },
  activeTab: {
    
  },
  activeTabText: {
    fontFamily:fontFamily.bold,
  },
  activeLine: {
    width: (screenSize.width-66)/3,
    height: 4,
    backgroundColor: '#FFFFFF',
    position:'absolute',
    borderRadius:100,
    bottom:-10,
  },
  activelineContainer:{
    marginHorizontal:25
  }
});

export default ProfileTabComponent;
