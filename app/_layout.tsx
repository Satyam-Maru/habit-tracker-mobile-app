import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [animationFinished, setAnimationFinished] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, []);

  if (animationFinished) {
    return <Stack screenOptions={{ headerShown: false }} />;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <LottieView
        source={require("../assets/lottie-animation/Tree.json")}
        autoPlay
        loop={false}
        resizeMode="center"
        onAnimationFinish={() => setAnimationFinished(true)}
        style={styles.lottie}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
});
