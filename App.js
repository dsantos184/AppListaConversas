/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
} from 'react-native';

import ListItem from './src/component/ListItem';

export default class App extends Component
{
  constructor(props)
  {
    super(props)

    this.state = {list:[
      {
        key:1, 
        img:'https://www.b7web.com.br/avatar3.png',
        nome: 'Marilha', 
        mensagem: 'Bom dia!',
        sexo: 'F', 
      },

      {
        key:2, 
        img:'https://www.b7web.com.br/avatar2.png',
        nome: 'Diego', 
        mensagem: 'Fala Mula!',
        sexo: 'M',
      },

      {
        key:3, 
        img:'https://www.b7web.com.br/avatar1.png',
        nome: 'Pai', 
        mensagem: 'oi',
        sexo: 'M',
      },

      {
        key:4, 
        img:'https://www.b7web.com.br/avatar2.png',
        nome: 'André', 
        mensagem: 'Tricolor',
        sexo: 'M',
      },

      {
        key:5, 
        img:'https://www.b7web.com.br/avatar3.png',
        nome: 'Magrela', 
        mensagem: 'Tudo Bem ?',
        sexo: 'F',
      },

      {
        key:6, 
        img:'https://www.b7web.com.br/avatar3.png',
        nome: 'Marilha', 
        mensagem: 'Beijos',
        sexo: 'F',
      },
    ]};
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item})=><ListItem  data={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    marginTop: Platform.select({
      ios: 20,
      android: 0
    })
  },  
})