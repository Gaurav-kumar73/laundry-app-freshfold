import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarStyle: "dark" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(drawer)" />
      {/* <Stack.Screen name="(tabs)" /> */}
    </Stack>
  );
}
