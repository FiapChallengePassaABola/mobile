import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionButton = ({text}:{text:string}) => {
  return (
    <TouchableOpacity className='w-auto border border-white px-2 rounded-full flex justify-center items-center' style={{minWidth:65}}>
        <Text className='color-white text-center w-full'>{text}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton