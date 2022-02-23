/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import colors from '../../../assets/theme/colors';

import styles from './styles';

const Message = ({
  message,
  info,
  primary,
  secondary,
  danger,
  success,
  retryFn = null,
  onDismiss = null,
  ...props
}) => {
  const [dismissed, setDismissed] = useState(false);

  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };

  if (dismissed) {
    return null;
  }

  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
      {...props}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{ color: colors.white, flex: 1 }}>{message}</Text>
        {typeof retryFn === 'function' && (
          <TouchableOpacity onPress={retryFn}>
            <Text style={{ color: colors.white }}>Retry</Text>
          </TouchableOpacity>
        )}
        {typeof onDismiss === 'function' && (
          <TouchableOpacity
            onPress={() => {
              onDismiss();
              setDismissed(true);
            }}>
            <Text style={{ color: colors.white }}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Message;
