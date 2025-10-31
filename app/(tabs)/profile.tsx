import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionIcon from "../components/ActionIcon";
import BackgroundScreen from "../components/BackgroundScreen";
import { icons } from "./_layout";

type avatarProps = {
  avatar: ImageSourcePropType;
  username: string;
};

const Avatar = ({ avatar, username }: avatarProps) => {
  return (
    <View className="w-full h-44 flex justify-center items-center gap-2">
      <Image source={avatar} className="size-32" />
      <Text className="color-white text-4xl font-bold">{username}</Text>
    </View>
  );
};

type estatisticaProps = {
  status: number;
  label: string;
};
const Estatisticas = ({ status, label }: estatisticaProps) => {
  return (
    <View className="w-24 h-24 flex justify-center items-center bg-primaria rounded-3xl p-2">
      <Text className="color-white text-4xl font-semibold">{status}</Text>
      <Text className="color-white font-semibold text-xs">{label}</Text>
    </View>
  );
};

const profile = () => {
  const funcao = () => {
    return 1 + 1;
  };

  return (
    <BackgroundScreen>
      <SafeAreaView className="w-screen h-screen">
        <ActionIcon icon={icons.config} onPress={funcao} style="w-full flex items-center justify-end p-4 flex-row"/>

        <Avatar avatar={icons.profile} username={"Rafaela Leão"} />
        <View className="w-full h-32  mt-5 justify-center items-center">
          <View className="w-[70%] h-full mt-5">
            <Text className="color-white font-bold text-2xl">
              Copa Passa a Bola
            </Text>
            <View className="flex-1 flex-row justify-evenly items-center mt-10">
              <Estatisticas status={3} label={"Gols"} />
              <Estatisticas status={7} label={"Assistências"} />
              <Estatisticas status={4} label={"Defesas"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundScreen>
  );
};

export default profile;
