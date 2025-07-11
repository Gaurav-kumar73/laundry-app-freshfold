import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/axtra/logo.png")} style={styles.logo} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={40} />
        </TouchableOpacity>

        <Image
          source={require("@/assets/axtra/avatar.jpg")}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
  logo: {
    width: 150,
    resizeMode: "contain",
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 50,
  },
});
