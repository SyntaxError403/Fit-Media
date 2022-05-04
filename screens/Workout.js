import React, {useState} from 'react';
import { 
    Dimensions, 
    Pressable,
    View,
    Text,
    Platform,
    StyleSheet,
    Alert,
    ActivityIndicator,} from 'react-native';
import {
    InputField,
    InputWrapper,
    AddImage,
    SubmitBtn,
    SubmitBtnText,
    StatusWrapper,
  } from '../styles/AddPost';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthContext } from '../navigation/AuthProvider';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';



const WorkoutPost = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null);
    

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          mediaType: 'any',
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
     const selectVideo = async () => {
    
      ImagePicker.launchImageLibrary({ mediaType: 'video', includeBase64: true }, (response) => {
          console.log(response);
          this.setState({ video: response });
      })
    }
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          mediaType: 'any',
          width: 1200,
          height: 780,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
       const submitPost = async () => {
        const imageUrl = await uploadImage();
        console.log('Image Url: ', imageUrl);
        console.log('Post: ', post);
    
        firestore()
        .collection('posts')
        .add({
          userId: user.uid,
          post: post,
          postImg: imageUrl,
          postTime: firestore.Timestamp.fromDate(new Date()),
          likes: null,
          comments: null,
        })
        .then(() => {
          console.log('Post Added!');
          Alert.alert(
            'Post published!',
            'Your post has been published Successfully!',
          );
          setPost(null);
        })
        .catch((error) => {
          console.log('Something went wrong with added post to firestore.', error);
        });
      }
    
      const uploadImage = async () => {
        if( image == null ) {
          return null;
        }
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
        // Add timestamp to File Name
        const extension = filename.split('.').pop(); 
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
    
        setUploading(true);
        setTransferred(0);
    
        const storageRef = storage().ref(`photos/${filename}`);
        const task = storageRef.putFile(uploadUri);
    
        // Set transferred state
        task.on('state_changed', (taskSnapshot) => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );
    
          setTransferred(
            Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
              100,
          );
        });
    
        try {
          await task;
    
          const url = await storageRef.getDownloadURL();
    
          setUploading(false);
          setImage(null);
    
          // Alert.alert(
          //   'Image uploaded!',
          //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
          // );
          return url;
    
        } catch (e) {
          console.log(e);
          return null;
        }
      };




    return (

    <View style={styles.container}>
    <Text style={styles.title}>Upload a Workout</Text>

    <InputField style={styles.input}
          placeholder="Workout Title"
          multiline
          numberOfLines={4}
        />
     
    <InputField style={styles.inputTwo}
          placeholder="Workout  Description and Details:          (Click the + to add workout media or page)" 
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        />
    <InputWrapper style={{backgroundColor: 'white'}}>
        {image != null ? <AddImage source={{uri: image}} /> : null}
    {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
      </InputWrapper>
      <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
    );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column'
      },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        color: '#1a4f76'
      },
      actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
    input: {
        backgroundColor: "#fff",
        marginLeft: 15,
        height: 50,
        fontSize: 20,
        textAlign: 'left'
    },

    inputTwo: {
        backgroundColor: "#fff",
        textAlignVertical: "top",
        marginLeft: 15,
        height: 300,
        fontSize: 20,
        textAlign: 'left'
    }
};

export default WorkoutPost;