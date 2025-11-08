import {createNativeStackNavigator} from '@react-navigation/native-stack'
import workout from '../(tabs)/workout'
import treino from '../treino'
import { treinoProps } from '../components/Treino';
import addtreino from '../addtreino';
import addexercicio from '../addexercicio';

export type TypeRoot = {
  workout: undefined;
  treino: { item: treinoProps };
  addtreino: undefined
  addexercicio: undefined
};

const Stack = createNativeStackNavigator<TypeRoot>()

export default function AppNavigator(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='workout' component={workout}/>
            <Stack.Screen name='treino' component={treino}/>
            <Stack.Screen name='addtreino' component={addtreino}/>   
            <Stack.Screen name='addexercicio' component={addexercicio}/>   
        </Stack.Navigator>
    )
}