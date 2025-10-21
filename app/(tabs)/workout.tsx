import React from "react";
import { Text, View } from "react-native";
import { conducao, finalizacoes, passes } from "../../data/data";
import ActionIcon from "../components/ActionIcon";
import BackgroundScreen from "../components/BackgroundScreen";
import Treino from "../components/Treino";
import { icons } from "./_layout";

const workout = () => {
  const funcao = () => {
    return 1 + 1;
  };
  return (
    <BackgroundScreen>
      <View className="w-full flex p-6 items-end ">
        <ActionIcon icon={icons.config} onPress={funcao} />
      </View>
      <Text className="color-white text-6xl font-bold">Treinos</Text>
      <Treino DATA={passes} />
      <Treino DATA={finalizacoes} />
      <Treino DATA={conducao} />
    </BackgroundScreen>
  );
};

export default workout;
