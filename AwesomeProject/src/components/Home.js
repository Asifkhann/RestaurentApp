import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Category from './category/Category';
import CategoryList from './categoryList/CategoryList';
import CategoryDetails from './categoryDetails/CategoryDetails';
import {createStackNavigator} from 'react-navigation-stack';
import Header from './header/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight: () => <Header />,
  };

  render() {
    return <Category navigation={this.props.navigation} />;
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class LoginsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login Page</Text>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>About Us</Text>
      </View>
    );
  }
}

const Project = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  CategoryList: {screen: CategoryList},
  CategoryDetails: {screen: CategoryDetails},
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: Project,
    About: AboutScreen,
    Logins: LoginsScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Settings') {
          iconName = 'cogs';
        } else if (routeName === 'About') {
          iconName = 'user';
        } else if (routeName === 'Logins') {
          iconName = 'sign-in-alt';
        }
        return <Icon name={iconName} size={25} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
