import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type BackgroundScreenProps = {
  children: React.ReactNode
}

const BackgroundScreen = (props: BackgroundScreenProps) => {
  return (
    
    <LinearGradient colors={['#2C1333','#130914']} locations={[0.11, 0.92]} start={{x:0,y:0}} end={{x:1, y:1}} className="w-screen h-screen justify-center items-center" >
      <SafeAreaView className='w-screen h-screen items-center justify-center'>
        {props.children}
      </SafeAreaView>
    </LinearGradient>
  )
}

export default BackgroundScreen

