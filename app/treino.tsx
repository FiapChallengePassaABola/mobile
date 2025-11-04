import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "./(tabs)/_layout";
import ActionIcon from "./components/ActionIcon";
import BackgroundScreen from "./components/BackgroundScreen";
import UnderScore from "./components/UnderScore";
import { TypeRoot } from "./navigation/AppNavigator";

type WorkoutDetailsRouteProp = RouteProp<TypeRoot, "treino">;

const treino = () => {
  const route = useRoute<WorkoutDetailsRouteProp>();
  const { item } = route.params;
  const [exercicioAtual, setExercicioAtual] = useState(0);

  return (
    <BackgroundScreen>
      <SafeAreaView className="w-screen h-screen items-center">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          className="w-screen"
        >
          <ActionIcon
            icon={icons.back}
            onPress={() => setExercicioAtual(exercicioAtual - 1)}
            style="w-screen flex items-start justify-center p-4"
          />
          <View className="w-screen flex justify-center items-center gap-5">
            <Text className="color-white text-4xl font-semibold mt-5 w-[90%] text-center">
              {item.titulo}
            </Text>
            <UnderScore />
          </View>
          <View className="flex-row justify-center items-center w-full h-52">
            <View className="justify-center items-center h-44 w-[30%]">
              <View className="bg-secundaria size-[7rem] rounded-full justify-center items-center flex">
                <Image
                  source={icons.treino.finalizacao.icon1}
                  className="size-[5rem]"
                />
              </View>
            </View>
            <View className="justify-center items-center gap-2">
              <Text className="color-white text-2xl font-medium">
                {item.exercicios[exercicioAtual].titulo}
              </Text>
              <Text className="color-white text-4xl font-bold">
                {exercicioAtual}/{item.exercicios.length}
              </Text>
            </View>
          </View>
          <View className="w-full items-center">
            <View className="w-[80%] bg-white h-56 mt-5 rounded-2xl items-center p-4">
              <Text className="w-full h-full text-start">
                {item.exercicios[exercicioAtual].descricao}
              </Text>
            </View>
          </View>
          <View className="w-full flex items-center justify-center flex-row h-44 border justiy-center">
            <View className="flex-1 border items-center justify-center">
              <Text className="color-white text-2xl font-medium">Séries</Text>
              <View className="flex-row w-full items-center justify-center border gap-2">
                <Image source={icons.config}/>
                <Text className="color-gray-500">{item.exercicios[exercicioAtual].series}</Text>
              </View>
            </View>
            <View className="flex-1 border items-center justify-center">
              <Text className="color-white text-2xl font-medium">Repetições</Text>
              <View className="flex-row w-full items-center justify-center border gap-2">
                <Image source={icons.config}/>
                <Text className="color-gray-500">{item.exercicios[exercicioAtual].repeticoes}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundScreen>
  );
};

export default treino;
