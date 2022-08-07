import React, { useState, useRef } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';




export const CalculatorScreen = () => {
    
    const {
        calculator,
        changeLastNum,
        clean,
        btnAdd,
        btnDelete,
        btnDivide,
        btnMultiply,
        btnSubtract,
        positiveNegative,
        buildNuber,
        lastNum,
        num
    } = useCalculator();



    return (
        <View style={styles.calculatorContainer}>
            {
                lastNum !== '0' && <Text style={styles.smallResult}>{lastNum}</Text>
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {num}
            </Text>

            <View style={styles.row}>
                <Button text='AC' color='#26ecc9' action={clean} />
                <Button text='+/-' color='#26ecc9' action={positiveNegative} />
                <Button text='del' color='#26ecc9' action={btnDelete} />
                <Button text='/' color='#f3797a' action={btnDivide} />
            </View>

            <View style={styles.row}>
                <Button text='7' action={buildNuber} />
                <Button text='8' action={buildNuber} />
                <Button text='9' action={buildNuber} />
                <Button text='x' color='#f3797a' action={btnMultiply} />
            </View>

            <View style={styles.row}>
                <Button text='4' action={buildNuber} />
                <Button text='5' action={buildNuber} />
                <Button text='6' action={buildNuber} />
                <Button text='-' color='#f3797a' action={btnSubtract} />
            </View>

            <View style={styles.row}>
                <Button text='1' action={buildNuber} />
                <Button text='2' action={buildNuber} />
                <Button text='3' action={buildNuber} />
                <Button text='+' color='#f3797a' action={btnAdd} />
            </View>

            <View style={styles.row}>
                <Button text='0' action={buildNuber} width />
                <Button text='.' action={buildNuber} />
                <Button text='=' color='#f3797a' action={calculator} />
            </View>


        </View>
    )
}

export default CalculatorScreen;