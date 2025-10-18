import { Text, View } from "react-native";
import Button from "./components/Button"
import BackgroundScreen from "./components/BackgroundScreen";
import "./globals.css"

export default function Index() {
  return (
    <BackgroundScreen>
      <Text className="text-2xl color-white ">Edit app/index.tsx to edit this screen. asdasda s</Text>
      <Button/>
    </BackgroundScreen>
  );
}
