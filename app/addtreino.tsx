import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { icons } from "./(tabs)/_layout";
import ActionIcon from "./components/ActionIcon";
import BackgroundScreen from "./components/BackgroundScreen";
import UnderScore from "./components/UnderScore";

const DropBox = () => {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <View className="w-full bg-primaria h-14 rounded-full flex-row justify-between items-center px-5 rotate-180">
      <Text className="color-white text-2xl text-center">Finalização</Text>
      <View style={showCategory?null:{transform:[{rotate:'180deg'}]}}>
        <ActionIcon
          icon={icons.dropbox}
          onPress={() => {
            setShowCategory(!showCategory);
          }}
        />
      </View>
    </View>
  );
};

const addtreino = () => {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState("");
  const [isFocused, setIsFocused] = useState(false);
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
        <View className="w-full h-36 flex justify-center items-center ">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Nome do treino
            </Text>
            <TextInput
              className="bg-white rounded-full w-full px-5 text-lg"
              maxLength={35}
              value={titulo}
              onChangeText={(titulo) => setTitulo(titulo)}
              onFocus={() => setIsFocused(true)}
            />
          </View>
        </View>
        <View className="w-full h-36 flex justify-center items-center">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Categoria
            </Text>
            <DropBox />
          </View>
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default addtreino;
