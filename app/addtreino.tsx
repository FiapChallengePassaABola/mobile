import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
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
import DropBox from "./components/DropBox";
import ModalExercise from "./components/ModalExercise";
import { exerciciosProps } from "./components/Treino";
import UnderScore from "./components/UnderScore";
import { TypeRoot } from "./navigation/AppNavigator";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type AddExercicioScreenProp = NativeStackNavigationProp<
  TypeRoot,
  'addexercicio'
>;

const addtreino = () => {
  const navigation = useNavigation<AddExercicioScreenProp>();
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState([
    "Finalização",
    "Passe",
    "Condução",
  ]);
  const maxLenght = 150;
  const [exercicios, setExercicios] = useState([
    {
      titulo: "Passe com cone",
      descricao: "rsrssr",
      series: 4,
      repeticoes: 10,
    },
    {
      titulo: "VAMBORA TITIL",
      descricao: "rsrssr",
      series: 4,
      repeticoes: 10,
    },
    {
      titulo: "TO CANSADO",
      descricao: "rsrssr",
      series: 4,
      repeticoes: 10,
    },
  ]);
  const removeExercicio = (index: number) => {
    setExercicios((prev) => prev.filter((_, i) => i !== index));
  };
  const addExercicio = (novoExercicio: exerciciosProps) => {
    setExercicios(prev => [...prev, novoExercicio ]);
  };
  return (
    <BackgroundScreen>
      <ModalExercise
        showModal={showModal}
        setShowModal={setShowModal}
        category={category[0]}
        addExercicio={addExercicio}
      />
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
            />
          </View>
        </View>
        <View className="w-full flex justify-start items-center ">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Categoria
            </Text>
            <DropBox category={category} setCategory={setCategory} />
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
        <View className="w-full flex justify-center items-center mt-5">
          <View className="w-[70%] gap-2 flex  justify-center">
            <Text className="color-white text-2xl font-medium px-4">
              Exercícios
            </Text>
            {exercicios.map((exercicio, i) => {
              return (
                <View
                  key={i}
                  className="w-full bg-primaria rounded-full h-12 items-center justify-around flex-row px-2"
                >
                  <Text className="color-white text-lg w-36" numberOfLines={1} ellipsizeMode="tail">
                    {exercicio.titulo}
                  </Text>

                  <View className="bg-white rounded-2xl w-8 h-6 justify-center items-center">
                    <Text className="font-medium">{exercicio.series}</Text>
                  </View>
                  <View className="bg-white rounded-2xl w-8 h-6 justify-center items-center">
                    <Text className="font-medium">{exercicio.repeticoes}</Text>
                  </View>

                  <ActionIcon
                    icon={icons.remove}
                    onPress={() => removeExercicio(i)}
                  />
                </View>
              );
            })}
            <View className="flex-row w-full justify-evenly items-center mt-5">
              <TouchableOpacity
                className="flex-row justify-center items-center border border-white rounded-2xl gap-2 p-1 w-32"
                onPress={() => setShowModal(!showModal)}
              >
                <Image source={icons.addnew} className="size-5" />
                <Text className="color-white font-bold">Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-center items-center border border-white rounded-2xl gap-2 p-1 w-32" onPress={()=>navigation.navigate('addexercicio',{addExercicio})}>
                <Image source={icons.addnew} className="size-5" />
                <Text className="color-white font-bold">Criar novo</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full h-40 justify-center items-center">
            <TouchableOpacity className="w-[60%] h-16 border-2 border-white rounded-xl justify-center items-center ">
              <Text className="text-2xl color-white font-bold">PROSSEGUIR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default addtreino;
