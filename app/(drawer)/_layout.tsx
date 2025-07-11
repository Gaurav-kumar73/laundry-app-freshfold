import { Drawer } from "expo-router/drawer";
import { Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{drawerStyle:{width:280}}}>
        <Drawer.Screen
          name="(tabs)"
          
          options={{
            title: "Home",
            headerTitle: "",
            drawerPosition: "right",
            headerLeft: () => (
              <Image
                source={require("@/assets/axtra/logo.png")}
                style={{ width: 100, height: 100, marginLeft: 10 }}
                resizeMode="contain"
              />
            ),
          }}
        />


        {/* <Drawer.Screen name="news" /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
