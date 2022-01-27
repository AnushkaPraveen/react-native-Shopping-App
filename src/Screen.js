import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  BackHandler,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SetProductACount, SetProductBCount, SetTotal} from './reducer';

const Screen = ({navigation}) => {
  const name = useSelector(state => state.name);
  const countA = useSelector(state => state.countA);
  const countB = useSelector(state => state.countB);
  const Total = useSelector(state => state.Total);
  const [productA, setProductA] = useState(0);
  const [productB, setProductB] = useState(0);
  const dispatch = useDispatch();

  const handleTotal = () => {
    dispatch(SetTotal());
    navigation.navigate('Bill');
  };
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.mainText}>Hi, {name}</Text>
      </View>
<View style={styles.cardView}>
<View style={styles.card}>
        <Text style={styles.flexbody}>Product A</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={e => setProductA(e)}
        />
        <Button
          title="add"
          onPress={() => dispatch(SetProductACount(productA))}
        />
        <Text>{productA}</Text>
        <Text>{countA}</Text>
      </View>

      <View style={styles.card}>
        <Text>Product B</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={e => setProductB(e)}
        />
        <Button
          title="add"
          onPress={() => dispatch(SetProductBCount(productB))}
        />
        <Text>{productB}</Text>
        <Text>{countB}</Text>
      </View>
</View>
     


      <View>
        <Button title="add" onPress={() => dispatch(SetTotal())} />
        <Text>{Total}</Text>
        <Button title="Bill" onPress={handleTotal} />
      </View>

      {/*  </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    /*   alignItems: 'center',
    justifyContent: 'flex-start', */
  },
  content: {
    fontSize: 30,
  },
  card: {
    width: 300,
    height: 190,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  flexbody: {
    color: 'red',
  },
  textInput: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
  },
  cardView:{
    alignItems:'center'
  },
  mainText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  }
});

export default Screen;
