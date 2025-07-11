import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarLabelStyle: { fontSize: 12, color:'cyan' },
        tabBarStyle: {
          backgroundColor: "white",
          borderRadius: 12,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 60,
          // justifyContent: "center",
          // alignItems: "center",
          position: "absolute",
          borderWidth: 1,
          borderColor: "#ccc",
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        },
        tabBarActiveTintColor: "#1F3C5F",
        // tabBarActiveBackgroundColor:"#1F3C5F",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "calendar-sharp" : "calendar-sharp"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});