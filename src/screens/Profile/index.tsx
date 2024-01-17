import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, ImageSourcePropType, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ImagePaths } from "../../constant/images";
import Header from "../../components/HeaderComponent";
import LinearGradient from "react-native-linear-gradient";
import { fontFamily } from "../../constant/fontFamily";
import { screenSize } from "../../constant/screenSize";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import DobPicker from "../../components/DobPicker";
import TobPicker from "../../components/TobPicker";
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
        name: 'Capricorn',
        type:'Sun sign',
        logo: ImagePaths.capricorn,
    },
    {
        id: 3,
        name: 'Capricorn',
        type:'Sun sign',
        logo: ImagePaths.capricorn,
    },
    {
        id: 4,
        name: 'Capricorn',
        type:'Sun sign',
        logo: ImagePaths.capricorn,
    },
    {
        id: 5,
        name: 'Capricorn',
        type:'Sun sign',
        logo: ImagePaths.capricorn,
    },
    {
        id: 6,
        name: 'Capricorn',
        type:'Sun sign',
        logo: ImagePaths.capricorn,
    },
]
const renderItem = ({ item }: { item: Card }) => (
    <View style={{
        width:'33%',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Image 
        source={item.logo}
        style={{
            width:18,
            height:18,
            resizeMode:'contain'
        }}/>
         <Text style={{
            fontFamily:fontFamily.regular,
            fontSize:11,
            lineHeight:13,
            color:'#95C8FF',
            marginVertical:8
        }}>{item.type}</Text>
         <Text style={{
            fontFamily:fontFamily.medium,
            fontSize:12,
            lineHeight:14,
            color:'#FFFFFF',
        }}>{item.name}</Text>
    </View>
)
interface BasicListItem{
    label:string;
    value:string;
}
const BasicListItem:React.FC<BasicListItem>=({label,value})=>{
    
    return(
        <View style={{
            marginBottom:15
        }}>
             <Text style={{
                fontFamily:fontFamily.bold,
                fontSize:12,
                lineHeight:14,
                color:'#545353',
                marginBottom:10
            }}>{label}</Text>
            {label=='Email ID'&&
            <TouchableOpacity
             style={{
                position:'absolute',
                right:5
             }}>
                <Text 
                    style={{
                        fontFamily:fontFamily.medium,
                        fontSize:12,
                        lineHeight:14,
                        color:'#007AFF',
                    }}>Verify</Text>
            </TouchableOpacity>}
            <View style={{
                borderBottomWidth:label!='Relationship Status'?1:0,
                borderBottomColor:'#54535350',
                paddingBottom:10
            }}>
                <Text style={{
                    fontFamily:fontFamily.regular,
                    fontSize:15,
                    lineHeight:18,
                    color:'#545353',
                }}>{value}</Text>
            </View>

        </View>
    )
}
const Profile:React.FC=()=>{
    const [name,setName]=useState('John Luther');
    const [dob,setDob]=useState('Jan 21 1989');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    

    const [tob,setTob]=useState('09:32 AM');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [type, setType] = useState('');
    



    const [pob,setPob]=useState('New York');
    const [email,setEmail]=useState('sample@mail.com');
    const [mobile,setMobile]=useState('9876543210');
    const genderOptions = ['Male', 'Female',];
    const relationShipOptions = ['Single', 'Married', 'Engaged', 'In a Relationship'];
    const [gender,setGender]=useState('Male');
    const [relationshipStatus,setRelationshipStatus]=useState('Single');
    const [isEditView,setIsEditView]=useState(true);
    const [topSecFlex, setTopSecFlex] = useState(0.6);
    const options = ['Today', 'Tomorrow', 'Yesterday'];
    const [isDropdownVisible, setDropdownVisibility] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisibility(!isDropdownVisible);
    };

 
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
   
      return(
       <ImageBackground
        source={ImagePaths.hashBg}
        style={{flex:1}}
        >  
         <View 
         style={{
            flex:Platform.OS=='ios'?topSecFlex:0.6,
            backgroundColor:'#FFFFFF',
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            }}>
            <ImageBackground
            source={ImagePaths.versionBg}
            style={{
                flex:1,
                top:-5
            }}
            imageStyle={{
                borderRadius:20,
            }}
          
            >
                <View style={{flex:1}}>
                    <Header title={'Profile'}/>
                    <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={true}
                    indicatorStyle='white'
                    >
                        <View style={{
                                height:113,
                                width:113,
                                backgroundColor:'#FFFFFFD9',
                                borderRadius:100,
                                borderWidth:2,
                                borderColor:'#FFFFFF',
                                justifyContent:'center',
                                alignItems:'center',
                                position:'absolute',
                                top:0,
                                left:(screenSize.width/2)-56,
                                zIndex:1
                            }}>
                                <Image 
                                source={ImagePaths.profilePic}
                                style={{height:77,width:89}}/>
                            </View>
                        <LinearGradient
                            colors={['#2272FCFC', '#4BE1DCFC']}
                            useAngle={true}
                            angle={120}
                            style={{
                                justifyContent:'center',
                                alignItems:'center',
                                padding:20,
                                marginTop:56
                            }}
                        >
                            <Text style={{
                                fontFamily:fontFamily.medium,
                                fontSize:17,
                                lineHeight:20,
                                color:'#FFFFFF',
                                marginTop:56
                            }}>John luther</Text>
                            <Text style={{
                                fontFamily:fontFamily.regular,
                                fontSize:13,
                                lineHeight:15,
                                color:'#FFFFFF',
                                marginTop:10
                            }}>January 1, 1989 . 09:20 PM</Text>
                        </LinearGradient>
                        <View style={{
                            margin:25,
                        }}>
                            <FlatList
                            numColumns={3}
                            bounces={false}
                            data={signsData}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            ItemSeparatorComponent={() => <View style={{width:10,height:30}} />}
                            />
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                    style={{
                        padding:20,
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'row'
                    }}>
                    <Text style={{
                                fontFamily:fontFamily.regular,
                                fontSize:13,
                                lineHeight:15,
                                color:'#FFFFFF',
                            }}>Show More</Text>
                    <Image 
                    source={ImagePaths.arrow}
                    style={{
                        width:15,
                        height:15,
                        resizeMode:'contain',
                        marginLeft:5,
                        tintColor:'#FFFFFF',
                        transform:[{rotate:'-90deg'}]
                    }}/>
                    </TouchableOpacity>
                   

                </View>
            </ImageBackground>
         </View>
         <View style={{
            padding:25,
            flex:0.4
         }}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginBottom:25
            }}>
                 <Text 
                 style={{
                    fontFamily:fontFamily.bold,
                    fontSize:15,
                    lineHeight:18,
                    color:'#09182B',
                }}>Basic details</Text>
                <TouchableOpacity
                onPress={()=>setIsEditView(!isEditView)}>
                    <Text 
                    style={{
                        fontFamily:fontFamily.medium,
                        fontSize:13,
                        lineHeight:15,
                        color:'#007AFF',
                    }}>{isEditView?"Save":"Edit"}</Text>
                </TouchableOpacity>


            </View>
            <ScrollView
             bounces={false}
             showsVerticalScrollIndicator={true}
             indicatorStyle='white'
             contentContainerStyle={{
                marginBottom:10
             }}>
                
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
                </View>:
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={{
                            marginBottom:15
                        }}>
                        <Text style={{
                            fontFamily:fontFamily.bold,
                            fontSize:12,
                            lineHeight:14,
                            color:'#545353',
                            marginBottom:10
                        }}>{"Name"}</Text>
                        <TextInput
                        value={name}
                        onChangeText={(val)=>{onChangeName(val)}}
                        keyboardType={'name-phone-pad'}
                        style={{
                            borderWidth:0.5,
                            borderColor:'#AFAFAF',
                            borderRadius:3
            ,               backgroundColor:'#FFFFFF',
                            paddingHorizontal:10,
                            justifyContent:'center',
                            alignItems:'center',
                            height:40,
                            fontFamily:fontFamily.regular,
                            color:'#545353',
                            lineHeight:18,
                            fontSize:15
                        }}
                        />
                    </View>
                    <DobPicker
                    month={month}
                    day={day}
                    year={year}
                    setDob={onChangeDob}
                    />
                     <TobPicker
                    hour={hour}
                    minute={minute}
                    type={type}
                    setTob={onChangeTob}
                    />
                    <View style={{
                            marginBottom:15
                        }}>
                        <Text style={{
                            fontFamily:fontFamily.bold,
                            fontSize:12,
                            lineHeight:14,
                            color:'#545353',
                            marginBottom:10
                        }}>{"Place of Birth"}</Text>
                        <TextInput
                        value={pob}
                        onChangeText={(val)=>{onChangePob(val)}}
                        keyboardType={'name-phone-pad'}
                        style={{
                            borderWidth:0.5,
                            borderColor:'#AFAFAF',
                            borderRadius:3
            ,               backgroundColor:'#FFFFFF',
                            paddingHorizontal:10,
                            justifyContent:'center',
                            alignItems:'center',
                            height:40,
                            fontFamily:fontFamily.regular,
                            color:'#545353',
                            lineHeight:18,
                            fontSize:15
                        }}
                        />
                    </View>
                    <View style={{
                            marginBottom:15
                        }}>
                        <Text style={{
                            fontFamily:fontFamily.bold,
                            fontSize:12,
                            lineHeight:14,
                            color:'#545353',
                            marginBottom:10
                        }}>{"Email ID"}</Text>
                        <TextInput
                        value={email}
                        onChangeText={(val)=>{onChangeEmail(val)}}
                        keyboardType={'email-address'}
                        style={{
                            borderWidth:0.5,
                            borderColor:'#AFAFAF',
                            borderRadius:3
            ,               backgroundColor:'#FFFFFF',
                            paddingHorizontal:10,
                            justifyContent:'center',
                            alignItems:'center',
                            height:40,
                            fontFamily:fontFamily.regular,
                            color:'#545353',
                            lineHeight:18,
                            fontSize:15
                        }}
                        />
                    </View>
                    <View style={{
                            marginBottom:15
                        }}>
                        <Text style={{
                            fontFamily:fontFamily.bold,
                            fontSize:12,
                            lineHeight:14,
                            color:'#545353',
                            marginBottom:10
                        }}>{"Mobile Number"}</Text>
                        <TextInput
                        value={mobile}
                        onChangeText={(val)=>{onChangeMobile(val)}}
                        keyboardType={'number-pad'}
                        style={{
                            borderWidth:0.5,
                            borderColor:'#AFAFAF',
                            borderRadius:3
            ,               backgroundColor:'#FFFFFF',
                            paddingHorizontal:10,
                            justifyContent:'center',
                            alignItems:'center',
                            height:40,
                            fontFamily:fontFamily.regular,
                            color:'#545353',
                            lineHeight:18,
                            fontSize:15
                        }}
                        />
                    </View>
                    <View style={{
                            marginBottom:15
                        }}>
                        <Text style={{
                            fontFamily:fontFamily.bold,
                            fontSize:12,
                            lineHeight:14,
                            color:'#545353',
                            marginBottom:10
                        }}>{"Birth Gender"}</Text>
                         <RadioButtonGroup
                            labelColor={'#545353'}
                            activeColor={'#007AFF'}
                            options={genderOptions}
                            selected={gender}
                            handleChange={handleGenderChange}
                        />
                    </View>
                    <View style={{
                            marginBottom:15
                        }}>
                        <Text style={{
                            fontFamily:fontFamily.bold,
                            fontSize:12,
                            lineHeight:14,
                            color:'#545353',
                            marginBottom:10
                        }}>{"Relationship Status"}</Text>
                         <RadioButtonGroup
                            labelColor={'#545353'}
                            activeColor={'#007AFF'}
                            options={relationShipOptions}
                            selected={relationshipStatus}
                            handleChange={handleRelationshipStatusChange}
                        />
                    </View>
               </KeyboardAvoidingView>}
               
            </ScrollView>

         </View>
            

        </ImageBackground>
    )
}

 export default Profile;