import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

const baseUrlAxios = 'https://sambafinancas-api.herokuapp.com/usuario/'


export default class CadastroScreen extends React.Component {
  static navigationOptions = {
    title: 'Cadastro',
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      email: '',
      phone: '',
      password: '',
      confirm_password: ''
     };
     this.getData()
  }

  getData = async () => {
    this.setState({
      email: await AsyncStorage.getItem('email'),
      phone: await AsyncStorage.getItem('phone'),
      password: await AsyncStorage.getItem('password'),
      confirm_password: await AsyncStorage.getItem('confirm_password') 
    });
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
        phone: this.state.phone,
        password: this.state.password,
        confirm_password: this.state.confirm_password
      }),
    })
    console.log(results)

    navigate('Login')
  }

  // _handlePress() {
  //   console.log(this.state.email);
  //   console.log(this.state.phone);
  //   console.log(this.state.password);
  //   console.log(this.state.confirm_password);

  //   alert('Conta criada com sucesso ' + this.state.email + ', seja bem vindo!');

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input}
          keyboardType='email-address'
          placeholder='E-mail'
          onChangeText={(text) => this.setState({email:text})}

        />

        <TextInput style={styles.input} 
          keyboardType='number-pad'
          placeholder='Telefone'
          onChangeText={(text) => this.setState({phone:text})}
        />

        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder='Senha'
          onChangeText={(text) => this.setState({password:text})}

        />

        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder='Repetir senha'
          onChangeText={(text) => this.setState({confirm_password:text})}
        />

        <CheckBox
          title='Li e aceito os termos de uso'
          onPress={() => this.setState({
            checked: !this.state.checked
          })}
          checked={this.state.checked}
        />


        <TouchableOpacity
          style={styles.button}
          onPress={() => this._handlePress()}
        >
           <Text style={styles.textButton}> Cadastro </Text>
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
  }
});
