import React from 'react';
import {View, StyleSheet} from 'react-native';

const container = props => {
  return <View style={styles.view}>{props.children}</View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#151515',
  },
});

export default container;
