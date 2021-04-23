import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const MyReviews=()=>{
    return(
        
       <ScrollView style={{backgroundColor:"#ffff", flex:1}}>
           <View style={{backgroundColor:"#ffff", flex:1}}>
               
              <View style={{backgroundColor:"#ffff", flex:1}}>
                <View style={styles.main}>
                  <Image style={styles.image} source={require('../assets/img/Rectangle.png')}/>
                  {/* <View style={{ height: 1, backgroundColor: 'red', marginVertical: 3, marginHorizontal: 2, }} /> */}
                  <Text style={styles.text}>Windscreen for VolksWagen</Text>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 20}}>
                        <Image style={{ width: 15, height: 15, marginLeft: 110, marginRight: 2,bottom:70 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2,bottom:70 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2,bottom:70 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2,bottom:70 }} source={require('../assets/stargold.png')} />
                        <Image style={{ width: 15, height: 15, marginLeft: 2, marginRight: 2,bottom:70 }} source={require('../assets/stargold.png')} />
                    </View>
                    <Text style={{marginLeft:110, bottom:70, color:"#A8A8A8", fontSize:11}}>15-April-2019</Text>
                    <Text style={{marginLeft:110, bottom:65, color:"#323232", fontSize:11}}>Unbelievable product at the lowest price!</Text>
                 </View>  
            </View>
            
            </View> 
        
          
      </ScrollView>

    );
}

const styles = StyleSheet.create({
    main:{
        height: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:30,
        marginBottom:10
    },
    image:{
        height:64,
        width:64,
        marginTop:17,
        marginLeft:10
    },
    text:{
        marginLeft:110,
        bottom:70,
        color:"#323232",
    }
})

export default MyReviews;