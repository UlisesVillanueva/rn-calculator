
import { useState, useRef } from 'react'

enum Operators {
    add, subtract, divide, multiply
}

export const useCalculator = () => {

    const [num, setNum] = useState('0');
    const [lastNum, setlastNum] = useState('0');

    const lastOperation = useRef<Operators>()

    const clean = () => {
        setNum('0');
        setlastNum('0');
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
            } else if (numValue === '0' && !num.includes('.')) {
                setNum(num)
            } else {
                setNum(num + numValue);
            }
        } else {
            setNum(num + numValue);
        }
    }

    const changeLastNum = () => {
        if (num.endsWith('.')) {
            setlastNum(num.slice(0, -1));
        } else {
            setlastNum(num);
        }
        setNum('0');
    }


    const positiveNegative = () => {
        num.includes('-') ?
            setNum(num.replace('-', '')) :
            setNum('-' + num);
    }

    const btnAdd = () => {
        changeLastNum();
        lastOperation.current = Operators.add;
    }

    const btnSubtract = () => {
        changeLastNum();
        lastOperation.current = Operators.subtract;
    }

    const btnMultiply = () => {
        changeLastNum();
        lastOperation.current = Operators.multiply;
    }

    const btnDivide = () => {
        changeLastNum();
        lastOperation.current = Operators.divide;
    }

    const btnDelete = () => {
        let negative = ''
        let tempNum = num;
        if (num.includes('-')) {
            negative = '-'
            tempNum = num.substr(1)
        }

        if (tempNum.length > 1) {
            setNum(negative + tempNum.slice(0, -1))
        } else {
            setNum('0')
        }
    }

    const calculator = () => {
        const num1 = Number(num)
        const num2 = Number(lastNum)

        switch (lastOperation.current) {
            case Operators.add:
                setNum(`${num1 + num2}`)
                break;
            case Operators.subtract:
                setNum(`${num2 - num1}`)
                break;
            case Operators.divide:
                setNum(`${num2 / num1}`)
                break;
            case Operators.multiply:
                setNum(`${num1 * num2}`)
                break;

            default:
                break;
        }

        setlastNum('0')
    }

    return {
        lastNum,
        num,
        calculator,
        changeLastNum,
        clean,
        btnAdd,
        btnDelete,
        btnDivide,
        btnMultiply,
        btnSubtract,
        positiveNegative,
        buildNuber
    }
}
