import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, ImageSourcePropType, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ImagePaths } from "../../constant/images";
import Header from "../../components/HeaderComponent";
import LinearGradient from "react-native-linear-gradient";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import DobPicker from "../../components/DobPicker";
import TobPicker from "../../components/TobPicker";
import { styles } from "./styles";
import ProfileTabComponent from "../../components/ProfileTabComponent";
interface Card{
    id: number;
    name: string;
    type:string;
    logo: ImageSourcePropType;
}
const signsData=[
    {
        id: 1,
        name: 'Capricorn',
        type:'Sun sign',
        logo: ImagePaths.capricorn,
    },
    {
        id: 2,
        name: 'Aries',
        type:'Zodiac sign',
        logo: ImagePaths.zodiac,
    },
    {
        id: 3,
        name: 'Fixed',
        type:'Modality',
        logo: ImagePaths.modality,
    },
    {
        id: 4,
        name: 'Leo',
        type:'Moon sign',
        logo: ImagePaths.leo,
    },
    {
        id: 5,
        name: 'Air',
        type:'Element',
        logo: ImagePaths.wind,
    },
    {
        id: 6,
        name: 'Capricorn',
        type:'Ascedant',
        logo: ImagePaths.capricorn,
    },
]
const renderItem = ({ item }: { item: Card }) => (
    <View style={styles.container}>
        <Image 
        source={item.logo}
        style={styles.image}/>
        <Text style={styles.typeText}>{item.type}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
    </View>
)

interface BasicListItem{
    label:string;
    value:string;
}
const BasicListItem:React.FC<BasicListItem>=({label,value})=>{
    return(
        <View style={styles.listContainer}>
          <Text style={styles.label}>{label}</Text>
          {label=='Email ID'&&
            <TouchableOpacity
             style={styles.verifyButton}>
                <Text style={styles.verifyText}>Verify</Text>
            </TouchableOpacity>}
            <View style={[styles.valueContainer,{
                borderBottomWidth:label!='Relationship Status'?1:0,
                }]}>
            <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    )
}
const Profile:React.FC=()=>{
    const [name,setName]=useState('John Luther');
    const [dob,setDob]=useState('Jan 21 1989');
    const [month, setMonth] = useState('Jan');
    const [day, setDay] = useState('21');
    const [year, setYear] = useState('1989');
    const [tob,setTob]=useState('09:32 AM');
    const [hour, setHour] = useState('09');
    const [minute, setMinute] = useState('32');
    const [type, setType] = useState('AM');
    const [pob,setPob]=useState('New York');
    const [email,setEmail]=useState('sample@mail.com');
    const [mobile,setMobile]=useState('9876543210');
    const genderOptions = ['Male', 'Female',];
    const relationShipOptions = ['Single', 'Married', 'Engaged', 'In a Relationship'];
    const [gender,setGender]=useState('Male');
    const [relationshipStatus,setRelationshipStatus]=useState('Single');
    const [isEditView,setIsEditView]=useState(false);
    const [topSecFlex, setTopSecFlex] = useState(0.6);
    const [bottomSecFlex, setBottomSecFlex] = useState(0.4);
    const [expandedView,setExpandedView]=useState(false);
    const onChangeName=(val:string)=>{
        setName(val);
    }
    const onChangePob=(val:string)=>{
        setPob(val);
    }
    const onChangeEmail=(val:string)=>{
        setEmail(val);
    }
    const onChangeMobile=(val:string)=>{
        setMobile(val);
    }
    const handleGenderChange = (text: string) => {
        console.log(text)
        setGender(text);
      };
    const handleRelationshipStatusChange = (text: string) => {
        setRelationshipStatus(text);
      };
    const onKeyboardDidShow = (event: any) => {
      if(Platform.OS=='ios')
        setTopSecFlex(0.3);
      };
    const onKeyboardDidHide = () => {
          setTopSecFlex(0.6);
      };
    const onChangeDob=(value:string)=>{
        setDob(value)
    }
    const onChangeTob=(value:string)=>{
        setTob(value)
    }
    const splitTob=(tob:string)=>{
        const [time, type] = tob.split(' ');
        const [hour, minute] = time.split(':');
        setHour(hour);
        setMinute(minute);
        setType(type);
    }
    const splitDob=(dob:string)=>{
        const dobArray=dob.split(' ');
        setMonth(dobArray[0]);
        setDay(dobArray[1]);
        setYear(dobArray[2]);
    }
    useEffect(() => {
        splitDob(dob);
        splitTob(tob);
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);
    const onClickShow=()=>{
      if(expandedView==false){
        setTopSecFlex(0.99)
        setBottomSecFlex(0.01)
      }else{
        setTopSecFlex(0.6)
        setBottomSecFlex(0.4)
      }
      setExpandedView(!expandedView)
    }
   
      return(
       <ImageBackground
        source={ImagePaths.hashBg}
        style={styles.mainContainer}
        >
          <View 
           style={[styles.topSection,{
            flex:topSecFlex
           }]}>
            <ImageBackground
            source={ImagePaths.versionBg}
            style={styles.versionBg}
            imageStyle={styles.imageStyle}>
              <View style={styles.mainContainer}>
                <Header title={'Profile'}/>
                <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={true}
                indicatorStyle='white'>
                  <View style={styles.profilePicContainer}>
                    <Image
                    source={ImagePaths.profilePic}
                    style={styles.profilePic}/>
                  </View>
                  <LinearGradient
                  colors={['#2272FCFC', '#4BE1DCFC']}
                  useAngle={true}
                  angle={120}
                  style={styles.linearGradient}>
                    <Text style={styles.linearGradientText}>John luther</Text>
                    <Text style={styles.linearGradientSubText}>January 1, 1989 . 09:20 PM</Text>
                  </LinearGradient>
                  <View style={styles.flatListContainer}>
                    <FlatList
                    numColumns={3}
                    bounces={false}
                    data={signsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.ItemSeparatorComponent} />}
                    />
                  </View>
                  {expandedView&&
                  <View>
                    <ProfileTabComponent/>
                  </View>}
                </ScrollView>
                <TouchableOpacity
                style={styles.showMoreButton}
                onPress={onClickShow}
                >
                  <Text style={styles.showMoreText}>{expandedView?'Show Less':'Show More'}</Text>
                  <Image source={ImagePaths.arrow}
                  style={[
                    styles.showMoreArrow,
                    { transform: [{ rotate:expandedView? '90deg':'-90deg' }],}]}/>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={[
            styles.basicDetailsContainer,
            {flex:bottomSecFlex}
          ]}>
            <View style={styles.detailsRow}>
              <Text style={styles.detailsRowTitle}>Basic details</Text>
                <TouchableOpacity
                onPress={()=>setIsEditView(!isEditView)}>
                  <Text style={styles.editButton}>{isEditView?"Save":"Edit"}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
             bounces={false}
             showsVerticalScrollIndicator={true}
             indicatorStyle='white'
             contentContainerStyle={styles.scrollViewContainer}>
              {!isEditView?
              <View>
                <BasicListItem label="Name" value={name}/>
                <BasicListItem label="Date of Birth" value={dob}/>
                <BasicListItem label="Time of Birth" value={tob}/>
                <BasicListItem label="Place of Birth" value={pob}/>
                <BasicListItem label="Email ID" value={email}/>
                <BasicListItem label="Mobile Number" value={mobile}/>
                <BasicListItem label="Birth Gender" value={gender}/>
                 <BasicListItem label="Relationship Status" value={relationshipStatus}/>
              </View>
              :
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{"Name"}</Text>
                  <TextInput
                  value={name}
                  onChangeText={(val)=>{onChangeName(val)}}
                  keyboardType={'name-phone-pad'}
                  style={styles.textBox}/>
                </View>
                <DobPicker
                month={month}
                day={day}
                year={year}
                setDob={onChangeDob}/>
                <TobPicker
                hour={hour}
                minute={minute}
                type={type}
                setTob={onChangeTob}/>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{"Place of Birth"}</Text>
                  <TextInput
                  value={pob}
                  onChangeText={(val)=>{onChangePob(val)}}
                  keyboardType={'name-phone-pad'}
                  style={styles.textBox}/>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{"Email ID"}</Text>
                  <TextInput
                  value={email}
                  onChangeText={(val)=>{onChangeEmail(val)}}
                  keyboardType={'email-address'}
                  style={styles.textBox}/>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{"Mobile Number"}</Text>
                  <TextInput
                  value={mobile}
                  onChangeText={(val)=>{onChangeMobile(val)}}
                  keyboardType={'number-pad'}
                  style={styles.textBox}/>
                </View>
                 <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{"Birth Gender"}</Text>
                  <RadioButtonGroup
                  labelColor={'#545353'}
                  activeColor={'#007AFF'}
                  options={genderOptions}
                  selected={gender}
                  handleChange={handleGenderChange}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>{"Relationship Status"}</Text>
                  <RadioButtonGroup
                  labelColor={'#545353'}
                  activeColor={'#007AFF'}
                  options={relationShipOptions}
                  selected={relationshipStatus}
                  handleChange={handleRelationshipStatusChange}/>
                </View>
              </KeyboardAvoidingView>}
            </ScrollView>
         </View>
      </ImageBackground>
    )
}

 export default Profile;