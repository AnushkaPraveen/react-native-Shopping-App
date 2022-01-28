import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput,Image,TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SetName} from './reducer';


const Home = ({navigation}) => {
  const [text, setText] = useState('');
  const counter = useSelector(state => state.counter);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  const handleText = e => {
    setText(e);

    console.log(text);
  };
  const handleButton = () => {
    dispatch(SetName(text));
    navigation.navigate('ScreenA');
  };

  return (
    <View style={styles.body}>
    <Text style={styles.mainTitle}>SHOPPING APP</Text>
    <Image style={styles.image} source={require('../res/shopping.jpg')} />
      <Text style={styles.content}>WELCOME</Text>
      <Text>Enter your Name here</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="e.g. Alex Robot"
        onChangeText={handleText}
      />

      {/* <Button title="Shopping" onPress={handleButton} /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleButton}
        disabled={!text?true:false}
        
      ><Text style={styles.buttonText}>Shopping</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  content: {
    fontSize: 30,
    fontWeight:'bold'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'black',
    width: 300,
    padding:10
  },
  image:{
    width:360,
    height:340
  },
  mainTitle:{
    fontSize:50,
    fontWeight:'bold',
    color:'#6200EE',
    fontFamily:'lucida grande'
    
  },
  button:{
    alignItems: "center",
    backgroundColor: "#28D6C0",
    padding: 10,
    borderRadius:5,
    marginTop:20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
});
export default Home;
