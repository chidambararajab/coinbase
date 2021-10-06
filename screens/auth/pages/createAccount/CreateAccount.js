import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import { styles } from "../styles";
import { Button } from "../../../../components";

const CreateAccount = (props) => {
  const { navigation } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.mainView}>
        <View>
          <Text style={styles.textStyle}>Create Your Account!</Text>
          <View>
            <Text style={styles.setMargin}>First Name</Text>
            <TextInput
              value={firstName}
              placeholder="Chidambararaja"
              style={styles.textInputStyle}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export { CreateAccount };
