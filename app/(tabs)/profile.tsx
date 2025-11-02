import React from "react";
import { Image, ImageSourcePropType, ScrollView, Text, View } from "react-native";
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 175 }}
        className="w-screen"> 
          <ActionIcon icon={icons.config} onPress={()=>{return 1+1}} style="w-full flex items-end justify-center p-4"/>
        </ScrollView>
      </SafeAreaView>
    </BackgroundScreen>
  );
};

export default profile;
