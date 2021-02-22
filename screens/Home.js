import { View, Text, StyleSheet ,Button, FlatList,TouchableOpacity ,ImageBackground, Modal, TouchableWithoutFeedback ,Keyboard} from 'react-native';
import React,{useState} from 'react';
import {globalStyles} from '../styles/global'
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

const Home = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([  
  ])

  const addReview = (review) =>{
    review.key = Math.random().toString();
    setReviews((prev)=>{
      return ([review,...prev])}
    );
    setModalOpen(false)
  }
    return(
       <ImageBackground source={require('../assets/valorant-2020-5k-dq-1920x1080.jpg')} style={globalStyles.overlay}>
         <Modal visible={modalOpen} animationType='slide'> 
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.modalContent}>
                <MaterialIcons
                name='close'
                size={40}
                onPress={() => setModalOpen(false)}
                style={{
                  color :'#B9D3EE',
                  margin: 20,
                }}
              /> 
              <ReviewForm AddReview={addReview}/>
            </View>
          </TouchableWithoutFeedback>
         </Modal>
         
         <MaterialIcons
          name='add'
          size={40}
          onPress={() => setModalOpen(true)}
          style={{
            color :'#B9D3EE',
            marginTop : 30,
            borderWidth : 1,
            padding : 5,
            borderRadius : 20,
            alignSelf : 'center',
            borderColor : '#B9D3EE'
          }}
          /> 
         <View style={globalStyles.container}>
           <FlatList
          data={reviews}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{
              navigation.navigate('reviewDetails',item)
            }}>
              <Card>
              <Text style={globalStyles.text}>{item.title}</Text>
              </Card>
            </TouchableOpacity>

          )}
         />
         </View>
         
       </ImageBackground> 
    )
    
}

const styles = StyleSheet.create({
  modalContent :{
    flex : 1,
    alignItems:'center'
    
  }
    
})

export default Home
