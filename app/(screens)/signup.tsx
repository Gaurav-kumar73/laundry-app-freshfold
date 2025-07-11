import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import { Link, router, Stack } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false,statusBarStyle:'dark' }} />

      <LinearGradient
        colors={["#d5ff80", "#80bfff"]}
        style={{ flex: 1, padding: 20, gap: 20, justifyContent: "center" }}
        start={{ x: 0.9, y: 0.2 }}
      >
        <TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1F3C5F" }}>Sign up</Text>
            <Text>Create an account to continue</Text>
        </View>

        <View>
          <View>
            <Text>Full Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name"
              placeholderTextColor="#ccc"
            />
          </View>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
            />
          </View>
          <View>
            <Text>Phone Number</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginBottom: 15 }}>
              {/* Indian Flag Emoji */}
              <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 6 }}>🇮🇳</Text>
              <Text style={{ fontSize: 16, color: '#333', marginRight: 8 }}>+91</Text>
              <TextInput
                style={[styles.textInput, { flex: 1, marginBottom: 0, borderRadius: 0, borderColor: 'transparent', backgroundColor: 'transparent', paddingHorizontal: 0 }]}
                placeholder="Enter phone Number"
                placeholderTextColor="#ccc"
                keyboardType='phone-pad'
                maxLength={10}
              />
            </View>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Register</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center', gap:5}}>
            <Text>Already have an account?</Text>
            <Link href={"/"} style={{color:"blue"}}>Login</Link>
        </View>


        <View style={{gap:12}}>
          <View style={styles.otherLoginContainer}>
            <Image
              source={require("@/assets/icons/google.png")}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontWeight: "bold", fontSize:15 }}>Continue with Google</Text>
          </View>
          <View style={styles.otherLoginContainer}>
            <Image
              source={require("@/assets/icons/facebook.png")}
              style={{ width: 18, height: 18 }}
            />
            <Text style={{ fontWeight: "bold", fontSize:15 }}>Continue with Facebook</Text>
          </View>
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
    paddingVertical:15,
    opacity:0.8
  },
});
