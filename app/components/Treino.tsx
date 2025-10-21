import { View, Text, FlatList } from 'react-native'
import React from 'react'

type treinoProps = {
    titulo:string,
    descricao: string,
    quantidadeExercicios: number,
    tempoTotal: number
}

const Treino = ({DATA}:{DATA:treinoProps[]}  ) => {
  const renderItem = ({item}:{item:treinoProps})=>(
    <View className='w-56 h-36 bg-primaria rounded-xl p-4 mx-5'>
      <Text>{item.titulo}</Text>
      <Text>{item.descricao}</Text>
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