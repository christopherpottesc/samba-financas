import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Button } from 'react-native';
import axios from 'axios';

const baseUrlAxios = 'https://sambafinancas-api.herokuapp.com/login'


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _handlePress = async () => {
    const {navigate} = this.props.navigation
    const results = await fetch(baseUrlAxios, {
      method: 'POST',headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: '',
        email: this.state.email,
        password: this.state.password,
      }),
    })
    console.log(results)

    navigate('Dashboard')
  }



  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input}
          keyboardType='email-address'
          placeholder='E-mail'
          onChangeText={(text) => this.setState({email:text})}
        />

        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder='Senha'
          onChangeText={(text) => this.setState({password:text})}
        />


        <TouchableOpacity
          style={styles.button}
          onPress={() => this._handlePress()}
        >
           <Text style={styles.textButton}> Login  </Text>
        </TouchableOpacity> 

       
        <TouchableOpacity
          style={styles.buttonPassword}
          onPress={() => this.props.navigation.navigate('EsqueciSenha')}>
          <Text style={styles.textbuttonPassword}> Esqueci minha senha  </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  input: {
    width: '90%',
    padding: 10,
    margin: 10,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 30,
    borderRadius: 50,
    width: 200
  },
  textButton: {
    fontSize: 20
  },
  buttonPassword: {
    backgroundColor: 'transparent',
    color: 'black'
  },
  textbuttonPassword: {
    paddingTop: 15,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  
});