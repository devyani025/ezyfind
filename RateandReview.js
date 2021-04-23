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

const RateandReview=()=>{
    return(
        <SafeAreaView> 
       <ScrollView>
           <View>
               <View>
                  <Image style={{height:190, width:360, alignSelf:"center"}} source={require('../assets/home29.png')}/>
               </View>
               <View>
               <Text style={{color:"#9F1D20", fontSize:21, padding:25, alignSelf:"center"}}>White House Interiors</Text>
               <Image style={{height:30, width:173, alignSelf:"center", marginTop:-5}} source={require('../assets/G29.png')}/>
               </View>
                 <View style={{}}>
                     <View style={styles.main}> 
                         <View>
                             <Text style={{color:"#C1BFBF", fontSize:21, padding:15, opacity:0.5}}>Write a review..</Text>
                         </View>
                    </View>  
                </View>

                  <TouchableOpacity style={{height:35, width:130, backgroundColor:"#9F1D20", alignSelf:"center", marginTop:50, borderRadius:5,}}>
                             <Text style={{alignSelf:"center", marginTop:8, color:"#FFFFFF", fontSize:15}}>Submit</Text>
                             </TouchableOpacity> 
            </View> 
        
        </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    main:{
        height: 200,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 2,
        marginLeft: 16,
        marginRight: 16,
        marginTop:50,
    },
    
})

export default RateandReview;