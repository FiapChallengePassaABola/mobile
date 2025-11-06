import React from "react";
import { ScrollView, Text, View } from "react-native";
import { conducao, finalizacoes, passes } from "../../data/data";
import ActionIcon from "../components/ActionIcon";
import BackgroundScreen from "../components/BackgroundScreen";
import Treino from "../components/Treino";
import UnderScore from "../components/UnderScore";
import { icons } from "./_layout";
import { useNavigation } from "expo-router";
import { TypeRoot } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";


type AddTreinoScreenProp = NativeStackNavigationProp<
  TypeRoot,
  'addtreino'
>;


const workout = () => {
  const navigation = useNavigation<AddTreinoScreenProp>()
  return (
    <BackgroundScreen>
      <ScrollView contentContainerStyle={{flexGrow:1, paddingBottom:150}} className="w-screen">
        <View className="w-full flex items-center justify-end p-4 flex-row gap-4">
          <ActionIcon icon={icons.addnew} onPress={()=>navigation.navigate('addtreino')} />
          <ActionIcon icon={icons.config} onPress={()=>1+1}/>
        </View>
        <View className="flex justify-center items-center gap-2">
          <Text className="color-white text-6xl font-bold w-full text-center">Treinos</Text>
          <UnderScore/>
        </View>
          
        <View className="flex-1 justify-evenly items-center w-screen gap-2 p-2">
          <Text className="color-white font-semibold text-2xl w-[90%]   text-start ">
            Finalizaçao
          </Text>
          <Treino DATA={finalizacoes} />
          <Text className="color-white font-semibold text-2xl w-[90%]   text-start ">
            Passe
          </Text>
          <Treino DATA={passes} />
          <Text className="color-white font-semibold text-2xl w-[90%]   text-start ">
            Condução
          </Text>
          <Treino DATA={conducao} />
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default workout;
