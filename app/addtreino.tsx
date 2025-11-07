import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "./(tabs)/_layout";
import ActionIcon from "./components/ActionIcon";
import BackgroundScreen from "./components/BackgroundScreen";
import UnderScore from "./components/UnderScore";

const DropBox = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState([
    "Finalização",
    "Passe",
    "Condução",
  ]);
  const [height] = useState(new Animated.Value(56)); // altura inicial

  const moveItem = (from: number, to: number) => {
    setCategory((prev) => {
      const newArray = [...prev];
      const [movedItem] = newArray.splice(from, 1);
      newArray.splice(to, 0, movedItem);
      return newArray;
    });
  };

  useEffect(() => {
    Animated.timing(height, {
      toValue: showCategory ? 208 : 50, // 56 = h-14, 208 = h-52
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [showCategory]);

  return (
    <Animated.View
      style={{ height }}
      className={
        showCategory
          ? "w-full bg-primaria rounded-[1.5rem] overflow-hidden justify-start items-center py-5"
          : "w-full bg-primaria rounded-[1.5rem] overflow-hidden justify-center items-center"
      }
    >
      <View className="w-full flex-row justify-between items-center px-5 ">
        <Text className="color-white text-2xl text-center">{category[0]}</Text>
        <View
          style={showCategory ? { transform: [{ rotate: "180deg" }] } : null}
        >
          <ActionIcon
            icon={icons.dropbox}
            onPress={() => {
              setShowCategory(!showCategory);
            }}
          />
        </View>
      </View>
      {showCategory && (
        <View className="w-full flex justify-start items-center mt-4">
          <UnderScore />
          <View className="w-full h-full flex justify-evenly items-center">
            <TouchableOpacity
              className="h-[40px] rounded-full border-2 border-white w-[80%] bg-primaria/35 flex items-center justify-center"
              onPress={() => moveItem(1,0)}
            >
              <Text className="color-white text-2xl font-bold">
                {category[1]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="h-[40px] rounded-full border-2 border-white w-[80%] bg-primaria/35 flex items-center justify-center" onPress={()=>moveItem(2,0)}>
              <Text className="color-white text-2xl font-bold">
                {category[2]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Animated.View>
  );
};

const addtreino = () => {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <BackgroundScreen>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
        className="w-screen"
      >
        <ActionIcon
          icon={icons.back}
          onPress={() => navigation.goBack()}
          style="w-full flex items-center justify-start p-4 flex-row"
        />
        <View className="w-full flex justify-center items-center gap-4">
          <Text className="color-white text-4xl font-semibold">
            Crie seu treino
          </Text>
          <UnderScore />
        </View>
        <View className="w-full h-36 flex justify-center items-center ">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Nome do treino
            </Text>
            <TextInput
              className="bg-white rounded-full w-full px-5 text-lg"
              maxLength={35}
              value={titulo}
              onChangeText={(titulo) => setTitulo(titulo)}
              onFocus={() => setIsFocused(true)}
            />
          </View>
        </View>
        <View className="w-full flex justify-start items-center ">
          <View className="w-[70%] gap-2">
            <Text className="color-white text-2xl font-medium px-4">
              Categoria
            </Text>
            <DropBox />
          </View>
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};

export default addtreino;
