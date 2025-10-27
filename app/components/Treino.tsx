import { View, Text, FlatList } from 'react-native'
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
    <View className='w-56 h-36 rounded-[20px] mx-5 overflow-hidden'>
       <LinearGradient colors={['#A249B9','#CD80E0']} locations={[0.16, 1]} start={{x:0,y:0}} end={{x:0, y:1}}  className='w-full h-full p-4' style={{borderRadius:'30%'}}>
        <Text>{item.titulo}</Text>
        <Text>{item.descricao}</Text>
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