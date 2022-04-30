import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions, Pressable, View, Text, Button} from 'react-native';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';

import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';


const Routine = ({navigation}) => {

  return (

    <View>
      <Text style={styles.title}>Upload a Workout Routine</Text>
      <Text style={styles.description} > Click on a day to add information. </Text>
    <View style={{flexDirection: 'row'}}>
     <Button 
      onPress= {() => {navigation.navigate("Article")}}
      title = "Monday"
      style={styles.btn}
     />
    </View>


    <View style={{flexDirection: 'row'}}>
      <Interaction onPress={() => Popup()}> 
        <SubmitBtn style={styles.btn}>
                <SubmitBtnText>Tuesday</SubmitBtnText>
        </SubmitBtn>
        </Interaction>   
  </View>


    <View style={{flexDirection: 'row'}}>
      <Interaction onPress={() => Popup()}> 
        <SubmitBtn style={styles.btn}>
                <SubmitBtnText>Wednesday</SubmitBtnText>
        </SubmitBtn>
        </Interaction>
    </View>


    <View style={{flexDirection: 'row'}}>
      <Interaction onPress={() => Popup()}> 
        <SubmitBtn style={styles.btn}>
                <SubmitBtnText>Thursday</SubmitBtnText>
        </SubmitBtn>
      </Interaction>    
    </View>


    <View style={{flexDirection: 'row'}}>
      <Interaction onPress={() => Popup()}> 
        <SubmitBtn style={styles.btn}>
                <SubmitBtnText>Friday</SubmitBtnText>
        </SubmitBtn>
    </Interaction>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Interaction onPress={() => Popup()}> 
        <SubmitBtn style={styles.btn}>
                <SubmitBtnText>Saturday</SubmitBtnText>
        </SubmitBtn>
        </Interaction>   
  </View>


    <View style={{flexDirection: 'row'}}>
      <Interaction onPress={() => Popup()}> 
        <SubmitBtn style={styles.btn}>
                <SubmitBtnText>Sunday</SubmitBtnText>
        </SubmitBtn>
        </Interaction>   
      </View>
  </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    width: '80%',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10
  },

  title:{
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  delete: {
    marginTop: 25,
    marginLeft: 75,
  },

  description:{
    fontSize: 20,
    color: '#1a4f76',
    textAlign: 'center',
  },

};

export default Routine 