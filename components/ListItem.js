import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const ListItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.itemContainer}
      onPress={props.onPress}
    >
      <View style={styles.actions}>
        <Text style={styles.user}>{props.name}</Text>
        <Ionicons name="md-arrow-forward" size={18} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#afafaf",
    elevation: 3,
    shadowColor: "#afafaf",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    padding: 20,
    marginVertical: 5,
    backgroundColor: "white",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  user: {
    fontFamily: "open-sans-regular",
  },
});

export default ListItem;
