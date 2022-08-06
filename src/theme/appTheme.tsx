import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'black',

    },
    calculatorContainer:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:'flex-end'
    },
    result:{
        color:'white',
        fontSize:60,
        textAlign:'right'
    },
    smallResult:{
        color:'gray',
        fontSize:30,
        textAlign:'right'
    },
    button:{
        height:80,
        width:80,
        backgroundColor:'#9B9B9B',
        borderRadius:100,
        justifyContent:'center',
        margin:5
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        color:'black',
        fontSize:35,
        fontWeight:'400'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',

    }
})