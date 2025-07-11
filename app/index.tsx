import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from "expo-linear-gradient";
import { Link, Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Add authentication logic here
    // For now, just navigate to tabs
    // router.push("/(tabs)");
    router.replace("/(drawer)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false, statusBarStyle: 'dark' }} />

      <LinearGradient
        colors={["#d5ff80", "#80bfff"]}
        style={{ flex: 1, padding: 20, gap: 30, justifyContent: "center" }}
        start={{ x: 0.9, y: 0.2 }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1F3C5F" }}>
            Login
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5 }}>Don't have an Account?</Text>
            <Link href={"/(screens)/signup"} style={{ color: "blue" }}>Sign Up</Link>
          </View>
        </View>

        <View>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}
            >
              <Fontisto
                name={rememberMe ? "checkbox-active" : "checkbox-passive"}
                size={14}
                color="black"
              />
              <Text>Remember me</Text>
            </TouchableOpacity>
            <Text style={{ color: "blue" }}>Forgot Password?</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Log In</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <Text style={{ marginHorizontal: 10, color: "black" }}>or</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>

        <View style={{ gap: 12 }}>
          <TouchableOpacity style={styles.otherLoginContainer} onPress={() => router.push("/(tabs)")}>
            <Image
              source={require("@/assets/icons/google.png")}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherLoginContainer} onPress={() => router.push("/(tabs)")}>
            <Image
              source={require("@/assets/icons/facebook.png")}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1F3C5F",
    padding: 15,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1,
    alignItems: "center",
    marginTop: 10,
  },
  otherLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 10,
    paddingVertical: 15,
    opacity: 0.8
  },
});