import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default class LoginScreen extends React.Component {
  continue = () => {
    this.props.navigation.navigate('Chat');
  };

  register = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.circle} />
        <View style={{marginTop: 30}} />
        <View style={{marginHorizontal: 32}}>
          <View>
            <Text style={styles.header}>UOA</Text>
            <Text style={styles.header3}>CAMPUS</Text>
            <Text style={[styles.header_below, {marginTop: -11}]}>
              Charity Never be this easy
            </Text>
          </View>
          <View style={styles.mediaImageContainer}>
            <Image
              source={require('../src/images/login_fig.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.header_above}>Sign In</Text>
          <TextInput
            style={[styles.input, {marginTop: 10}]}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={{alignItems: 'center', marginTop: 24}}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <View style={styles.btn}>
                <Text
                  style={[
                    styles.fontStyle,
                    {alignSelf: 'center', fontSize: 16, color: '#fff'},
                  ]}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={[
                styles.header_above,
                {fontSize: 16, color: '#A1A1A1', marginTop: 30},
              ]}>
              Or
            </Text>
            <Text style={[styles.header_above, {fontSize: 20}]}>
              Sign in with
            </Text>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  marginHorizontal: 20,
                  backgroundColor: '#fff',
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  elevation: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../src/images/google.png')}
                    style={([styles.image], {height: 30, width: 30})}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  backgroundColor: '#6475A5',
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Bold',
                      fontSize: 22,
                      color: '#fff',
          
                    }}>
                    f
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={this.register}>
              <Text
                style={[styles.header_below, {fontSize: 17, marginTop: 40, marginBottom: 100}]}>
                Don’t have a account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fontStyle: {
    fontFamily: 'Poppins-Bold',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: 20,
  },
  header: {
    left: 5,
    fontWeight: '800',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: '#42308D',
  },
  header_above: {
    left: 5,
    fontWeight: '800',
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  header_below: {
    left: 5,
    fontWeight: '800',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#C2C2C2',
  },
  header2: {
    left: 5,
    fontWeight: '800',
    fontSize: 27,
    fontFamily: 'Poppins-Bold',
    color: '#5B34FF',
  },
  header3: {
    position: 'absolute',
    top: 13,
    left: 82,
    fontWeight: '800',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#5B34FF',
  },
  input: {
    marginTop: 12,
    height: 55,
    color: '#868686',
    fontSize: 15,
    backgroundColor: '#EBEBEB',
    fontFamily: 'Poppins-Bold',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    borderRadius: 45,
    paddingHorizontal: 26,
  },
  btn: {
    justifyContent: 'center',
    width: 346,
    height: 55,
    color: '#fff',
    fontSize: 15,
    backgroundColor: '#432C9F',
    fontFamily: 'Poppins-Medium',
    borderColor: '#fff',
    borderRadius: 45,
    paddingHorizontal: 26,
  },
  continue: {
    elevation: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaImageContainer: {
    marginTop: 20,
    width: 320,
    height: 160,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});
