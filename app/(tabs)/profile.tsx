import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "../components/ActionButton";
import ActionIcon from "../components/ActionIcon";
import BackgroundScreen from "../components/BackgroundScreen";
import UnderScore from "../components/UnderScore";
import { icons } from "./_layout";

type avatarProps = {
  avatar: ImageSourcePropType;
  username: string;
  position: string[];
  weight: number;
  height: number;
};

const Avatar = ({
  avatar,
  username,
  position,
  weight,
  height,
}: avatarProps) => {
  return (
    <View className="w-screen h-52 flex-row justify-center items-center px-4 ">
      <Image source={avatar} className="size-[7rem]" />
      <View className="flex flex-1 h-[70%] p-2 ml-4 justify-center">
        <Text className="color-white text-4xl font-medium">{username}</Text>
        <Text className="color-white/60 text-lg">
          posição: {position.join("/")}
        </Text>
        <Text className="color-white/60 text-lg">peso: {weight} kg</Text>
        <Text className="color-white/60 text-lg">altura: {height} cm</Text>
        <View className="w-full justify-center items-start mt-5">
          <ActionButton text="editar" />
        </View>
      </View>
    </View>
  );
};

const profile = () => {
  const user = {
    name: "Rafaela Leão",
    position: ["zag", "vol"],
    weight: 45,
    height: 175,
  };
  return (
    <BackgroundScreen>
      <SafeAreaView className="w-screen h-screen">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 175 }}
          className="w-screen"
        >
          <ActionIcon
            icon={icons.config}
            onPress={() => {
              return 1 + 1;
            }}
            style="w-full flex items-end justify-center p-4"
          />
          <View className="w-screen flex justify-center items-center">
            <Avatar
              avatar={icons.profile}
              username={user.name}
              position={user.position}
              weight={user.weight}
              height={user.height}
            />
          </View>
          <View className="w-screen flex justify-center items-center gap-5 mt-5">
            <Text className="color-white text-4xl font-semibold mt-5 w-[90%] text-center">
              Meus status
            </Text>
            <UnderScore />
            <View className="w-scrren flex-row justify-center items-center gap-10">
              <View className="w-20 h-20 bg-primaria rounded-full items-center justify-center">
                <Image source={icons.workout} className="size-15"/>
              </View>
              <View className="w-20 h-20 bg-primaria rounded-full items-center justify-center">
                <Image source={icons.workout} className="size-15"/>
              </View>
              <View className="w-20 h-20 bg-primaria rounded-full items-center justify-center">
                <Image source={icons.workout} className="size-15"/>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundScreen>
  );
};

export default profile;
