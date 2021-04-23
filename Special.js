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

export default class Special extends React.Component {
    render(){
    return(
        <SafeAreaView> 
       <ScrollView>
           <View>
               <View>
                  <Image style={{height:190, width:360, alignSelf:"center"}} source={require('../assets/S32.png')}/>
               </View>
                 <View style={{}}>
                     <View style={styles.main}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15}}>Get a Free Bosch Cordless Screwdriver</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15}}>Company Name</Text>
                             <Text style={{marginLeft:135, marginTop:-20, color:"#C9C9C9"}}>Tiger Wheels</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:20}}>Category</Text>
                             <Text style={{color:"#E22727", marginLeft:15, fontSize:15,}}>Products</Text>
                             <Text style={{color:"#232323", marginLeft:80, fontSize:15, marginTop:-20}}>{">>"}</Text>
                             <Text style={{color:"#E22727", marginLeft:100, fontSize:15,  marginTop:-20}}>Automotive</Text>
                             <Text style={{color:"#232323", marginLeft:179, fontSize:15, marginTop:-20}}>{">>"}</Text>
                             <Text style={{color:"#E22727", marginLeft:199, fontSize:15, marginTop:-20}}>Tyres And Shocks</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15,}}>{">>"}</Text>
                             <Text style={{color:"#E22727", marginLeft:35, fontSize:15, marginTop:-20}}>Tyres</Text>
                             <Text style={{color:"#232323", marginLeft:75, fontSize:15, marginTop:-20}}>{">>"}</Text>
                             <Text style={{color:"#E22727", marginLeft:95, fontSize:15, marginTop:-20}}>Any</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Amount</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:95, fontSize:15, marginTop:-20}}>0</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Start Date</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:95, fontSize:15, marginTop:-20}}>3 / 11 / 2019</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>End Date</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:95, fontSize:15, marginTop:-20}}>3 / 11 / 2019</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Description</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:15, fontSize:15, marginTop:-2}}>Lorem Ipsum is a typewriter dummy text used from the 1990s and is still widely regarded the best method to fill up blank space</Text>
                         </View>
                    </View>  
                </View> 

                <View style={{marginTop:10}}>
                     <View style={styles.main2}> 
                         <View>
                             <TouchableOpacity style={{height:35, width:239, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:25, borderRadius:5,}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Get Quotations</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={{height:35, width:239, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:25, borderRadius:5,}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Negotiate Price</Text>
                             </TouchableOpacity>

                             <TouchableOpacity style={{height:35, width:239, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:25, borderRadius:5,}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Purchase</Text>
                             </TouchableOpacity>
                         </View>
                    </View>  
                </View> 

                <View style={{}}>
                     <View style={styles.main3}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15, alignSelf:"center"}}>Rating</Text>
                             <Text style={{color:"#CFCFCF", fontSize:35, padding:15, alignSelf:"center", marginTop:-20, opacity:0.5}}>0.0</Text>
                             {/* <Text style={{color:"#232323", marginLeft:15, fontSize:15}}>Address</Text>
                             <Text style={{marginLeft:80, marginTop:-20, color:"#C9C9C9"}}>No 39, 4th Street, Parkhurst, Johannaesburg, Parkhurst,, City of Johannesburg Metropolitan Municipality, Gauteng</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:20}}>Registered Date</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:130, fontSize:15, marginTop:-20}}>26 July 2015</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Status</Text>
                             <Text style={{color:"#2CD826", marginLeft:75, fontSize:15, marginTop:-20}}>Active</Text> */}
                             <Image style={{height:25, width:143, alignSelf:"center", marginTop:-15}} source={require('../assets/G29.png')}/>
                             <TouchableOpacity style={{height:35, width:130, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:30, borderRadius:5,}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Give Rating</Text>
                             </TouchableOpacity>
                         </View>
                    </View>  
                </View> 

                <View style={{marginBottom:40}}>
                     <View style={styles.main4}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15,}}>Other Specials by Tiger Wheels</Text>
                             <Text style={{color:"#232323", fontSize:16, padding:15, marginTop:-20, opacity:0.7}}>No specials found</Text>
                              
                         </View>
                    </View>  
                </View> 
            </View> 
        
        </ScrollView>
        </SafeAreaView>

    );
                            }
}

const styles = StyleSheet.create({
    main:{
        height: 420,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
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
    },
    main2:{
        height: 210,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
    },
    main3:{
        height: 215,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
    },
    main4:{
        height: 105,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:20,
    },
})

 