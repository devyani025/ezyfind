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

const WhiteHouse=({navigation})=>{
    return(
        <SafeAreaView> 
       <ScrollView>
           <View>
               <View>
                  <Image style={{height:190, width:360, alignSelf:"center"}} source={require('../assets/home29.png')}/>
               </View>
                 <View style={{}}>
                     <View style={styles.main}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15}}>White House Interiors</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15}}>Address</Text>
                             <Text style={{marginLeft:80, marginTop:-20, color:"#C9C9C9"}}>No 39, 4th Street, Parkhurst, Johannaesburg, Parkhurst,, City of Johannesburg Metropolitan Municipality, Gauteng</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:20}}>Registered Date</Text>
                             <Text style={{color:"#C9C9C9", marginLeft:130, fontSize:15, marginTop:-20}}>26 July 2015</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Status</Text>
                             <Text style={{color:"#2CD826", marginLeft:75, fontSize:15, marginTop:-20}}>Active</Text>
                         </View>
                    </View>  
                </View> 

                <View style={{marginTop:10}}>
                     <View style={styles.main2}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15}}>Contact Information</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15}}>Phone</Text>
                             <Text style={{marginLeft:80, marginTop:-20, color:"#C9C9C9"}}>825771573</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:20}}>Fax</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Website</Text>
                             <Text style={{marginLeft:80, marginTop:-20, color:"#C9C9C9"}}>Website www.whitehouseinteriors.co</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Email</Text>
                             <Text style={{marginLeft:80, marginTop:-20, color:"#C9C9C9"}}>No Email</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Helpline Number</Text>
                             <Text style={{marginLeft:150, marginTop:-20, color:"#C9C9C9"}}>011 788 1626</Text>
                             <Text style={{color:"#232323", marginLeft:15, fontSize:15, marginTop:18}}>Help Desk</Text>
                             <TouchableOpacity style={{height:35, width:130, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:25, borderRadius:5,}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Contact Now</Text>
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
                             <TouchableOpacity style={{height:35, width:130, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:30, borderRadius:5,}}
                             onPress={()=>{navigation.navigate('RateandReview')}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Give Rating</Text>
                             </TouchableOpacity>
                         </View>
                    </View>  
                </View> 

                <View style={{}}>
                     <View style={styles.main4}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15,}}>Specials</Text>
                             <Text style={{color:"#232323", fontSize:18, padding:15, marginTop:-20, opacity:0.7}}>No specials found</Text>
                              
                         </View>
                    </View>  
                </View> 

                <View style={{marginBottom:30}}>
                     <View style={styles.main4}> 
                         <View>
                             <Text style={{color:"#9F1D20", fontSize:21, padding:15,}}>Magazines</Text>
                             <Text style={{color:"#232323", fontSize:18, padding:15,  marginTop:-20, opacity:0.7}}>No magazines found</Text>
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
        height: 225,
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
        height: 360,
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

export default WhiteHouse;