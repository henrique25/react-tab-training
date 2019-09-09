import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 23,
    fontFamily: 'Arial Narrow',
    color: '#f22356',
  },
  input: {
    fontSize: 23,
    fontFamily: 'Arial Narrow',
    color: '#f22356',
  },
});

export default props => {
  switch (props.activeTab) {
    case 1:
      return (
        <View>
          <Text style={styles.buttonText}>Essa é a página 1</Text>
        </View>
      );
    case 2:
      return (
        <View>
          <Text style={styles.buttonText}>Essa é a página 2</Text>
        </View>
      );
    case 3:
      return (
        <View>
          <Text style={styles.buttonText}>Essa é a página 3</Text>
        </View>
      );
    default:
      return (
        <View>
          <Text style={styles.buttonText}>Essa é a página 4 doido</Text>
          <TextInput placeholder="Motherfucker" style={styles.input} />
        </View>
      );
  }
};
