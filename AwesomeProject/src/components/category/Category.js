import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {listCategory} from '../../../store/actions/actions';
import bg from '../../images/bg.jpg';
import Spinner from '../spinner/Spinner';

class Category extends Component {
  componentDidMount() {
    this.props.listCat();
  }

  render() {
    const {categoryFetched, navigation, data} = this.props;

    if (!categoryFetched) {
      return <Spinner />;
    }

    return (
      <ScrollView>
        {data.map((data, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={.9}
            onPress={() =>
              navigation.navigate('CategoryList', {id: data.categories.id})
            }>
            <ImageBackground source={bg} style={styles.categoryList}>
              <Text style={styles.text}>{data.categories.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoryList: {
    display: 'flex',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {
    categoryFetched: state.ui.categoryUiReducer.categoryFetched,
    data: state.entities.categoryReducer.categroyData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listCat: () => dispatch(listCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
