import React from 'react';
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

import { FlatList,Image, View, Dimensions, Text, Pressable, Navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const Item = ({ item }) => {
    return <View style={styles.item}>{item.icon}</View>;
};



const PostTemplates = ({navigation}) => {

 // const postOptions= [fitness, workout, routine, diet]

 const postTemplatesData= [
  {
    icon: (
      <Pressable
        onPress={() => {
         navigation.navigate("AddPost")
        }}>
        {({ pressed }) => (
          <View>
              <Image
              style={{ width: windowWidth * .5, height: 150 , resizeMode: 'stretch'}}
              source={require('../assets/social.png')}
              />
              <Text style={{
                fontSize: 20,
                color: '#1a4f76',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5,
              }}> Gym / Fitness Posts</Text>
            </View>
          )}
      </Pressable>
    )
  },

  {
    icon: (
      <Pressable
      onPress={() => {
       navigation.navigate("Routine")
      }}>
      {({ pressed }) => (
        <View>
            <Image
            style={{ width: windowWidth * .5, height: 150 , resizeMode: 'stretch'}}
            source = {require('../assets/workout.png')}
            />
            <Text style={{
              fontSize: 20,
              color: '#1a4f76',
              marginTop: 10,
              marginLeft: 5,

            }}>Workout</Text>
          </View>
        )}
    </Pressable>
    )
  },

  {
    icon: (
      <Pressable
      onPress={() => {
       navigation.navigate("Routine")
      }}>
      {({ pressed }) => (
        <View>
            <Image
            style={{ width: windowWidth * .5, height: 150 , resizeMode: 'stretch'}}
            source={require('../assets/routine.jpg')}
            />
            <Text style={{
              fontSize: 20,
              color: '#1a4f76',
              marginTop: 10,
              marginLeft: 5,

            }}>Routine</Text>
          </View>
        )}
    </Pressable>
    )
  },
{
  icon: (
    <Pressable
    onPress={() => {
     navigation.navigate("AddPost")
    }}>
    {({ pressed }) => (
      <View>
          <Image
          style={{ width: windowWidth * .5, height: 150 , resizeMode: 'stretch'}}
          source={require('../assets/diet.png')}
          />
          <Text style={{
            fontSize: 20,
            color: '#1a4f76',
            marginTop: 10,
            marginLeft: 5,

          }}>Diets / Meal Prepping</Text>
        </View>
      )}
  </Pressable>
  )
  },
];

 return (
    <View style={styles.app}>
      <Text style={styles.title}>Upload a Post</Text>
      <Text style={styles.description} > Select the type of post you want to upload. </Text>

      <FlatList
        data={postTemplatesData}
        numColumns={2}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
    </View>
        
  );
};



const styles = {

    app: {
      backgroundColor: 'white',
      flex: 2, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: windowHeight * .5
    },

    title:{

      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginBottom: 15,
    },

    description:{
      fontSize: 20,
      color: '#1a4f76',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 15,
    },

    item: {
      flex: 1,
      maxWidth: "50%", // 100% devided by the number of rows you want
      alignItems: "center",
      
      
      // my visual styles; not important for the grid
    
    }
  };


export default PostTemplates;