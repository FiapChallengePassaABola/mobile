import { Text, View, Image, TouchableOpacity } from "react-native";
import BackgroundScreen from "./components/BackgroundScreen";
import { navigate } from "expo-router/build/global-state/routing";
import "./globals.css"
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient colors={['#6A1B6C','#350E36']} locations={[0.11, 0.92]} start={{x:0,y:0}} end={{x:1, y:1}} className="w-screen h-screen justify-center items-center">
        <View className="flex-1 justify-end items-center gap-4">
          <Image source={require('../assets/icons/logo.png')}/>
          <Text className="font-semibold text-4xl color-white">PASSA A BOLA EVO</Text>
        </View>
        <View className="w-screen justify-center items-center flex-1 gap-4">
          <TouchableOpacity className="w-80 h-14 bg-secundaria justify-center rounded-2xl">
            <Text className="text-center color-white">criar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-80 h-14 border-2 border-white justify-center rounded-2xl" onPress={()=> navigate('/(tabs)/home')}>
            <Text className="text-center color-white">já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
    </LinearGradient>
  );
}
