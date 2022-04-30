import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions, Pressable, Modal, View, Alert, Text } from 'react-native';

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

import ProgressiveImage from './ProgressiveImage';

import {AuthContext} from '../navigation/AuthProvider';

import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;



const PostCard = ({item, onDelete, onPress}) => {
  const {user, logout} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [liked, setLiked ] = useState()
  const onPressed = () =>  likeIconColor = '#e3090c'
  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#e3090c' : '#333';

  const state = {
    modalVisible: false
  };

  const setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  const increment = firestore.FieldValue.increment(1);
  const reduce = firestore.FieldValue.increment(-1);

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(item.userId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, [liked]);


  const likePost = (postId) => {
    checkLiked(postId)
    if (liked == false || liked == undefined){
    item.likes = item.likes + 1
    firestore()
          .collection('posts')
          .doc(postId)
          .update({
           likes: increment,
           likedBy: firestore.FieldValue.arrayUnion(user.uid)
          })
          .then(() => {
              getUser()
              setLiked(true)
            })
    }
    console.log('New state', liked)
    if (liked == true) { 
      console.log('Unlike')
     unlike(postId);
    }
  }

  const unlike = (postId) =>{

    item.likes = item.likes - 1
    item.liked =
    firestore()
          .collection('posts')
          .doc(postId)
          .update({
           likes: reduce,
           likedBy: firestore.FieldValue.arrayRemove(user.uid)
          })
          .then(() => {
              getUser()
              setLiked(false);
          })
  }

  const checkLiked = (postId) => {
    firestore()
          .collection('posts')
          .doc(postId)
          .get()
          .then(documentSnapshot => documentSnapshot.get('likedBy'))
          .then(likedArray => {
            
            console.log('Liked By', likedArray);

            if (likedArray == null || likedArray == undefined)
            {
              console.log('NOBODY HAS LIKED THIS');
              setLiked(false)
            }

            likedArray.filter( id => {

              if (user.uid == id) {
                console.log('I LIKED THIS');
                setLiked(true)
              }
            })
            console.log(liked)
          })
  }

  return (
    <Card key={item.id}
    style={{width: windowWidth * .9, height: windowHeight * .525}}
    >
      <UserInfo>
        <UserImg
          source={{
            uri: userData
              ? userData.userImg ||
                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
              : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
          }}
        />
        <UserInfoText>
          <TouchableOpacity onPress={onPress}>
            <UserName>
              {userData ? userData.fname || 'Test' : 'Test'}{' '}
              {userData ? userData.lname || 'User' : 'User'}
            </UserName>
          </TouchableOpacity>
          <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {/* {item.postImg != null ? <PostImg source={{uri: item.postImg}} /> : <Divider />} */}
      {item.postImg != null ? (
        <ProgressiveImage
          defaultImageSource={require('../assets/default-img.jpg')}
          source={{uri: item.postImg}}
          style={{width: '100%', height: 250}}
          resizeMode="cover"
        />
      ) : (
        <Divider />
      )}

      <InteractionWrapper>

      <Pressable
        onPress={() => {
        
        }} >
        {({ pressed }) => (
          <View style={{flexDirection: 'row'}}>
          <Interaction onPress={() =>  {
          item.liked = true
          likeIcon = 'heart'
          likeIconColor = '#e3090c'

          likePost(item.id, item.liked)
            }
          }>
         <Ionicons name={likeIcon} size={25} color={likeIconColor} />
         <InteractionText>{likeText}</InteractionText>
       </Interaction>
         </View>
        )}
      </Pressable>



       
        <Interaction onPress={() => 
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
           <Text>Upload a Workout Routine</Text>

        </Modal>
        
        }>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
        {user.uid == item.userId ? (
          <Interaction onPress={() => onDelete(item.id)}>
            <Ionicons name="md-trash-bin" size={25} />
          </Interaction>
        ) : null}
      </InteractionWrapper>
    </Card>
    );
};

export default PostCard;
