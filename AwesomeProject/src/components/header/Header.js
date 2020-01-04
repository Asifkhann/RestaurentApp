import React, {Component} from 'react';
import {View, Image, Picker, StyleSheet} from 'react-native';
import logo from '../../images/logo.jpeg';

class Header extends Component {
  state = {
    language: 'New Jersey',
  };

  render() {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 150}}
          onValueChange={itemValue => this.setState({language: itemValue})}>
          <Picker.Item label="New York " value="New York " />
          <Picker.Item label="New Jersey" value="New Jersey" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 55,
  },
});

export default Header;
