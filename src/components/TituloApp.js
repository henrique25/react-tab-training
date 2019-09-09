import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TituloApp = () => {
  return (
    <View style={styles.titulo}>
      <Text style={styles.texto}>Nome do meu Aplicativo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    backgroundColor: '#151515',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    display: 'flex',
  },
  texto: {
    display: 'flex',
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Ink Free',
    color: 'rgb(205, 143, 41)',
  },
});

export default TituloApp;
