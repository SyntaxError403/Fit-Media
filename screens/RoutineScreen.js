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

    <View style={styles.container}>
      <Text style={styles.title}>Upload a Workout Routine</Text>
      <Text style={styles.description} > Click on a day to add information. </Text>

      <InputField style={styles.input}
          placeholder="Routine Title"
        />

  <View style={{marginLeft: 30, marginTop: 5, width: 150}}>
    <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Monday"
      style={styles.btn}
     />
    </View>
    <Divider/>
    <View style={{marginLeft: 30, marginTop: 25, width: 150}}>
     <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Tuesday"
      style={styles.btn}
     />
    </View>
    <Divider/>

    <View style={{marginLeft: 30, marginTop: 25, width: 150}}>
     <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Wednesday"
      style={styles.btn}
     />
    </View>
    <Divider/>

    <View style={{marginLeft: 30, marginTop: 25, width: 150}}>
     <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Thursday"
      style={styles.btn}
     />
    </View>

    <Divider/>

    <View style={{marginLeft: 30, marginTop: 25, width: 150}}>
     <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Friday"
      style={styles.btn}
     />
    </View>
    <Divider/>

    <View style={{marginLeft: 30, marginTop: 25, width: 150}}>
     <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Saturday"
      style={styles.btn}
     />
    </View>
    <Divider/>


    <View style={{marginLeft: 30, marginTop: 25, width: 150}}>
     <Button 
      onPress= {() => {navigation.navigate("Workouts")}}
      title = "Sunday   "
      style={styles.btn}
     />
    </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  input: {
    marginTop: 15,
    backgroundColor: "#fff",
    marginLeft: 15,
    height: 50,
    fontSize: 20,
    textAlign: 'left'
},

  btn: {
    textAlign: 'center',
    marginLeft: 75,
    marginTop: 30,
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
    fontSize: 25,
    color: '#1a4f76',
    textAlign: 'center',
  },

};

export default Routine 