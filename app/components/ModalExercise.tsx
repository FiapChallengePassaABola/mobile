import { conducao, finalizacoes, passes } from "@/data/data";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../(tabs)/_layout";
import ActionIcon from "./ActionIcon";
import { exerciciosProps } from "./Treino";

type ModalExerciseProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  addExercicio: (exercicio: exerciciosProps) => void;
};

const ModalExercise = ({
  showModal,
  setShowModal,
  category,
  addExercicio,
}: ModalExerciseProps) => {
  const [showDetails, setShowDetails] = useState(false);
  let listaExercicios: exerciciosProps[];

  if (category == "Finalização") {
    listaExercicios = [...finalizacoes[0].exercicios];
  } else if (category == "Condução") {
    listaExercicios = [...conducao[0].exercicios];
  } else {
    listaExercicios = [...passes[0].exercicios];
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        className="w-screen filter bg-black/50 blur-3xl"
      >
        <View className="flex-1 justify-center items-center">
          <View className="w-[70%] bg-primaria rounded-xl items-center p-2 pb-10 gap-5">
            <Text className="border-b-2 border-white color-white text-2xl font-bold">
              {category}
            </Text>
            {listaExercicios.map((exercicio, i) => {
              return (
                <View
                  key={i}
                  className="w-[90%] h-10 justify-between px-3 items-center flex-row border border-white rounded-[1.5rem]"
                >
                  <TouchableOpacity
                    onPress={() => {
                      addExercicio(exercicio);
                      setShowModal(!showModal)
                    }}
                  >
                    <Image source={icons.addnew} className="size-7" />
                  </TouchableOpacity>
                  <Text
                    className="color-white w-48 text-lg"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {exercicio.titulo}
                  </Text>
                  <View>
                    <ActionIcon
                      icon={icons.dropbox}
                      onPress={() => {
                        setShowDetails(!showDetails);
                      }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ModalExercise;
