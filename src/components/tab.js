import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const tab = props => {
  const {id, texto, active: tabAtiva} = props;
  const estilosTab = [styles.tab];
  if (tabAtiva) {
    estilosTab.push(styles.tabAtiva);
  } else {
    estilosTab.push(styles.tabInativa);
  }

  return (
    <TouchableOpacity onPress={() => props.onPress(id)} style={estilosTab}>
      <View>
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 3,
  },
  tabAtiva: {
    borderColor: '#fff',
  },
  tabInativa: {
    borderColor: 'transparent',
  },
  texto: {
    display: 'flex',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
});

export default tab;
