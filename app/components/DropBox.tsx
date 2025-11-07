import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../(tabs)/_layout";
import ActionIcon from "./ActionIcon";
import UnderScore from "./UnderScore";

type DropBoxProps = {
    category: string[]
    setCategory: React.Dispatch<React.SetStateAction<string[]>>
}

const DropBox = ({category, setCategory}: DropBoxProps) => {
  const [showCategory, setShowCategory] = useState(false);

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
              onPress={() => moveItem(1, 0)}
            >
              <Text className="color-white text-2xl font-bold">
                {category[1]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[40px] rounded-full border-2 border-white w-[80%] bg-primaria/35 flex items-center justify-center"
              onPress={() => moveItem(2, 0)}
            >
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

export default DropBox;
