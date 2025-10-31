import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ActionButton = ({ text }: { text: string }) => {
  return (
    <TouchableOpacity onPress={()=>{}}>
      <View className="w-auto border border-white px-5 rounded-full flex justify-center items-center min-w-16">
        <Text className="color-white text-center w-full">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;
