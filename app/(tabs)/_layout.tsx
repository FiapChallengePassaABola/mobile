import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";

type propsTab = {
  focused: boolean;
  icon: ImageSourcePropType;
};

export const icons = {
  home: require("../../assets/icons/logo.png"),
  profile: require("../../assets/icons/profile.png"),
  workout: require("../../assets/icons/workout.png"),
  config: require("../../assets/icons/config.png"),
  addnew: require("../../assets/icons/addnew1.png"),
  back: require("../../assets/icons/back.png"),
  stack: require("../../assets/icons/stack.png"),
  reps: require("../../assets/icons/reps.png"),
  dropbox: require("../../assets/icons/dropboxarrow.png"),
  treino: {
    finalizacao: {
      icon1: require("../../assets/icons/treino/bolagol.png"),
    },
    defesa: {},
    goleiro: {},
    conducao: {},
    passe: {},
  },
};

const Tabicon = ({ focused, icon }: propsTab) => {
  if (focused) {
    return (
      <View className="flex scale-150 bg-secundaria rounded-full w-16 h-16 items-center justify-center">
        <Image source={icon} tintColor={"white"} className="size-12" />
      </View>
    );
  } else {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor={"white"} className="size-12" />
      </View>
    );
  }
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#118C65",
          height: 105,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Tabicon focused={focused} icon={icons.profile} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Tabicon focused={focused} icon={icons.home} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Treino",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Tabicon focused={focused} icon={icons.workout} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
