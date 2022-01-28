import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput,Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Bill = () => {
  const name = useSelector(state => state.name);
  const countA = useSelector(state => state.countA);
  const countB = useSelector(state => state.countB);
  const Total = useSelector(state => state.Total);
  const ProductA = useSelector(state => state.ProductA);
  const ProductB = useSelector(state => state.ProductB);

  return (
    <View style={styles.body}>
    <View style={styles.mainImage}>
    <Image style={styles.image} source={require('../res/cart.png')} />
    </View>

    <View style={styles.card}>

    
      <Text style={styles.mainTitle}>Here Your Bill , {name}</Text>

      {countA != 0 ? (
        <View style={styles.row}>
          <Text style={styles.price}>ProductA   Unit - ${ProductA}</Text>
          <Text style={styles.price}>{countA}</Text>
          <Text style={styles.price}>= {ProductA * countA}</Text>
        </View>
      ) : null}
      {countB != 0 ? (
        <View style={styles.row}>
          <Text style={styles.price}>ProductB   Unit - ${ProductB}</Text>
          <Text style={styles.price}>{countB}</Text>
          <Text style={styles.price}>= {ProductB * countB}</Text>
        </View>
      ) : null}

      <View style={styles.row}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}> ${Total}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
  content: {
    fontSize: 30,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'black',
    width: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  mainTitle:{
    textAlign:'center',
    fontSize:30,
    color:'#544c4c',
    fontWeight:'bold',
    marginBottom:10
  },
  total:{
    fontSize:30,
    fontWeight:'bold',
  },
  price:{
    fontSize:25
  },
  card:{
    height: 220,
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

  },image:{
    width:230,
    height:230,  
  },
  mainImage:{
    alignItems:'center'
  }
});
export default Bill;
