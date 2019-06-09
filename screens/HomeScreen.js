import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Bikeeper</Text>

        <Image
          source={
            __DEV__
              ? require('../assets/images/robot-dev.png')
              : require('../assets/images/robot-prod.png')
          }
          style={styles.welcomeImage}
        />

        <Text style={styles.subtitle}>App que vai ajudar você a andar mais de Bike!</Text>
        
        <View style={styles.icons}>
          <Image
            style={styles.icon}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />

        <Image
          style={styles.icon}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

        <Image
          style={styles.icon}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

        <Image
          style={styles.icon}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        
        </View>
        
        <View style={styles.containerButton}>
      
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
           <Text style={styles.textButton}> Login  </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Cadastro')}>
           <Text style={styles.textButton}> Cadastro  </Text>
          </TouchableOpacity> 

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
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
  },
  icon:{
    width: 50,
    height: 50,
    margin: 10
  },
  icons:{
    flexDirection: 'row'
  },
  containerButton:{
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 15,
    borderRadius: 50,
    width: 200
  },
  textButton: {
    fontSize: 20
  }
});
