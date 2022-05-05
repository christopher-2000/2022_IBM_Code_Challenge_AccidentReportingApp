import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')

const styles = StyleSheet.create({
    image:{
        width:width/2,
        height:width/2,
        backgroundColor:'black',
    },
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
    },
    button:{
        backgroundColor:'#151C48',
        padding:10,
        marginBottom:10,
        width:width/1.5,
        alignItems: 'center',
        elevation:10,
        shadowOpacity:10
    },
    iconContainer:{
        flexDirection:'row',
        marginTop:30,
        width:width/2,
        justifyContent: 'space-between',
        marginBottom:20
    },
    loginContainer:{
        width:width/2,
        fontFamily:'Thin',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:16
    },
    buttonText:{
        color:'white',
        fontFamily:'Medium'
    }
})

export default styles;