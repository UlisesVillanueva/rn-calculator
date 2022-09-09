import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#292d36',

    },
    calculatorContainer:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:'flex-start'
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
        backgroundColor:'##272b33',
        borderRadius:32,
        justifyContent:'center',
        margin:6
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        color:'black',
        fontSize:25,
        fontWeight:'450'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',

    }
})