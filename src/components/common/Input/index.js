import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import colors from '../../../assets/theme/colors';

import styles from './styles';

const Input = ({
  onChangeText,
  value,
  style = {},
  label = '',
  icon = null,
  iconPosition = '',
  error = null,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      }
      return 'row-reverse';
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    }
    return colors.grey;
  };

  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
            alignItems: `${icon ? 'center' : 'baseline'}`,
          },
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          // placeholder="useless placeholder"
          // keyboardType="numeric"
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
