import {createNativeStackNavigator} from '@react-navigation/native-stack'
import workout from '../(tabs)/workout'
import treino from '../treino'
import { treinoProps } from '../components/Treino';

export type TypeRoot = {
  workout: undefined;
  treino: { item: treinoProps }; // ou um tipo mais específico
};

const Stack = createNativeStackNavigator<TypeRoot>()

export default function AppNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='workout' component={workout}/>
            <Stack.Screen name='treino' component={treino}/>
        </Stack.Navigator>
    )
}