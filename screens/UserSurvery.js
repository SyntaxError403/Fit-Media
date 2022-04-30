import React, {useContext, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';

import FormInput from '../components/FormInput';
import {Picker} from '@react-native-picker/picker';
import DateField from 'react-native-datefield';


const SurveyScreen = () => {

    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [birthday, setBday] = useState();
    const [workouts, setWorkouts] = useState();
    const [level, setLevel] = useState();
    const [focus, setFocus] = useState();

    

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require('../assets/dumbbell.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Let's Get to Know Eachother</Text>
        

        <FormInput
        labelValue={birthday}
        onChangeText={(birthday) => setBday(birthday)}
        placeholderText="Birthday"
        iconType="user"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />

        <FormInput
        labelValue={weight}
        onChangeText={(gender) => setGender(gender)}
        placeholderText="Gender"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

     <FormInput
        labelValue={height}
        onChangeText={(height) => setHeight(height)}
        placeholderText="Height"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />  

    <FormInput
        labelValue={weight}
        onChangeText={(weight) => setWeight(weight)}
        placeholderText="Weight"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
    
    <FormInput
        labelValue={workouts}
        onChangeText={(workouts) => setWorkouts(workouts)}
        placeholderText="Workouts"
        iconType="user"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />

    <FormInput
        labelValue={level}
        onChangeText={(level) => setLevel(level)}
        placeholderText="Level"
        iconType="user"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
     <FormInput
        labelValue={focus}
        onChangeText={(focus) => setFocus(focus)}
        placeholderText="Main Focus"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />


        </ScrollView>

    );
};

export default SurveyScreen; 

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },

  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#e3090c',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});