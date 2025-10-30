import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const UnderScore = () => {
  return (
    <LinearGradient colors={['rgba(100,100,100,0.29)','rgba(100,100,100,1)','rgba(100,100,100,0.30)']} locations={[0, 0.48,1]} start={{x:0,y:1}} end={{x:1, y:1}} className='w-[75%] h-[2px]'/>
  )
}

export default UnderScore