import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class EsqueciSenha extends React.Component {
  static navigationOptions = {
    title: 'EsqueciSenha',
  };

  constructor(props){
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Para recuperar sua senha, basta informar seu email:</Text>

        <TextInput style={styles.input}
          keyboardType='email-address'
          placeholder='E-mail'
          onChangeText={(text) => this.setState({email:text})}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this._handlePress()}
        >
           <Text style={styles.textButton}> Recuperar  </Text>
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
});