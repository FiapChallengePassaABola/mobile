import { useNavigation } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { icons } from "./(tabs)/_layout";
import ActionIcon from "./components/ActionIcon";
import BackgroundScreen from "./components/BackgroundScreen";
import UnderScore from "./components/UnderScore";

const addtreino = () => {
  const navigation = useNavigation();
  return (
    <BackgroundScreen>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
        className="w-screen"
      >
        <ActionIcon
          icon={icons.back}
          onPress={() => navigation.goBack()}
          style="w-full flex items-center justify-start p-4 flex-row"
        />
        <View className="w-full flex justify-center items-center gap-4">
          <Text className="color-white text-4xl font-semibold">
            Crie seu treino
          </Text>
          <UnderScore />
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default addtreino;
