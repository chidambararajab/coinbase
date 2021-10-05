import { StyleSheet, Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import colors from "../../resources/colors";

export const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    height: RFValue(50),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.primaryBlue,
  },
  btnText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: RFValue(15),
  },
  iconStyle: {
    height: RFValue(20),
    width: RFValue(25),
    tintColor: colors.white,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
