import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View>
      <TouchableOpacity className='bg-white justify-center items-center h-10 w-20 rounded-full'>
        <Text>Pressione-me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button