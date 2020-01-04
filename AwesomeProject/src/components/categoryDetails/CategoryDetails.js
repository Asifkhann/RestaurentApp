import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import RestaurentImage from '../image/RestaurentImage';
import RestaurentAddress from '../restaurentAddress/RestaurentAddress';
import RestaurentList from '../restaurentList/RestaurentList';
import RestaurentLink from '../restaurentLink/RestaurentLink';

class CategoryDetails extends Component {
  render() {
    const data = this.props.navigation.getParam('data');

    return (
      <ScrollView>
        <View style={styles.mainWrapper}>
          <Text style={styles.resName}>{data.name}</Text>
          <RestaurentImage imageStyle={styles.image} thumbUrl={data.thumb} />
          <RestaurentAddress address={data.location.address} />
          <RestaurentList
            listStyle={styles.list}
            title="Timings:"
            data={data.timings}
          />
          <RestaurentList
            listStyle={styles.list}
            title="Phone:"
            data={data.phone_numbers}
          />
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Highlights:</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {data.highlights.map((data, index) => (
                <RestaurentList
                  listStyle={styles.listStyle}
                  key={index}
                  title="."
                  data={data}
                />
              ))}
            </View>
          </View>
          <RestaurentLink
            title="Menu List:"
            des="Click here"
            linkUrl={data.menu_url}
          />
          <RestaurentLink
            title="Event List:"
            des="Click here"
            linkUrl={data.events_url}
          />
          <RestaurentLink
            title="Order Details:"
            des="Click here"
            linkUrl={data.order_url}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>All Reviews:</Text>
            {data.all_reviews.reviews.map(data =>
              data.review.map((dat, index) => <Text key={index}>{dat}</Text>),
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 5,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  },
  resName: {
    fontSize: 18,
  },
  list: {
    fontSize: 18,
  },
  listStyle: {
    width: '50%',
  },
});

export default CategoryDetails;
