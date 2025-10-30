import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type exerciciosProps ={
  titulo:string,
  descricao: string,
  series: number,
  repeticoes: number
}

type treinoProps = {
    titulo:string,
    descricao: string,
    quantidadeExercicios: number,
    exercicios: exerciciosProps[]
    tempoTotal: number
}

const Treino = ({DATA}:{DATA:treinoProps[]}  ) => {
  const renderItem = ({item}:{item:treinoProps})=>(
    <View className='w-72 h-52 rounded-[20px] mx-5 overflow-hidden'>
       <LinearGradient colors={['rgba(162, 73, 185, 0.65)', 'rgba(205, 128, 224, 0.65)']} locations={[0.16, 1]} start={{x:0,y:0}} end={{x:0, y:1}}  className='w-full h-full p-4 items-center gap-2'>
        <View className='w-[90%] h-full'>
          <Text className='w-full text-center text-xl color-white font-semibold h-14' numberOfLines={2} ellipsizeMode='tail'>{item.titulo}</Text>
          <Text className='w-full h-16 color-white font-light text-sm' numberOfLines={3} ellipsizeMode='tail'>{item.descricao}</Text>
          <Text className='w-full text-right text-sm color-white font-thin'>{item.quantidadeExercicios} exercícios</Text>
          <View className='flex-1 w-full flex-row items-center justify-between'>
            <View className='w-14 h-7 bg-terciaria rounded-full justify-center items-center'>
              <Text className='color-white text-sm'>{item.tempoTotal}min</Text>
            </View>
            <TouchableWithoutFeedback>
              <View className='border-2 border-white rounded-full w-[4.5rem] justify-center items-center flex px-2'>
                <Text className='color-white text-sm font-medium  w-full text-center'>treinar</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </LinearGradient>
    </View>
  )  
  return (
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.titulo}
    horizontal={true}
    className='flex gap-10 '
    />
  )
}

export default Treino