import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';

import styles from './styles';

const CustomButton = ({
  title,
  primary,
  secondary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
      disabled={disabled}
      onPress={onPress}
      {...props}>
      <View style={styles.laoderSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text style={{ color: `${disabled ? colors.black : colors.white}` }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
