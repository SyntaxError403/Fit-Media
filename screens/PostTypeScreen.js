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

import { FlatList,Image, View, Dimensions } from 'react-native';
import { postTemplatesData } from '../utils/FauxData';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const Item = ({ item }) => {
    return <View style={styles.item}>{item.icon}</View>;
};


const PostTemplates = ({navigation}) => {


    return (
        <View style={styles.app}>

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
      flex: 2, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: windowHeight * .5
    },

    
    item: {
      flex: 1,
      maxWidth: "50%", // 100% devided by the number of rows you want
      alignItems: "center",

      
      // my visual styles; not important for the grid
      padding: 10,
      borderWidth: 1.5,
      borderColor: "#fff"
    }
  };


export default PostTemplates;