import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  BackHandler,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  SetProductACount,
  SetProductBCount,
  SetTotal,
  SetIncrement,
  SetDecrement,
  SetIncrementB,
  SetDecrementB,
} from './reducer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Screen = ({navigation}) => {
  const name = useSelector(state => state.name);
  const countA = useSelector(state => state.countA);
  const countB = useSelector(state => state.countB);
  const Total = useSelector(state => state.Total);
  const [productA, setProductA] = useState(1);
  const [productB, setProductB] = useState(1);
  const dispatch = useDispatch();

  const handleTotal = () => {
    dispatch(SetTotal());
    navigation.navigate('Bill');
  };

  return (
    <ScrollView style={styles.body}>
      <View>
        <Text style={styles.mainText}>Hi, {name}</Text>
      </View>
      <View style={styles.cardView}>
        <View style={styles.card}>
          <View style={styles.productImage}>
            <Image
              style={styles.image}
              source={require('../res/Product1.png')}
            />
          </View>
          <Text style={styles.price}>$20.00</Text>
          <Text style={styles.itemText}>Be Delicious and Fresh Blossom</Text>
          <Text style={styles.itemText}>50ml</Text>

          <View style={styles.controllerView}>
            <View style={styles.priceView}>
              <FontAwesome5
                name="plus-square"
                size={30}
                color="white"
                onPress={() => setProductA(productA + 1)}
              />
              <Text style={styles.controller}>{productA}</Text>
              <FontAwesome5
                name="minus-square"
                size={30}
                color="white"
                onPress={() => setProductA(productA - 1)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(SetProductACount(productA))}>
            <Text style={styles.buttonText}>Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardView}>
        <View style={styles.card}>
          <View style={styles.productImage}>
            <Image
              style={styles.image}
              source={require('../res/Product2.png')}
            />
          </View>

          <Text style={styles.price}>$30.00</Text>
          <Text style={styles.itemText}>CHANEL ALLURE HOMME SPORT</Text>
          <Text style={styles.itemText}>50ml</Text>

          <View style={styles.controllerView}>
            <View style={styles.priceView}>
              <FontAwesome5
                name="plus-square"
                size={30}
                color="white"
                onPress={() => setProductB(productB + 1)}
              />
              <Text style={styles.controller}>{productB}</Text>
              <FontAwesome5
                name="minus-square"
                size={30}
                color="white"
                onPress={() => setProductB(productB - 1)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(SetProductBCount(productB))}>
            <Text style={styles.buttonText}>Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.billButton} onPress={handleTotal}>
        <Text style={styles.buttonText}>Create Bill</Text>
        <FontAwesome5  name='shopping-cart' size={30} color='white'/>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#8FD3FE',
    /*   alignItems: 'center',
    justifyContent: 'flex-start', */
  },
  content: {
    fontSize: 30,
  },
  card: {
    width: 300,
    height: 450,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingLeft: 14,
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
  cardView: {
    alignItems: 'center',
  },
  mainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    color:'white'
  },
  image: {
    width: 200,
    height: 200,
    alignContent: 'center',
  },
  productImage: {
    alignItems: 'center',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#122636',
    padding: 10,
    borderRadius: 8,
  },
  controller: {
    fontSize: 25,
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
  },
  controllerView: {alignItems: 'center'},
  button: {
    alignItems: 'center',
    backgroundColor: '#4FA2D2',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  billButton: {
    alignItems: 'center',
    backgroundColor: '#514EB6',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    marginLeft:20,
    marginRight:20,
    marginBottom:40
  },
});

export default Screen;
