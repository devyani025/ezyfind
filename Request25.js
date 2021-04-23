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

const Request25=({navigation})=>{
    return(
        <SafeAreaView> 
       <ScrollView>
           <View>
               <View>
                  <Image style={{height:190, width:200, alignSelf:"center"}} source={require('../assets/R25.png')}/>
               </View>
                 <View style={{}}>
                     <View style={styles.main}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15}}>Windscreen for Car</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15}}>Request Date</Text>
                             <Text style={{marginLeft:135, marginTop:-20, color:"#C9C9C9"}}>22 April 18</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:20}}>Category Details</Text>
                             <Text style={{color:"#E22727", marginLeft:15, fontSize:15, opacity:0.7}}>Products</Text>
                             <Text style={{color:"#232323", marginLeft:80, fontSize:15, marginTop:-20}}>{'>>'}</Text>
                             <Text style={{color:"#E22727", marginLeft:100, fontSize:15,  marginTop:-20, opacity:0.7}}>Automotive</Text>
                             <Text style={{color:"#232323", marginLeft:179, fontSize:15, marginTop:-20}}>{'>>'}</Text>
                             <Text style={{color:"#E22727", marginLeft:199, fontSize:15, marginTop:-20, opacity:0.7}}>Spare Parts</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15,}}>{'>>'}</Text>
                             <Text style={{color:"#E22727", marginLeft:35, fontSize:15, marginTop:-20, opacity:0.7}}>Volks</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Status Request</Text>
                             <Text style={{color:"#2CD826", marginLeft:140, fontSize:15, marginTop:-20}}>Approved</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Description</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:15, fontSize:15, marginTop:-2}}>The size should fit a mini coop and has to be mint condition</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Province</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:140, fontSize:15, marginTop:-20}}>Guateng</Text>
                         </View>
                    </View>  
                </View> 

               

                <View style={{}}>
                     <View style={styles.main2}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15,}}>Selected Company</Text>
                             <Text style={{color:"#232323", fontSize:16, padding:15, marginTop:-20,}}>No Selected Company</Text>
                         </View>
                    </View>  
                </View> 

                <View style={{marginBottom:40}}>
                     <View style={styles.main3}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15,}}>Responses (1)</Text>
                             <Text style={{color:"#232323", fontSize:17, padding:15, marginTop:-20, marginLeft:90}}>Marsh</Text>
                             <Text style={{color:"#232323", fontSize:15, padding:15, marginTop:-23, marginLeft:90, opacity:0.7}}>Hi, I am a bot speaking in Lorem Ip..</Text> 
                             <Image style={{height:10, width:10, marginTop:-83, marginLeft:157}} source={require('../assets/R25_1.png')}/>
                             <TouchableOpacity  
                             onPress={() => { navigation.navigate('Marsh26')}}>
                             <Image style={{height:20, width:20, fontSize:17, alignSelf:"flex-end", marginRight:20}} source={require('../assets/R25_2.png')}/>
                             </TouchableOpacity>
                         </View>
                    </View>  
                </View> 
            </View> 
        
        </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    main:{
        height: 340,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
    },
    main2:{
        height: 105,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
    },
    main3:{
        height: 145,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
    },
})

export default Request25;