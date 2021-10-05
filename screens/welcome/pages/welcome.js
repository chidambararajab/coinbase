import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { Button } from "../../../components";

export const Welcome = (props) => {
  const { navigation } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.mainView}>
        <Text style={styles.textStyle}>Coinbase!</Text>
        <Text style={styles.textStyle}>Clone</Text>
        {visible && (
          <View style={styles.bottomView}>
            <Button
              title="Get Started"
              disable={false}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
            />
            <Button
              title="SignIn"
              disable={false}
              btnStyle={styles.btnStyle2}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
