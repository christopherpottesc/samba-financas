import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default class Ajuda extends React.Component {
  static navigationOptions = {
    title: 'Ajuda',
    icon: ''
  };

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <View>
        <Text style={styles.title}> Estamos aqui para te ajudar! </Text>
          <View style={styles.container}>
            <Text style={styles.subtitle}>1 - O que é o Samba Finanças?</Text>
            <Text style={styles.resposta}>Um App para ajuda no seu controle financeiro do dia-a-dia</Text>
            <Text style={styles.subtitle}>2 - Meus dados inseridos no cadastro estão seguros?</Text>
            <Text style={styles.resposta}>Sim! Todos os dados estão seguros, principalmente a senha cadastrada</Text>
            <Text style={styles.subtitle}>3 - Se eu perder meu celular o que acontece?</Text>
            <Text style={styles.resposta}>Basta acessar nosso site e alterar a senha, automáticamente será deslogado dos 
              outros locais</Text>
            <Text style={styles.subtitle}>4 - Qual é o valor pelo uso do Aplicativo</Text>
            <Text style={styles.resposta}>O aplicativo é completamente gratuíto!</Text>
            <Text style={styles.subtitle}>5 - Como eu converso com um dos atendentes?</Text>
            <Text style={styles.resposta}>Pelo Telefone: 0800-40028922 ou pelo E-mail: sambafincancas@gmail.com</Text>
            
          </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  scroll: {
    paddingBottom: 100
  },
  subtitle: {
    fontSize: 20,
    paddingLeft: 10
  },
  resposta: {
    fontSize: 18,
    color: 'red',
    padding: 10
  }
});