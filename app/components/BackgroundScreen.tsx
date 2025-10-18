import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'

type BackgroundScreenProps = {
  children: React.ReactNode
}

const BackgroundScreen = (props: BackgroundScreenProps) => {
  return (
    <LinearGradient colors={['#2C1333','#130914']} locations={[0.11, 0.92]} start={{x:0,y:0}} end={{x:1, y:1}} className="w-screen h-screen flex-1 justify-center items-center" >
      {props.children}
    </LinearGradient>
  )
}

export default BackgroundScreen

