import { Text, View, ImageBackground } from 'react-native'
import React from 'react'
import BackgroundScreen from '../components/BackgroundScreen'

type streakType ={
  streak:number
}

const Streak =({streak}:streakType)=>{
  return(
    <View className='flex justify-evenly  items-center w-screen h-1/3'>
      <ImageBackground source={require('../../assets/icons/streak.png')} className='flex justify-center items-center text-center  absolute size-48'>
        <Text className='text-6xl color-white font-semibold mt-4 w-32 text-center overflow-hidden'>{streak}</Text>
      </ImageBackground>
      <View className='bg-terciaria w-72 h-20 justify-center items-center rounded-[1.25rem] mt-40'>
        <Text className='color-white text-3xl font-bold'>Sequência atual</Text>
      </View>
    </View>
  )
}



const home = () => {
  return (
    <BackgroundScreen>
      <Streak streak={1}/>
      <View className='flex-1'>

      </View>

    </BackgroundScreen>
      
    
  )
}

export default home

