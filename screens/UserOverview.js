import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../components/ListItem";
import Colors from "../constants/Colors";
import * as userActions from "../store/actions/user";

const UserOverview = (props) => {
  const usersList = useSelector((state) => state.user.users);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(userActions.fetchUsers());
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, [dispatch, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadUsers().then(() => {
      setIsLoading(false);
    });
  }, [loadUsers]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error occured while fetching the users!!!</Text>
        <Button title="Try Again" onPress={loadUsers} color={Colors.primary} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && usersList.length === 0) {
    return (
      <View>
        <Text>No Users found!!</Text>
      </View>
    );
  }

  const onSelectItem = (id, name) => {
    props.navigation.navigate("UserDetails", { id: id, name: name });
  };

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={usersList}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ListItem
            name={itemData.item.name}
            onPress={() => {
              onSelectItem(itemData.item.id, itemData.item.name);
            }}
          />
        )}
      />
    </View>
  );
};

UserOverview.navigationOptions = (navData) => {
  return { headerTitle: "Users" };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserOverview;
