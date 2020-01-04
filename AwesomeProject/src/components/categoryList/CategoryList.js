import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../header/Header';
import {connect} from 'react-redux';
import {
  listCategoryId,
  listCategorySearch,
} from '../../../store/actions/actions';
import CategoryView from './CategoryView';

class CategoryDetails extends Component {
  state = {
    text: '',
  };

  searchRestaurent = text => {
    this.setState({text});
    if (text.length >= 2) {
      this.props.listCategorySearch(text);
    }
  };

  static navigationOptions = {
    headerRight: () => <Header />,
  };

  render() {
    const {text} = this.state;
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.main}>
          <Icon name="search" size={18} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search...."
            onChangeText={text => this.searchRestaurent(text)}
            value={text}></TextInput>
        </View>
        <CategoryView navigation={navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchInput: {
    paddingLeft: 20,
    fontSize: 18,
  },
});

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    listCategoryId: id => dispatch(listCategoryId(id)),
    listCategorySearch: text => dispatch(listCategorySearch(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
