import { Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Index = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}  >
          <TouchableOpacity style={{ 
            height : Spacing * 5,
            width : Spacing * 5,
            backgroundColor : Colors.lightBackground,
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : Spacing * 3
          }}>
            <Octicons name="apps" size={24} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={{ 
            height : Spacing * 5,
            width : Spacing * 5,
            backgroundColor : Colors.lightBackground,
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : Spacing * 3
          }}>
            <Octicons name="apps" size={24} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index

const styles = StyleSheet.create({});