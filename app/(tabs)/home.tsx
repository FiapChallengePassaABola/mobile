import React from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BackgroundScreen from "../components/BackgroundScreen";
import UnderScore from "../components/UnderScore";
import { LinearGradient } from "expo-linear-gradient";
import ActionButton from "../components/ActionButton";

type streakType = {
  streak: number;
};
type workoutType = {
  title: string;
  duration: number;
  count: number;
};

const Streak = ({ streak }: streakType) => {
  return (
    <View className="flex justify-center  items-center w-screen h-1/3">
      <ImageBackground
        source={require("../../assets/icons/streak.png")}
        className="flex justify-center items-center text-center  absolute size-48"
      >
        <Text className="text-6xl color-white font-semibold mt-4 w-32 text-center overflow-hidden">
          {streak}
        </Text>
      </ImageBackground>
      <View className="bg-terciaria w-72 h-16 justify-center items-center rounded-[30px] mt-40">
        <Text className="color-white text-3xl font-bold">Sequência atual</Text>
      </View>
    </View>
  );
};
const Workout = ({ title, duration, count }: workoutType) => {
  const eventHandler = () => {
    Alert.alert("Quer mesmo começar o treino?");
  };
  return (
    <LinearGradient colors={['rgba(162, 73, 185, 0.65)', 'rgba(183, 109, 202, 0.74)']} locations={[0.17, 1]} start={{x:0,y:0}} end={{x:0, y:1}} className="w-80 h-20 justify-center flex-row" style={{borderRadius:50}}>
      <View className="flex justify-center  items-start w-[70%] gap-1">
        <Text className="color-white text-2xl font-medium">{title}</Text>
        <View className="flex-row justify-start w-full gap-10">
          <Text className="color-white text-xs font-thin rounded-full bg-terciaria w-12 text-center">
            {duration}min
          </Text>
          <Text className="color-white text-xs font-thin text-center">
            {count} exercício(s)
          </Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={eventHandler}>
        <View className="h-full justify-center">
          <Image source={require("../../assets/icons/play.png")} className="" />
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

const home = () => {
  return (
    <BackgroundScreen>
      <Streak streak={2} />
      <View className="flex-1 w-screen items-center gap-5 p-4">
        <Text className="color-white text-4xl font-semibold mt-5w-[90%] text-center">
          Treino de hoje
        </Text>
        <UnderScore/>
        <Workout title="Passes longos" duration={50} count={5} />
        <ActionButton text={'mudar'}/>
        <View className="w-72 h-56 bg-white rounded-xl mt-3"></View>
      </View>
    </BackgroundScreen>
  );
};

export default home;
