import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ImagePaths } from '../../constant/images';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

interface Card {
  id: number;
  amount: string;
  plan: string;
  date: string;
  transactionId: string;
}

interface Props {
  data: Card[];
}

const data=[
    {
        id:1,
        amount:'$ 2310',
        plan:'$11.99 monthly plan',
        date:'21 Jan 2021',
        transactionId:'ADE1224'
    },
    {
        id:2,
        amount:'$ 2310',
        plan:'$11.99 monthly plan',
        date:'21 Jan 2021',
        transactionId:'ADE1224'
    },
    {
        id:3,
        amount:'$ 2310',
        plan:'$11.99 monthly plan',
        date:'21 Jan 2021',
        transactionId:'ADE1224'
    },
    {
        id:4,
        amount:'$ 2310',
        plan:'$11.99 monthly plan',
        date:'21 Jan 2021',
        transactionId:'ADE1224'
    },
    {
        id:5,
        amount:'$ 2310',
        plan:'$11.99 monthly plan',
        date:'21 Jan 2021',
        transactionId:'ADE1224'
    },

];

const ManagePayment: React.FC = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Card }) => (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.labelText}>Plan</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.cardText}>{item.plan}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.labelText}>Amount Paid</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.cardText}>{item.amount}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.labelText}>Paid on</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.cardText}>{item.date}</Text>
      </View>
      <View style={[styles.rowContainer,{marginBottom:0}]}>
        <Text style={styles.labelText}>Transaction ID</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.cardText}>{item.transactionId}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={ImagePaths.bottomTabBg} style={styles.background}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ImagePaths.arrow}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Manage Payment</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Current plan</Text>
          <View style={styles.gradientContainer}>
            <LinearGradient
              colors={['#2272FCFC', '#4BE1DCFC']}
              useAngle={true}
              angle={134}
              style={styles.linearGradient}
            >
             <View style={styles.linearInnerSec}>
              <View style={styles.planDetailsContainer}>
                <View>
                  <Text style={styles.planLabelText}>Your Current plan</Text>
                  <Text style={styles.planAmount}>$11.99</Text>
                  <Text style={styles.planType}>Monthly Plan</Text>
                </View>
                <View>
                  <Image
                    source={ImagePaths.mobilePayment}
                    style={styles.mobilePaymentImage}
                  />
                </View>
               </View>
              <TouchableOpacity style={styles.viewPlansButton}>
                <Text style={styles.viewPlansButtonText}>View Plans</Text>
              </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          <FlatList
            nestedScrollEnabled
            bounces={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </ImageBackground>
  );
};



export default ManagePayment;
