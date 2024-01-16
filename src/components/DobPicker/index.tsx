import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { ImagePaths } from '../../constant/images';
import { styles } from './styles';

import { FlatList, Dimensions } from 'react-native';
import { screenSize } from '../../constant/screenSize';
import { fontFamily } from '../../constant/fontFamily';
interface CustomModalProps {
    isVisible: boolean;
    onClose: () => void;
    onClickItem:(item: string) => void;
    data:string[];
}
  
interface CustomDropdownProps {
      options: string[];
      isDropdownVisible: boolean;
      toggleDropdown: () => void;
}
interface ListItem {
    id: number;
    value: string;
  }
  

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const years= ['1800', '1801', '1802', '1803', '1804', '1805', '1806', '1807', '1808', '1809', '1810', '1811', '1812', '1813', '1814', '1815', '1816', '1817', '1818', '1819', '1820', '1821', '1822', '1823', '1824', '1825', '1826', '1827', '1828', '1829', '1830', '1831', '1832', '1833', '1834', '1835', '1836', '1837', '1838', '1839', '1840', '1841', '1842', '1843', '1844', '1845', '1846', '1847', '1848', '1849', '1850', '1851', '1852', '1853', '1854', '1855', '1856', '1857', '1858', '1859', '1860', '1861', '1862', '1863', '1864', '1865', '1866', '1867', '1868', '1869', '1870', '1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890', '1891', '1892', '1893', '1894', '1895', '1896', '1897', '1898', '1899', '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930', '1931', '1932', '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']


const CustomModal: React.FC<CustomModalProps> = ({ isVisible, onClose,onClickItem ,data}) => {
  const handleItemClick = (item: string) => {
    onClickItem(item);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        }}>
        <View style={{
             backgroundColor: 'white', height: 0.5 * screenSize.height,
             borderTopStartRadius:10,
             borderTopEndRadius:10, }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleItemClick(item)}
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                }}
              >
                <Text style={{
                    fontFamily:fontFamily.regular,
                    fontSize:15,
                    lineHeight:18,
                    color:'#545353',
                }}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};


const DobPicker: React.FC<CustomDropdownProps> = ({ options, isDropdownVisible, toggleDropdown }) => {
    const [selectedMonth, setSelectedMonth] = useState<string | null>('January');
    const [selectedDay, setSelectedDay] = useState<string | null>('1');
    const [selectedYear, setSelectedYear] = useState<string | null>('1800');

  const handleMonthSelect = (option: string) => {
    setSelectedMonth(option);
  };
  const handleDaySelect = (option: string) => {
    setSelectedDay(option);
  };
  const handleYearSelect = (option: string) => {
    setSelectedYear(option);
  };
  const [monthVisible, setMonthVisible] = useState(false);
  const [dayVisible, setDayVisible] = useState(false);
  const [yearVisible, setYearVisible] = useState(false);

  const openMonthModal = () => setMonthVisible(true);
  const openDayModal = () => setDayVisible(true);
  const openYearModal = () => setYearVisible(true);

  const closeMonthModal = () => setMonthVisible(false);
  const closeDayModal = () => setDayVisible(false);
  const closeYearModal = () => setYearVisible(false);
  return (
    <View style={styles.container}>
        <Text style={{
            fontFamily:fontFamily.bold,
            fontSize:12,
            lineHeight:14,
            color:'#545353',
            marginBottom:10
        }}>{"Date of Birth"}</Text>
    <View style={{
        flexDirection:'row',
    }}>
        <View style={{
             width:( screenSize.width-70)/3,
        }}>
        <TouchableOpacity onPress={() => openMonthModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedMonth?.substring(0,3)}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomModal
            data={months}
            isVisible={monthVisible}
            onClose={closeMonthModal}
            onClickItem={handleMonthSelect}
        />
         </View>
         <View style={{
             width:( screenSize.width-70)/3,
             marginHorizontal:10
        }}>
        <TouchableOpacity onPress={() => openDayModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedDay?.substring(0,3)}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomModal
            data={days}
            isVisible={dayVisible}
            onClose={closeDayModal}
            onClickItem={handleDaySelect}
        />
         </View>
         <View style={{
             width:( screenSize.width-70)/3,
        }}>
        <TouchableOpacity onPress={() => openYearModal()} style={styles.dropdownButton}>
            <Text style={styles.labelText}>{selectedYear}</Text>
            <Image source={ImagePaths.downArrow} style={styles.downArrow} />
        </TouchableOpacity>
            <CustomModal
            data={years}
            isVisible={yearVisible}
            onClose={closeYearModal}
            onClickItem={handleYearSelect}
        />
         </View>
    </View>
    </View>
  );
};

export default DobPicker;

