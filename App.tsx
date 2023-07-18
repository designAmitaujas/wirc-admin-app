/* import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import AppLoading from "expo-app-loading";
import Routes from "./src/Routes";
import { SafeAreaView } from "react-native";

const App = () => {
  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const theme = extendTheme({
    fontConfig: {
      quicksand: {
        300: {
          normal: "Quicksand_300Regular",
        },
        400: {
          normal: "Quicksand_400Regular",
        },
        500: {
          normal: "Quicksand_500Medium",
        },
        600: {
          normal: "Quicksand_600SemiBold",
        },
        700: {
          normal: "Quicksand_700Bold",
        },
      },
    },
    fonts: {
      heading: "quicksand",
      body: "quicksand",
      mono: "quicksand",
    },
    colors: {
      black: {
        50: "#eceef9",
        100: "#c5cbec",
        200: "#D3D3D3",
        300: "#808080",
        400: "#696969",
        500: "#5263c6",
        600: "#313031",
        700: "#4B4953",
        800: "#322E32",
        900: "#211F21",
      },
    },
  });

  if (fontsLoaded === false) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar hidden={false} />
              <Routes />
            </SafeAreaView>
          </NavigationContainer>
        </NativeBaseProvider>
      </>
    );
  }
};

export default App; */

import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

import "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import AppLoading from "expo-app-loading";
import Routes from "./src/Routes";
import { SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const App = () => {
  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const theme = extendTheme({
    fontConfig: {
      quicksand: {
        300: {
          normal: "Quicksand_300Regular",
        },
        400: {
          normal: "Quicksand_400Regular",
        },
        500: {
          normal: "Quicksand_500Medium",
        },
        600: {
          normal: "Quicksand_600SemiBold",
        },
        700: {
          normal: "Quicksand_700Bold",
        },
      },
    },
    fonts: {
      heading: "quicksand",
      body: "quicksand",
      mono: "quicksand",
    },
    colors: {
      black: {
        50: "#eceef9",
        100: "#c5cbec",
        200: "#D3D3D3",
        300: "#808080",
        400: "#696969",
        500: "#5263c6",
        600: "#313031",
        700: "#4B4953",
        800: "#322E32",
        900: "#211F21",
      },
    },
  });
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (fontsLoaded === false) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer onReady={onLayoutRootView}>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar hidden={false} />
              <Routes />
            </SafeAreaView>
          </NavigationContainer>
        </NativeBaseProvider>
      </>
    );
  }
};

export default App;
