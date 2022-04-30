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
import {
    AddPostScreen, 
    submitPost, 
    takePhotoFromCamera, 
    selectVideo, 
    choosePhotoFromLibrary
    } from '../screens/AddPostScreen';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';


const ArticlePost = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [post, setPost] = useState(null);
return (

    <View>
    <Text style={styles.title}>Upload a Workout Routine</Text>

    <InputField style={styles.input}
          placeholder="Routine Title"
          multiline
          numberOfLines={4}
        //  value={post}
         // onChangeText={(content) => setPost(content)}
        />
     <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}
    <InputField style={styles.inputTwo}
          placeholder="Routine Description and Details:             
                                 
          (Click the + to add workout media or page)" 
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(content) => setPost(content)}
        />
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        color: '#1a4f76'
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

export default ArticlePost;