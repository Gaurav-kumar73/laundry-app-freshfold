import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Schedule() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View style={{ height: 230, width: "100%" }}>
          <Image
            source={require("@/assets/schedule/group1.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        {/* Address Form Container*/}
        <View style={{ alignItems: "center", padding: 20 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 28, color: Colors.primary }}
          >
            Pickup Information
          </Text>

          {/* Form */}
          <View style={{ gap: 6 }}>
            <View>
              <Text>Address</Text>
              <TextInput
                placeholder="House Number / Flat / Block No."
                style={styles.textInput}
              />
            </View>
            <View>
              <Text>Landmark</Text>
              <TextInput
                placeholder="e.g. Near ABC School"
                style={styles.textInput}
              />
            </View>
            <View>
              <Text>Full Name</Text>
              <TextInput placeholder="your name" style={styles.textInput} />
            </View>
            <View>
              <Text>Adress Title</Text>
              <TextInput placeholder="e.g. Home" style={styles.textInput} />
            </View>

            <View>
              <Text>Pickup Date</Text>
              <View style={{ backgroundColor: "#ccc", borderRadius: 5 }}>
                <TextInput
                  placeholder="Pick a date"
                  style={styles.textInput}
                  editable={false}
                  value=""
                />
              </View>
            </View>
            <View>
              <Text>Pickup Time Slot</Text>
              <View style={{ backgroundColor: "#ccc", borderRadius: 5 }}>
                <TextInput
                  placeholder="Pick a time slot"
                  style={styles.textInput}
                  editable={false}
                  value=""
                />
              </View>
            </View>
          </View>
        </View>

        {/* Service */}
        <View
          style={{
            alignItems: "center",
            padding: 15,
            backgroundColor: "#e6e6e6",
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 28, color: Colors.primary }}
          >
            Select Your Service
          </Text>

          <View style={{ backgroundColor: "white", marginTop: 10, borderRadius:5 }}>

            {/* single item */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding:5
              }}
            >
              <View style={{flexDirection:"row", gap:5, borderWidth:1, borderColor:"#ccc", padding:5}}>
                <Image
                  source={require("@/assets/items/item1.jpg")}
                  style={styles.itemsImage}
                />
                <View style={{width:160, justifyContent:"center"}}>
                  <View style={{flexDirection:"row", gap:12, justifyContent:"space-between"}}>
                    <Text style={{fontSize:10, backgroundColor:"#ddccff", padding:4, height:24}}>DRY CLEANING</Text>
                    <Text>₹120/item</Text>
                  </View>
                  <Text>Specialized cleaning for delicate fabrics.</Text>
                </View>
              </View>

              <View style={{justifyContent:"center", alignItems:"flex-end", marginRight:5, gap:8}}>
                <Ionicons name="trash" size={16}/>
                <View><Text style={{fontSize:18, borderWidth:1, borderColor:'green', borderRadius:15, paddingHorizontal:10}}>- 1 +</Text></View>
              </View>
            </View>
            
            <View style={{borderWidth:0.5, borderColor:"#ccc", marginVertical:6}}></View>

            {/* single item */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding:5
              }}
            >
              <View style={{flexDirection:"row", gap:5, borderWidth:1, borderColor:"#ccc", padding:5}}>
                <Image
                  source={require("@/assets/items/item2.jpg")}
                  style={styles.itemsImage}
                />
                <View style={{width:160, justifyContent:"center"}}>
                  <View style={{flexDirection:"row", gap:12, justifyContent:"space-between"}}>
                    <Text style={{fontSize:10, backgroundColor:"#ffe0b3", padding:4, height:24}}>WASH & FOLD</Text>
                    <Text>₹50/kg</Text>
                  </View>
                  <Text>Clothes are washed, dried, and neatly folded.</Text>
                </View>
              </View>

              <View style={{justifyContent:"center", alignItems:"flex-end", marginRight:5, gap:8}}>
                <Ionicons name="trash" size={16}/>
                <View><Text style={{fontSize:18, borderWidth:1, borderColor:'green', borderRadius:15, paddingHorizontal:10}}>- 1 +</Text></View>
              </View>
            </View>
            
            <View style={{borderWidth:0.5, borderColor:"#ccc", marginVertical:6}}></View>

            {/* single item */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding:5
              }}
            >
              <View style={{flexDirection:"row", gap:5, borderWidth:1, borderColor:"#ccc", padding:5}}>
                <Image
                  source={require("@/assets/items/item3.jpg")}
                  style={styles.itemsImage}
                />
                <View style={{width:160, justifyContent:"center"}}>
                  <View style={{flexDirection:"row",gap:12, justifyContent:"space-between"}}>
                    <Text style={{fontSize:10, backgroundColor:"#ffe0b3", padding:4, height:24}}>WASH & FOLD</Text>
                    <Text>₹50/kg</Text>
                  </View>
                  <Text>Clothes are washed, dried, and neatly folded.</Text>
                </View>
              </View>

              <View style={{justifyContent:"center", alignItems:"flex-end", marginRight:5, gap:8}}>
                <Ionicons name="trash" size={16}/>
                <View><Text style={{fontSize:18, borderWidth:1, borderColor:'green', borderRadius:15, paddingHorizontal:10}}>- 1 +</Text></View>
              </View>
            </View>
            
            <View style={{borderWidth:0.5, borderColor:"#ccc", marginVertical:6}}></View>

            {/* single item */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding:5
              }}
            >
              <View style={{flexDirection:"row", gap:5, borderWidth:1, borderColor:"#ccc", padding:5}}>
                <Image
                  source={require("@/assets/items/item4.jpg")}
                  style={styles.itemsImage}
                />
                <View style={{width:160, justifyContent:"center"}}>
                  <View style={{flexDirection:"row",gap:12, justifyContent:"space-between"}}>
                    <Text style={{fontSize:10, backgroundColor:"#ffe0b3", padding:4, height:24}}>WASH & FOLD</Text>
                    <Text>₹50/kg</Text>
                  </View>
                  <Text>Clothes are washed, dried, and neatly folded.</Text>
                </View>
              </View>

              <View style={{justifyContent:"center", alignItems:"flex-end", marginRight:5, gap:8}}>
                <Ionicons name="trash" size={16}/>
                <View><Text style={{fontSize:18, borderWidth:1, borderColor:'green', borderRadius:15, paddingHorizontal:10}}>- 1 +</Text></View>
              </View>
            </View>
            
            <View style={{borderWidth:0.5, borderColor:"#ccc", marginVertical:6}}></View>

            {/* single item */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding:5
              }}
            >
              <View style={{flexDirection:"row", gap:5, borderWidth:1, borderColor:"#ccc", padding:5}}>
                <Image
                  source={require("@/assets/items/item5.jpg")}
                  style={styles.itemsImage}
                />
                <View style={{width:160, justifyContent:"center"}}>
                  <View style={{flexDirection:"row",gap:12, justifyContent:"space-between"}}>
                    <Text style={{fontSize:10, backgroundColor:"#ffe0b3", padding:4, height:24}}>DRY CLEANING</Text>
                    <Text>₹15/item</Text>
                  </View>
                  <Text>Specialized cleaning for delicate fabrics.</Text>
                </View>
              </View>

              <View style={{justifyContent:"center", alignItems:"flex-end", marginRight:5, gap:8}}>
                <Ionicons name="trash" size={16}/>
                <View><Text style={{fontSize:18, borderWidth:1, borderColor:'green', borderRadius:15, paddingHorizontal:10}}>- 1 +</Text></View>
              </View>
            </View>
            
          </View>
        </View>

        {/* Delivery Details */}
        <View style={{alignItems:"center", paddingVertical:20, backgroundColor:"white"}}>
          <Text style={{fontSize:28, fontWeight:"bold", color:Colors.primary}}>Delivery Details</Text>

          <View style={{flexDirection:"row", gap:20}}>
            <View>
              <Text>Delivery Date</Text>
              <View style={{ backgroundColor: "#ccc", borderRadius: 5 }}>
                <TextInput
                  placeholder="Pick a date"
                  style={styles.textInput}
                  editable={false}
                  value=""
                />
              </View>
            </View>
            <View>
              <Text>Delivery Time Slot</Text>
              <View style={{ backgroundColor: "#ccc", borderRadius: 5 }}>
                <TextInput
                  placeholder="Pick a time slot"
                  style={styles.textInput}
                  editable={false}
                  value=""
                />
              </View>
            </View>
          </View>
        </View>

        {/* Order Summary */}
        <View style={{alignItems:"center", marginTop:30, marginBottom:80}}>
          <Text style={{fontSize:28, fontWeight:"bold", color:Colors.primary}}>Order Summary</Text>
          
          <View style={{backgroundColor:"white", margin:8}}>

            {/* single item */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding:5
              }}
            >
              <View style={{flexDirection:"row", gap:5, borderWidth:1, borderColor:"#ccc", padding:5}}>
                <Image
                  source={require("@/assets/items/item1.jpg")}
                  style={styles.itemsImage}
                />
                <View style={{width:160, justifyContent:"center"}}>
                  <View style={{flexDirection:"row", gap:12, justifyContent:"space-between"}}>
                    <Text style={{fontSize:10, backgroundColor:"#ddccff", padding:4, height:24}}>DRY CLEANING</Text>
                    <Text>₹120/item</Text>
                  </View>
                  <Text>Specialized cleaning for delicate fabrics.</Text>
                </View>
              </View>

              <View style={{justifyContent:"center", alignItems:"flex-end", marginRight:5, gap:8}}>
                <Ionicons name="trash" size={16}/>
                <View><Text style={{fontSize:18, borderWidth:1, borderColor:'green', borderRadius:15, paddingHorizontal:10}}>- 1 +</Text></View>
              </View>
            </View>

            <View style={{padding:6}}>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>Subtotal</Text>
                <Text>₹120</Text>
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>Discount (-5%)</Text>
                <Text style={{color:"red"}}>₹10</Text>
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>Delivery Fee</Text>
                <Text>₹20</Text>
              </View>

              <View style={{borderWidth:0.5, borderColor:"#ccc", marginVertical:5}}></View>

              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>Total</Text>
                <Text>₹130</Text>
              </View>

              <View style={{flexDirection:"row", alignItems:"center",marginTop:20, marginBottom:40, gap:10, justifyContent:"center"}}>
                <TextInput placeholder="Add promo code" style={{borderWidth:1, borderColor:"green", borderRadius:20, paddingHorizontal:15, width:250}}/>
                <Text style={{backgroundColor:Colors.primary, color:"white", paddingHorizontal:20, paddingVertical:10, borderRadius:6,}}>Apply</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "black",
  },
  itemsImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
});
