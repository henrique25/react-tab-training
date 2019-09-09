import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Tab from './tab';

class panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {id: 1, texto: 'Tab 1', active: props.activeTab === 1},
        {id: 2, texto: 'Tab 2', active: props.activeTab === 2},
        {id: 3, texto: 'Tab 3', active: props.activeTab === 3},
        {id: 4, texto: 'Tab 4', active: props.activeTab === 4},
      ],
      changeTab: props.changeTab,
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(id) {
    const tabs = this.state.tabs.map(element => {
      element.active = element.id === id ? true : false;
      return element;
    });

    this.state.changeTab(id);

    this.setState({
      tabs,
    });
  }

  render() {
    return (
      <View style={styles.painel}>
        {this.state.tabs.map(element => {
          return (
            <Tab
              id={element.id}
              texto={element.texto}
              active={element.active}
              onPress={this.changeTab}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  painel: {
    backgroundColor: 'rgb(205, 143, 41)',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    display: 'flex',
  },
});

export default panel;
