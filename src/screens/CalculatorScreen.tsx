import React, { useState, useRef } from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';


enum  Operators {
    add, subtract, divide, multiply
}

export const CalculatorScreen = () => {

    const [num, setNum] = useState('0');
    const [lasNum, setLasNum] = useState('0');

    const lastOperation = useRef<Operators>()

    const clean = () => {
        setNum('0');
        setLasNum('0');
    }

    const buildNuber = (numValue: string) => {

        if (num.includes('.') && numValue === '.') return;

        if (num.startsWith('0') || num.startsWith('-0')) {

            if (numValue === '.') {
                setNum(num + numValue)
            } else if (numValue === '0' && num.includes('.')) {
                setNum(num + numValue)
            } else if (numValue !== '0' && !num.includes('.')) {
                setNum(numValue)
            } else if (numValue === '0' && !num.includes('.')){
                setNum(num)
            } else {
                setNum(num + numValue);
            }
        } else {
            setNum(num + numValue);
        }
    }

    const changeLastNum =() =>{
        if(num.endsWith('.')){
            setLasNum(num.slice(0,-1));
        } else {
            setLasNum(num);
        }
        setNum('0');
    }


    const positiveNegative = () => {
        num.includes('-') ?
            setNum(num.replace('-', '')) :
            setNum('-' + num);
    }

    const btnAdd = () =>{
        changeLastNum();
        lastOperation.current = Operators.add;
    }

    const btnSubtract = () =>{
        changeLastNum();
        lastOperation.current = Operators.subtract;
    }

    const btnMultiply = () =>{
        changeLastNum();
        lastOperation.current = Operators.multiply;
    }

    const btnDivide = () =>{
        changeLastNum();
        lastOperation.current = Operators.divide;
    }

    const btnDelete = () => {
        let negative = ''
        let tempNum = num;
        if (num.includes('-')){
            negative ='-'
            tempNum= num.substr(1)
        }

        if (tempNum.length>1){
            setNum( negative + tempNum.slice(0,-1))
        } else {
            setNum('0')
        }
    }


    return (
        <View style={styles.calculatorContainer}>
            {
                lasNum !== '0' &&   <Text style={styles.smallResult}>{lasNum}</Text>
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {num}
            </Text>

            <View style={styles.row}>
                <Button text='C' color='#9B9B9B' action={clean} />
                <Button text='+/-' color='#9B9B9B' action={positiveNegative} />
                <Button text='del' color='#9B9B9B' action={btnDelete} />
                <Button text='/' color='#FF9427' action={clean} />
            </View>

            <View style={styles.row}>
                <Button text='7' action={buildNuber} />
                <Button text='8' action={buildNuber} />
                <Button text='9' action={buildNuber} />
                <Button text='x' color='#FF9427' action={btnMultiply}/>
            </View>

            <View style={styles.row}>
                <Button text='4' action={buildNuber} />
                <Button text='5' action={buildNuber} />
                <Button text='6' action={buildNuber} />
                <Button text='-' color='#FF9427' action={btnSubtract}/>
            </View>

            <View style={styles.row}>
                <Button text='1' action={buildNuber} />
                <Button text='2' action={buildNuber} />
                <Button text='3' action={buildNuber} />
                <Button text='+' color='#FF9427' action={btnAdd}/>
            </View>

            <View style={styles.row}>
                <Button text='0' action={buildNuber} width />
                <Button text='.' action={buildNuber} />
                <Button text='/' color='#FF9427' action={btnDivide}/>
            </View>


        </View>
    )
}

export default CalculatorScreen;