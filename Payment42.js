import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    Modal,
    Pressable
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Payment42 = ( { navigation } ) =>{
    // const [modalVisible, setModalVisible] = useState(false);
    return(
        <SafeAreaView style={{backgroundColor:"white", flex:1}}>
        <ScrollView style={{backgroundColor:"white", flex:1}}>
        <View style={{backgroundColor:"white", flex:1}}>

            <View>
                <Text style={{color:"#323232",fontSize:18, padding:20, fontWeight:"400"}}>Payment Details</Text>
                <Text style={{color:"#323232", marginLeft:20, marginTop:-7 }}>Package Cost</Text>
                <Text style={{color:"#E22727", alignSelf:"flex-end", marginRight:22, marginTop:-15 }}>R 349.00</Text>
                <Text style={{color:"#323232", marginLeft:20, }}>Discount</Text>
                <Text style={{color:"#E22727", alignSelf:"flex-end", marginRight:22, marginTop:-15 }}>R 0.00</Text>
                <Text style={{color:"#323232", marginLeft:20, }}>VAC (15%)</Text>
                <Text style={{color:"#E22727", alignSelf:"flex-end", marginRight:22, marginTop:-15 }}>R 52.35</Text>
                <Text style={{color:"#323232", marginLeft:20, }}>Total</Text>
                <Text style={{color:"#E22727", alignSelf:"flex-end", marginRight:22, marginTop:-15 }}>R 401.35</Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'grey', marginVertical: 30, marginHorizontal: 20 }} />

            <Text style={{marginTop:-10, marginLeft:20, fontSize:18}}>Select Method of Payment</Text>

            
            <View style={{borderRadius:8, borderColor:"#DB3236", borderWidth:2, height:61, width:100, marginLeft:15, marginTop:25}}>
            </View>

            <View style={{borderRadius:8, borderColor:"#DB3236", borderWidth:2, height:61, width:100, left:135,  top:-60,}}>
            </View>

            <View style={{borderRadius:8, borderColor:"#DB3236", borderWidth:4, height:61, width:100, left:253, top:-120}}>
              <Image style={{width: 90, marginLeft: 2, marginRight: 2, top:4 }} source={require('../assets/img/Payment.png')}/>
            
            </View>
            <View>
                <TextInput 
                style={{borderColor:"#F54D30", borderWidth:2, borderRadius:15, height:45, marginTop:-50, padding:15, marginRight:18, marginLeft:18}}
                placeholder="Enter Account Number"/>

                <TextInput 
                 style={{borderColor:"#F54D30", color:"#A1A1A1",  borderWidth:2, borderRadius:15, height:45, marginTop:30, padding:15,  marginRight:18, marginLeft:18}}
                placeholder="Enter Verification Password"/>  
                </View>

                <View style={{marginBottom:80}}>
                <TouchableOpacity
                 style={{borderRadius:10, backgroundColor:"#9F1D20", height:35, width:175, alignSelf:"center", marginTop:50}}
                 onPress={() => {navigation.navigate('Main')}}>
                    <Text style={{ fontSize:15, color: "#FAFAFA", alignSelf:"center", marginTop:8}}>Confirm Payment</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView> 
        </SafeAreaView>
    
    );
}

 
export default Payment42;