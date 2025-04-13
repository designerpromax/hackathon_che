import { View, TextInput } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import AuthWrapper from "./components/AuthWrapper";

const RegisterView = () => {
  return (
    <AuthWrapper>
      <View style={{ justifyContent: "space-between", flex: 3 }}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>Register</Text>
        <View>
          <TextInput
            style={{
              borderRadius: 15,
              borderColor: "#000",
              borderWidth: 1,
              fontSize: 12,
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
            placeholder="Email address"
          ></TextInput>
        </View>

        <View>
          <TextInput
            style={{
              borderRadius: 15,
              borderColor: "#000",
              borderWidth: 1,
              fontSize: 12,
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
            placeholder="Password"
          ></TextInput>
        </View>

        <View>
          <TextInput
            style={{
              borderRadius: 15,
              borderColor: "#000",
              borderWidth: 1,
              fontSize: 12,
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
            placeholder="Repeat password"
          ></TextInput>
        </View>
        <Text>Forgot password?</Text>
        <Button
          style={{
            backgroundColor: "#44B149",
            padding: 16.5,
            borderRadius: 30,
          }}
        >
          <Text style={{ fontSize: 18 }}>Continue</Text>
        </Button>
      </View>
      <View style={{ flex: 2, justifyContent: "space-evenly" }}>
        {/* <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -10,
              left: "48%",
            }}
          >
            <Text
              style={{
                fontSize: 14,
              }}
            >
              or
            </Text>
          </View>
        </View> */}
      </View>
    </AuthWrapper>
  );
};

export default RegisterView;
