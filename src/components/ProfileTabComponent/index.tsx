import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { screenSize } from '../../constant/screenSize';
import TableComponent from '../TableComponent';
import { TRAITS_DUMMY_CONTENT_1, TRAITS_DUMMY_CONTENT_2 } from '../../constant/dummyData';
import { styles } from './styles';

interface TabProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const PLANETS = 'Planets';
const HOUSES = 'Houses';
const TRAITS = 'Traits';
const planetHeaders = ['Name', 'Deg', 'Sign', 'House'];
const houseHeaders = ['House', 'Sign', 'Deg'];
const planetRows = [
  ['Sun', '54.1', 'Capricorn', '10'],
  ['Moon', '24.1', 'sagittarius', '10'],
  ['Mercury', '54.1', 'Aries', '10'],
  ['Venus', '54.1', 'Leo', '10'],
  ['Mars', '14.1', 'Capricorn', '10'],
  ['Jupiter', '54.1', 'sagittarius', '10'],
  ['Saturn', '54.1', 'Aries', '10'],
  ['Uranus', '34.1', 'Leo', '10'],
  ['Neptune', '54.1', 'Capricorn', '10'],
  ['Pluto', '54.1', 'sagittarius', '10'],
];
const houseRows = [
  ['10', 'Capricorn', '44.1',],
  ['1', 'sagittarius', '14.1',],
  ['2', 'Aries', '54.1',],
  ['11', 'Leo', '64.1',],
  ['10', 'Capricorn', '54.1',],
  ['19', 'sagittarius', '24.1',],
  ['10', 'Aries', '54.1',],
  ['7', 'Leo', '54.1',],
  ['6', 'Capricorn', '24.1',],
  ['10', 'sagittarius', '34.1',],
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
      <View style={[styles.activelineContainer, {
        alignItems: activeTab === PLANETS ? 'flex-start' :
          activeTab === HOUSES ? 'center' : 'flex-end',
      }]}>
        <View style={styles.activeLine} />
      </View>
      <View style={styles.tabSec}>
        {activeTab === PLANETS ? <TableComponent columns={planetHeaders} rows={planetRows} /> :
          activeTab === HOUSES ? <TableComponent columns={houseHeaders} rows={houseRows} /> :
            <View style={{margin: 25}}>
              <Text style={styles.traitsText}>{TRAITS_DUMMY_CONTENT_1}</Text>
              <Text style={[styles.traitsText, { marginVertical: 15 }]}>{TRAITS_DUMMY_CONTENT_2}</Text>
              <View style={styles.row}>
                <Text style={[styles.boldText, { minWidth: (screenSize.width - 50) * 0.4 }]}>{"Spiritual lesson"}</Text>
                <Text style={styles.traitsText}>{": Sociability (lighten up)"}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.boldText, { minWidth: (screenSize.width - 50) * 0.4 }]}>{"key quality"}</Text>
                <Text style={styles.traitsText}>{": We think"}</Text>
              </View>
            </View>
        }
      </View>
    </View>
  );
};

export default ProfileTabComponent;