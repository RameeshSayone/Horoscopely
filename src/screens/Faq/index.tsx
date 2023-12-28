import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import { ImagePaths } from '../../constant/images';
import { RootStackParamList } from '../../interfaces/common';
import { styles } from './styles';

interface Card {
  id: number;
  question: string;
  answer: string;
  showAnswer: boolean;
}

interface Props {
  data: Card[];
}

const answer =
  'Answer here lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ullamcorper Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const data = [
  {
    id: 1,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
  {
    id: 2,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
  {
    id: 3,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
  {
    id: 4,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
  {
    id: 5,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
  {
    id: 6,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
  {
    id: 7,
    question: 'Question heading will be here',
    answer: answer,
    showAnswer: false,
  },
];

const Faq: React.FC = () => {
  const navigation = useNavigation<RootStackParamList>();
  const [faqArray, setFaqArray] = useState(data);
  const [metaData, setMetaData] = useState(false);

  const UpdateFaq = (item: Card) => {
    let array = faqArray;
    let position = faqArray.indexOf(item);
    array[position].showAnswer = !array[position].showAnswer;
    setFaqArray(array);
    setMetaData(!metaData);
  };

  const renderItem = ({ item }: { item: Card }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.questionText}>{item.question}</Text>
          <TouchableOpacity onPress={() => UpdateFaq(item)}>
            <Text style={styles.showAnswerText}>
              {item.showAnswer ? '-' : '+'}
            </Text>
          </TouchableOpacity>
        </View>
        {item.showAnswer && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>{item.answer}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'#F2F2F2'} />
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ImagePaths.arrow} style={styles.backButton} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>FAQ</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={ImagePaths.hashBg}
        style={styles.backgroundImage}>
        <FlatList
          legacyImplementation={true}
          extraData={metaData}
          bounces={false}
          data={faqArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.flatList}
        />
      </ImageBackground>
    </View>
  );
};

export default Faq;

