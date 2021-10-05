import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

import { styles } from "./styles";

const Button = (props) => {
  const { title, icon, disabled, btnStyle, onPress, btnTextStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled}
      style={[styles.btnContainer, btnStyle]}
    >
      {title && (
        <Text
          style={[styles.btnText, btnTextStyle, { marginRight: icon ? 10 : 0 }]}
        >
          {title}
        </Text>
      )}
      {icon && (
        <Image source={icon} resizeMode="contain" style={styles.iconStyle} />
      )}
    </TouchableOpacity>
  );
};

export { Button };
