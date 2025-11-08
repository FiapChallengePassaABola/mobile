import { createNativeStackNavigator } from "@react-navigation/native-stack";
import workout from "../(tabs)/workout";
import addexercicio from "../addexercicio";
import addtreino from "../addtreino";
import { exerciciosProps, treinoProps } from "../components/Treino";
import treino from "../treino";

export type TypeRoot = {
  workout: undefined;
  treino: { item: treinoProps };
  addtreino: undefined;
  addexercicio: {addExercicio:(exercicio: exerciciosProps) => void;}
};

const Stack = createNativeStackNavigator<TypeRoot>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="workout" component={workout} />
      <Stack.Screen name="treino" component={treino} />
      <Stack.Screen name="addtreino" component={addtreino} />
      <Stack.Screen name="addexercicio" component={addexercicio} />
    </Stack.Navigator>
  );
}
