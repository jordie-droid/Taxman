/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({navigation}) => {
  const [isRemeberMe, setIsRemeberMe] = useState();

  const allowRemeberMe = () => {
    setIsRemeberMe(previous => !previous);
  };

  const authenticate = () => {
    navigation.replace('Home');
    console.log('aaaa');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.invitationText}>
        Connectez-vous à votre espace de gestion des véhicules et recettes
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.icons}
            source={require('../assets/icons/solar_user-outline.png')}
          />
        </View>
        <TextInput placeholder="Nom d'utilisateur" style={styles.inputField} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.icons}
            source={require('../assets/icons/formkit_password.png')}
          />
        </View>
        <TextInput
          style={styles.inputField}
          placeholder="Mot de passe"
          secureTextEntry
        />
      </View>
      <View style={styles.remeberingText}>
        <Text style={styles.switchText}> Se souvenir de moi</Text>
        <Switch
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isRemeberMe ? '#FCB117' : '#f4f3f4'}
          ios_backgroundColor="#FCB117"
          onValueChange={allowRemeberMe}
          value={isRemeberMe}
        />
      </View>
      <Text style={styles.forgotPasswordLink}>Mot de passe oublier ? </Text>
      <View style={styles.signin} onStartShouldSetResponder={authenticate}>
        <TouchableOpacity>
          <Text style={styles.signin.font}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signup}>
        <TouchableOpacity>
          <Text style={styles.signup.font}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logo: {
    marginTop: 50,
  },
  invitationText: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  remeberingText: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  switchText: {
    marginRight: 10,
    color: '#FCB117',
    fontWeight: '600',
  },
  forgotPasswordLink: {
    marginRight: 10,
    color: '#FCB117',
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  inputContainer: {
    border: 'solid',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '95%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
    left: -20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  icons: {
    width: 20,
    height: 20,
  },
  inputField: {
    width: '90%',
    position: 'absolute',
    marginLeft: 25,
  },
  signin: {
    font: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    backgroundColor: '#FCB117',
    width: '100%',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  signup: {
    font: {
      color: '#FCB117',
      fontWeight: 'bold',
      fontSize: 17,
    },
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%',
    height: 50,
    shadowColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2,
    shadowRadius: 1.41,
    elevation: 5,
  },
});

export default Login;
