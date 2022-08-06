import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    text:string;
    color?: string;
    ancho?: boolean;
}
export const Button = ({ text, color='#2D2D2D'}:Props) => {
  return (
    <View style={{
        ...styles.button,
        backgroundColor:color
    }}>
    <Text style={{
        ...styles.buttonText, 
        color: (color === '#9B9B9B')
 ? 'black':'white'    }}>{text}</Text>
</View>
  )
}
