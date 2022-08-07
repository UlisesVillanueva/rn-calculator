import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string;
    color?: string;
    width?: boolean;
    action?:(numValue: string)=> (void | undefined);
}
export const Button = ({ text, color = 'white', width = false, action}: Props) => {
    return (
        <TouchableOpacity onPress={ () => action(text)}>
            <View style={{
                ...styles.button,
                backgroundColor: '#272b33',
                width: (width) ? 170 : 80,
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color
                }}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}
