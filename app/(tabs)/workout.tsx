import React from "react";
import { ScrollView, Text, View } from "react-native";
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
      <ScrollView>
        <View className="w-full flex p-6 items-end ">
          <ActionIcon icon={icons.addnew} onPress={funcao} />
        </View>
        <Text className="color-white text-6xl font-bold w-full text-center">Treinos</Text>
        <View className="flex-1 justify-evenly items-center w-screen gap-2 p-2">
          <Text className="color-white font-semibold text-2xl w-[90%]   text-start ">
            Finalizaçao
          </Text>
          <Treino DATA={finalizacoes} />
          <Text className="color-white font-semibold text-2xl w-[90%]   text-start ">
            Passe
          </Text>
          <Treino DATA={passes} />
          <Text className="color-white font-semibold text-2xl w-[90%]   text-start ">
            Condução
          </Text>
          <Treino DATA={conducao} />
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default workout;
