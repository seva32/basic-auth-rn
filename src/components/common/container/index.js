import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
/**
 * @param  {} style to override styles from the instance, <Container style={{padding: 40}}>...
 * @param  {} children
 */
const Container = ({ style, children }) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default Container;
