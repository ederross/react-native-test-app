import React from 'react';

import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

// import { Container } from './styles';

export default class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
