import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "./(tabs)/_layout";
import ActionIcon from "./components/ActionIcon";
import BackgroundScreen from "./components/BackgroundScreen";
import { treinoProps } from "./components/Treino";
import UnderScore from "./components/UnderScore";
import { TypeRoot } from "./navigation/AppNavigator";
import { useNavigation } from "expo-router";

type WorkoutDetailsRouteProp = RouteProp<TypeRoot, "treino">;

const DisplayExer = ({
  item,
  exercicioAtual,
}: {
  item: treinoProps;
  exercicioAtual: number;
}) => {
  return (
    <View className="flex-row justify-center items-center w-full h-52 ">
      <View className="justify-center items-center h-44 w-[30%] ">
        <View className="bg-secundaria size-[7rem] rounded-full justify-center items-center flex">
          <Image
            source={icons.treino.finalizacao.icon1}
            className="size-[5rem]"
          />
        </View>
      </View>
      <View className="justify-center items-center gap-2 w-[60%] h-44 ">
        <Text className="color-white text-2xl font-medium text-center w-[100%]" numberOfLines={1} ellipsizeMode='tail'>
          {item.exercicios[exercicioAtual].titulo}
        </Text>
        <Text className="color-white text-4xl font-bold">
          {exercicioAtual+1}/{item.exercicios.length}
        </Text>
      </View>
    </View>
  );
};

const RepsStack = ({
  item,
  exercicioAtual,
}: {
  item: treinoProps;
  exercicioAtual: number;
}) => {
  return (
    <View className="w-full flex items-center justify-center flex-row h-44  justiy-center">
      <View className="flex-1  items-center justify-center">
        <Text className="color-white text-2xl font-medium">Séries</Text>
        <View className="flex-row w-full items-center justify-center  gap-2">
          <Image source={icons.stack} />
          <View className="w-20 h-12 bg-white items-center justify-center flex rounded-full">
            <Text className="color-gray-500 text-xl font-semibold">
              {item.exercicios[exercicioAtual].series}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1  items-center justify-center">
        <Text className="color-white text-2xl font-medium">Repetições</Text>
        <View className="flex-row w-full items-center justify-center  gap-2">
          <Image source={icons.reps} />
          <View className="w-20 h-12 bg-white items-center justify-center flex rounded-full">
            <Text className="color-gray-500 text-xl font-semibold">
              {item.exercicios[exercicioAtual].repeticoes}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const treino = () => {
  const route = useRoute<WorkoutDetailsRouteProp>();
  const { item } = route.params;
  const [exercicioAtual, setExercicioAtual] = useState(0);
  const navigation = useNavigation()

  return (
    <BackgroundScreen>
      <SafeAreaView className="w-screen h-screen items-center">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          className="w-screen"
        >
          <ActionIcon
            icon={icons.back}
            onPress={() => exercicioAtual? setExercicioAtual(exercicioAtual - 1):navigation.goBack()}
            style="w-screen flex items-start justify-center p-4" 
          />
          <View className="w-screen flex justify-center items-center gap-5">
            <Text className="color-white text-4xl font-semibold mt-5 w-[90%] text-center">
              {item.titulo}
            </Text>
            <UnderScore />
          </View>
          <DisplayExer item={item} exercicioAtual={exercicioAtual} />
          <View className="w-full items-center">
            <View className="w-[80%] bg-white  min-h-20 mt-5 rounded-2xl items-center p-4">
              <Text className="w-full text-start">
                {item.exercicios[exercicioAtual].descricao}
              </Text>
            </View>
          </View>
          <RepsStack item={item} exercicioAtual={exercicioAtual} />
          <View className="w-screen h-44 flex justify-center items-center gap-10">
            <View className="w-full flex-row justify-center items-center gap-4">
              {Array.from({ length: exercicioAtual+1}).map((_, i) => (
                <View key={i} className="bg-secundaria w-14 h-4 rounded-full" />
              ))}
              {Array.from({ length: item.quantidadeExercicios - exercicioAtual -1}).map((_, i) => (
                <View key={i} className="w-14 h-4 border-2 border-white rounded-full" />
              ))}
            </View>
            <TouchableOpacity onPress={()=>exercicioAtual+1==item.quantidadeExercicios?navigation.goBack():setExercicioAtual(exercicioAtual+1)} className="w-80 h-16 bg-secundaria justify-center items-center flex rounded-2xl">
              <Text className="color-white text-2xl font-bold text-center">PROSSEGUIR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundScreen>
  );
};

export default treino;
