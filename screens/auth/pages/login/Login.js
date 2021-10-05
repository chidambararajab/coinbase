import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Button } from "../../../../components";
import { styles } from "../styles";

const Login = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainView}>
        <View>
          <Text style={styles.textStyle}>SignIn to coinbase!</Text>
          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Email</Text>
            <TextInput
              style={styles.textInputStyle}
              value={email}
              placeholder="Enter Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.setMargin}>
            <Text style={styles.textStyle1}>Password</Text>
            <TextInput
              style={styles.textInputStyle}
              value={password}
              placeholder="Enter Password"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.flexRowView}>
            <TouchableOpacity style={styles.linkStyle}>
              <Text>Forget password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkStyle}>
              <Text>Privacy policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Button
            title="SignIn"
            disabled={false}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { Login };
