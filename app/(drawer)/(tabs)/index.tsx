import Header from "@/components/Header";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      {/* <Stack screenOptions={{ statusBarStyle: "dark" }} /> */}
      {/* <StatusBar barStyle="dark-content" /> */}

      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* View 1 */}
        <View style={{ alignItems: "center", marginTop: 20, padding: 20 }}>
          <Text style={styles.title}>
            Hassle-Free Laundry Service at Your Doorstep!
          </Text>
          <Text style={styles.paragraph}>
            We pick up, wash, and deliver your clothes fresh amd clean.
            Experience the convenience of laundry service tailored to your busy
            lifestyle.
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                backgroundColor: "#1F3C5F",
                borderColor: "#1F3C5F",
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
                color: "white",
                borderRadius: 5,
              }}
            >
              Schedule a Pickup
            </Text>
            <Text
              style={{
                borderColor: "#1F3C5F",
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 5,
              }}
            >
              Pickup
            </Text>
          </View>
        </View>

        <Image
          source={require("@/assets/homepage/group1.png")}
          style={[styles.groupImage1, { marginBottom: 10 }]}
        />

        {/* View 2 */}
        <View style={{ alignItems: "center", padding: 15 }}>
            <Text style={styles.title}>Why Our Laundry Service Stands Out</Text>
            <Text style={styles.paragraph}>
              Experience the convenience of our laundry service. We prioritize
              your needs with our reliable and efficient solutions.
            </Text>

          <View style={{padding:10, alignItems:"center"}}>
            <Image
              source={require("@/assets/homepage/image1.jpg")}
              style={styles.image1}
            />
            <Text style={styles.title2}>Free Pickup & Delivery Right to Your Door</Text>
            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Text>
          </View>
          <View style={{padding:10, alignItems:"center"}}>
            <Image
              source={require("@/assets/homepage/image2.jpg")}
              style={styles.image1}
            />
            <Text style={styles.title2}>Affordable Pricing with No Hidden Fees</Text>
            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Text>
          </View>
          <View style={{padding:10, alignItems:"center"}}>
            <Image
              source={require("@/assets/homepage/image3.jpg")}
              style={styles.image1}
            />
            <Text style={styles.title2}>Eco-Friendly Products for a Greener Clean</Text>
            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Text>
          </View>
        </View>

        <View style={{flexDirection:"row", marginBottom:200, justifyContent:"center", gap:20, alignItems:"center"}}>
          <Text style={{borderWidth:1, borderColor:"green", padding:10, borderRadius: 5}}>Learn More</Text>
          <View style={{flexDirection:"row"}}>
            <Text>Sign up</Text>
          <Feather name="chevron-right" size={20}/>
          </View>
        </View>

        {/* View 3 */}
        <View></View>

        <View></View>

        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  groupImage1: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#1F3C5F",
    textAlign: "center",
  },
  paragraph: {
    // marginTop: 6,
    textAlign: "center",
  },
  image1: {
    width: 250,
    height: 150,
    resizeMode: "cover",
  },
  title2:{
    fontWeight: "bold",
    fontSize: 18,
    color: "#1F3C5F",
    textAlign: "center",
  }
});
