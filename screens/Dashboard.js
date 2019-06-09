import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CheckBox, Tooltip, Button } from 'react-native-elements';


export default class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
    icon: ''
  };

  constructor(props) {
    super(props);
    this.state = { 
      receita: false,
      despesa: false,
      receitaDespesa: false,
      date: Date,
    };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Data Atual: {this.state.date} </Text>

        <Image source={ require('../assets/images/grafico.png')} />

        <View style={styles.legenda}>          
          <Text> Receitas </Text>
          <Text> Despesas </Text>
        </View>
        
        <View style={styles.radioButtons}> 
          <CheckBox
            title='Receitas'
            onPress={() => this.setState({
              receita: !this.state.receita
            })}
            checked={this.state.receita}
          />

          <CheckBox
            title='Despesas'
            onPress={() => this.setState({
              despesa: !this.state.despesa
            })}
            checked={this.state.despesa}
          />

          <CheckBox
            title='Receitas e Despesas'
            onPress={() => this.setState({
              receitaDespesa: !this.state.receitaDespesa
            })}
            checked={this.state.receitaDespesa}
          />
        </View>
      
        <View style={styles.viewButton}>
          <Tooltip popover={<TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('Receita')}>
             <Text style={styles.textButton}> Receita  </Text>
            </TouchableOpacity>}>
            <Text style={styles.buttonAdd}>+</Text>
          </Tooltip>
        </View>
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
  legenda: {
    paddingTop: 10
  },
  viewButton: {

  },
  buttonAdd: {
    alignSelf: 'flex-end',
    color: '#fff',
    height: 50,
    textAlign: 'center',
    width: 50,
    fontSize: 32,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50
  }
});