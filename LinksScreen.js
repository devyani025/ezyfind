import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>

    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
