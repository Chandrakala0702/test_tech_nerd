import React, { useEffect, useState } from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import NavigatorContainer from "./navigation/NavigatorContainer";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import userReducer from "./store/reducer/user";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`splash screen success after 30 seconds`))
  .catch(console.warn);

const rootReducer = combineReducers({
  user: userReducer,
});

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-extra-bold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "open-sans-semi-italic": require("./assets/fonts/OpenSans-SemiboldItalic.ttf"),
  });
};
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 30000);
  }, []);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigatorContainer />
    </Provider>
  );
}
