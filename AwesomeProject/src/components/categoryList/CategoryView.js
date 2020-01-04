import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {listCategoryId} from '../../../store/actions/actions';
import Spinner from '../spinner/Spinner';
import RestaurentImage from '../image/RestaurentImage';
import RestaurentDes from '../restaurentDes/RestaurentDes';
import RestaurentAddress from '../restaurentAddress/RestaurentAddress';

class CategoryDetails extends Component {
  componentDidMount() {
    const id = JSON.stringify(this.props.navigation.getParam('id'));
    this.props.listCategoryId(id);
  }

  render() {
    const {navigation, data, categoryListFetched} = this.props;

    if (!categoryListFetched) {
      return <Spinner />;
    }

    return (
      <View style={styles.main}>
        {data.length > 0 &&
          data.map((content, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('CategoryDetails', {
                    data: content.restaurant,
                  })
                }>
                <View style={styles.mainwrapper}>
                  <View style={styles.wrapper}>
                    <RestaurentImage
                      imageStyle={styles.wrapperImage}
                      thumbUrl={content.restaurant.thumb}
                    />
                    <RestaurentDes
                      name={content.restaurant.name}
                      cost={content.restaurant.average_cost_for_two}
                      rating={content.restaurant.user_rating.aggregate_rating}
                      cuisines={content.restaurant.cuisines}
                    />
                  </View>
                  <RestaurentAddress
                    address={content.restaurant.location.address}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  mainwrapper: {
    borderTopWidth: 1,
    padding: 10,
    flex: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  wrapperImage: {
    width: 150,
    height: 100,
  },
});

const mapStateToProps = state => {
  return {
    categoryListFetched: state.ui.restaurentUiReducer.categoryListFetched,
    data: state.entities.restaurentReducer.categroyListData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listCategoryId: id => dispatch(listCategoryId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
