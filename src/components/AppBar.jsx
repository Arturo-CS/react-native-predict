import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import theme from '../theme.js';
import { Link, useLocation } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
  },
  scroll: {
    paddingVertical: 15,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  text: {
    color: theme.appBar.textSecondary,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

const AppBar = () => {
  const { pathname } = useLocation();

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        {pathname.startsWith('/profile/') ? (
          <Link to="/list" component={TouchableWithoutFeedback}>
            <View style={styles.iconContainer}>
              <FontAwesome name="chevron-left" size={20} color={theme.appBar.textSecondary} />
            </View>
          </Link>
        ) : (
          <Link to="/" component={TouchableWithoutFeedback}>
            <View style={styles.iconContainer}>
              <FontAwesome name="chevron-left" size={20} color={theme.appBar.textSecondary} />
            </View>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
