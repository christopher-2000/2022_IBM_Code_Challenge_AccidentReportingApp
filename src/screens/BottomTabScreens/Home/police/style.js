import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
    },
    innerContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    accident:{
        backgroundColor:'#210474',
        width:width/2.5,
        height:width/2.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:width,
        elevation:10,
        marginBottom:10
    },
    emergency:{
        backgroundColor:'#B80606',
        width:width/2.5,
        height:width/2.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:width,
        elevation:10
    },
    text:{
        color:'white',fontFamily:'Thin',fontSize:17
    },
    help:{
        fontFamily:'Black',
        fontSize:20,
        marginBottom:20
    }
})

export default styles;