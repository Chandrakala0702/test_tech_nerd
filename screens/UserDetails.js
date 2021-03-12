import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import DetailsItem from "../components/DetailsItem";

const UserDetails = (props) => {
  const id = props.navigation.getParam("id");
  const userDetails = useSelector((state) =>
    state.user.users.filter((user) => user.id === id)
  );

  return (
    <View style={styles.container}>
      <DetailsItem label="Name:" value={userDetails[0].name} />
      <DetailsItem label="Username:" value={userDetails[0].username} />
      <DetailsItem label="Email:" value={userDetails[0].email} />
      <DetailsItem label="Phone:" value={userDetails[0].phone} />
      <DetailsItem label="Website:" value={userDetails[0].website} />
      <DetailsItem
        label="Address:"
        value={userDetails[0].address}
        id="address"
      />
      <DetailsItem
        label="Company:"
        value={userDetails[0].company}
        id="company"
      />
    </View>
  );
};

UserDetails.navigationOptions = (navData) => {
  const title = navData.navigation.getParam("name");
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    borderRadius: 2,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: "50%",
  },
});
export default UserDetails;
