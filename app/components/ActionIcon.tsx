import {ImageSourcePropType, TouchableOpacity, Image, GestureResponderEvent } from 'react-native'
import React, { FC } from 'react'
import { Button } from '@react-navigation/elements'

type actionIconType={
    icon: ImageSourcePropType,
    onPress: FC
    
}

const ActionIcon = ({icon, onPress}:actionIconType) => {


  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icon}/>
    </TouchableOpacity>
  )
}

export default ActionIcon