import {ImageSourcePropType, TouchableOpacity, Image, GestureResponderEvent } from 'react-native'
import React, { FC } from 'react'
import { Button } from '@react-navigation/elements'

type actionIconType={
    icon: ImageSourcePropType,
    onPress: FC,
    style?:string
}

const ActionIcon = ({icon, onPress, style}:actionIconType) => {


  return (
    <TouchableOpacity onPress={onPress} className={style}>
      <Image source={icon}/>
    </TouchableOpacity>
  )
}

export default ActionIcon