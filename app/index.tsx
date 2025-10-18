import { Text, View } from "react-native";
import Button from "./components/Button"
import "./globals.css"

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500 text-center w-screen h-screen">
      <Text className="text-2xl color-white ">Edit app/index.tsx to edit this screen. asdasda s</Text>
      <Button/>
    </View>
  );
}
