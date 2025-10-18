import { Text, View, ImageBackground, TouchableWithoutFeedback, Alert, Image } from 'react-native'
import React from 'react'
import BackgroundScreen from '../components/BackgroundScreen'

type streakType ={
  streak:number
}
type workoutType ={
  title: string,
  duration:number,
  count:number
}

const Streak =({streak}:streakType)=>{
  return(
    <View className='flex justify-center  items-center w-screen h-1/3'>
      <ImageBackground source={require('../../assets/icons/streak.png')} className='flex justify-center items-center text-center  absolute size-48'>
        <Text className='text-6xl color-white font-semibold mt-4 w-32 text-center overflow-hidden'>{streak}</Text>
      </ImageBackground>
      <View className='bg-terciaria w-72 h-20 justify-center items-center rounded-[1.25rem] mt-40'>
        <Text className='color-white text-3xl font-bold'>Sequência atual</Text>
      </View>
    </View>
  )
}
const Workout =({title, duration, count}:workoutType)=>{
  const eventHandler = ()=>{
   
    Alert.alert('Quer mesmo começar o treino?')
  }
  return(
    <View className='w-80 h-20 bg-primaria rounded-[30px] justify-center flex-row'>
      <View className='flex justify-center  items-start w-[70%] gap-1'>
        <Text className='color-white text-2xl font-medium'>{title}</Text>
        <View className='flex-row justify-start w-full gap-10'>
          <Text className='color-white text-xs font-thin border rounded-full border-white/50 w-12 text-center'>{duration}min</Text>
          <Text className='color-white text-xs font-thin text-center'>{count} exercício(s)</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={eventHandler}>
        <View className='h-full justify-center'>
          <Image source={require('../../assets/icons/play.png')} className=''/>
        </View>
      </TouchableWithoutFeedback>
    </View>
      
  )
}



const home = () => {
  return (
    <BackgroundScreen>
      <Streak streak={1}/>
      <View className='flex-1 w-screen items-center gap-5 p-4'>
        <Text className='color-white text-4xl font-semibold mt-5 border-b-2 border-[#d9d9d9]/25 w-[90%] text-center h-14'>Treino de hoje
        </Text>
        <Workout title='Passes longos' duration={50} count={5}/>
        <View className='w-72 h-52 bg-white rounded-xl'>
          
        </View>
      </View>

    </BackgroundScreen>
  )
}

export default home

