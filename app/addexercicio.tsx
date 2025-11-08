import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "./(tabs)/_layout";
import ActionIcon from "./components/ActionIcon";
import BackgroundScreen from "./components/BackgroundScreen";
import UnderScore from "./components/UnderScore";
import { exerciciosProps } from "./components/Treino";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TypeRoot } from "./navigation/AppNavigator";

type AddExercicioRepsStackProps = {
  series: string;
  setSeries: React.Dispatch<React.SetStateAction<string>>;
  reps: string;
  setReps: React.Dispatch<React.SetStateAction<string>>;
};

const RepsStack = ({ series, setSeries, reps, setReps }: AddExercicioRepsStackProps) => {
  return (
    <View className="w-full flex items-center justify-center flex-row h-44  justiy-center">
      <View className="flex-1 items-center justify-center">
        <Text className="color-white text-2xl font-medium ">Séries</Text>
        <View className="flex-row w-full items-center justify-center  gap-2">
          <Image source={icons.stack} />
          <View className="w-20 h-12 bg-white items-center justify-center flex rounded-full">
            <TextInput
              className="color-gray-500 text-xl font-semibold"
              maxLength={2}
              value={series}
              onChangeText={(series) => {
                const numericValue = series.replace(/[^0-9]/g, "");
                setSeries(numericValue);
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="color-white text-2xl font-medium ">Repetições</Text>
        <View className="flex-row w-full items-center justify-center  gap-2">
          <Image source={icons.reps} />
          <View className="w-20 h-12 bg-white items-center justify-center flex rounded-full">
            <TextInput
              className="color-gray-500 text-xl font-semibold"
              maxLength={2}
              value={reps}
              onChangeText={(reps) => {
                const numericValue = reps.replace(/[^0-9]/g, "");
                setReps(numericValue);
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    </View>
  );
};


const addexercicio = () => {
  const route = useRoute<RouteProp<TypeRoot, 'addexercicio'>>();
  const { addExercicio } = route.params;
  const navigation = useNavigation();
  const maxLenght = 150;
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [series, setSeries] = useState("");
  const [reps, setReps] = useState("");
  const isNotVerified =
    titulo == "" || desc == "" || series == "" || reps == "";
  return (
    <BackgroundScreen>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        className="w-screen"
      >
        <ActionIcon
          icon={icons.back}
          onPress={() => navigation.goBack()}
          style="w-full flex items-center justify-start p-4 flex-row"
        />
        <View className="w-full flex justify-center items-center gap-4">
          <Text className="color-white text-4xl font-semibold">
            Crie seu exercicio
          </Text>
          <UnderScore />
        </View>
        <View className="w-full h-36 flex justify-center items-center ">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Nome do exercicio
            </Text>
            <TextInput
              className="bg-white rounded-full w-full px-5 text-lg"
              maxLength={35}
              value={titulo}
              onChangeText={(titulo) => setTitulo(titulo)}
            />
          </View>
        </View>

        <View className="w-full flex justify-center items-center mt-5">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Descrição
            </Text>
            <View className="w-full relative">
              <TextInput
                className="bg-white rounded-2xl min-h-20 w-full px-5 text-lg py-5"
                maxLength={maxLenght}
                value={desc}
                onChangeText={(desc) => setDesc(desc)}
                multiline
              />
              <Text
                style={{
                  position: "absolute",
                  right: 15,
                  bottom: 5,
                  color: "gray",
                }}
              >
                {desc.length}/{maxLenght}
              </Text>
            </View>
          </View>
        </View>
        <RepsStack
          series={series}
          setSeries={setSeries}
          reps={reps}
          setReps={setReps}
        />
        <View>
          <View className="w-full h-40 justify-center items-center">
            <TouchableOpacity
              className="w-[60%] h-16 border-2 border-white rounded-xl justify-center items-center"
              onPress={() => {
                if (isNotVerified) {
                  Alert.alert('Não foi possível criar esse exercício. Preecha todos os campos corretamente')
                  return
                }
                const seriesInt = parseInt(series)
                const repeticoesInt = parseInt(reps)
                const exercicioCriado = {
                  titulo,
                  descricao: desc,
                  repeticoes: repeticoesInt,
                  series: seriesInt
                }
                addExercicio(exercicioCriado)
                navigation.goBack()
              }}
            >
              <Text className="text-2xl color-white font-bold">PROSSEGUIR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default addexercicio;
