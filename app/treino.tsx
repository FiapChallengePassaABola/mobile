import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TypeRoot } from "./navigation/AppNavigator";
import BackgroundScreen from "./components/BackgroundScreen";
import ActionIcon from "./components/ActionIcon";
import { icons } from "./(tabs)/_layout";

type WorkoutDetailsRouteProp = RouteProp<TypeRoot, "treino">;

const treino = () => {
  const route = useRoute<WorkoutDetailsRouteProp>();
  const { item } = route.params;
  const exercicios = item.exercicios
  const tamanhoExercises = exercicios.length
  return (
    <BackgroundScreen>
      <ActionIcon icon={icons.back} onPress={()=>{return 1+1}}/>
    </BackgroundScreen>
  );
};

export default treino;
