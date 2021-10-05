import { StyleSheet, Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import colors from "../../../resources/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: colors.primaryBlue,
    fontWeight: "bold",
    fontSize: RFValue(30),
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  btnStyle: {
    backgroundColor: colors.white,
  },
  btnStyle2: {
    marginTop: 20,
  },
  btnTextStyle: {
    color: colors.primaryBlue,
  },
  bottomView: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },
});
