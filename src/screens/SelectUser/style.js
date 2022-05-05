import { StyleSheet,Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
    },
    list:{
        flexGrow: 0,
    },
    user:{
        fontFamily:'Bold',
        fontSize:20,
        color:'#151C48'
    },
    itemBox:{
        borderWidth:0.2,
        width:width/3.5,
        height:width/3.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin:20,
        borderRadius:10
    },
    itemText:{
        textTransform:'uppercase',
        fontFamily:'Light',
        marginTop:5,
        color:'#151C48'
    }
})

export default styles;