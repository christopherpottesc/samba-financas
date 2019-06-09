import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, TextInput } from 'react-native';

const baseUrlAxios = 'https://sambafinancas-api.herokuapp.com/lancamento/'

export default class Receita extends React.Component {
  static navigationOptions = {
    title: 'Receitas',
    icon: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      tipo: '',
      valor: ''
     };
     this.getData()
  }

  getData = async () => {
    this.setState({
      email: await AsyncStorage.getItem('tipo'),
      phone: await AsyncStorage.getItem('valor'),
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
      }),
    })
    console.log(results)

    navigate('Receita')
  }

  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.textButton}>Cadastre uma nova Receita </Text>

        <TextInput style={styles.input} 
          placeholder='Tipo de receita'
          onChangeText={(text) => this.setState({tipo:text})}
        />
        {/* <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Serviço prestado" value="servico" />
          <Picker.Item label="Venda de Site" value="test0" />
          <Picker.Item label="Manutenção de PC" value="test1" />
          <Picker.Item label="Entrega de moto" value="test2" />
          <Picker.Item label="Aula particular" value="test3" />
        </Picker> */}
        
        <TextInput style={styles.input} 
          placeholder='Valor'
          keyboardType='number-pad'
          onChangeText={(text) => this.setState({valor:text})}
        />
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._handlePress()}
        >
        <Text style={styles.textButton}> Salvar </Text>
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
    width: '50%',
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