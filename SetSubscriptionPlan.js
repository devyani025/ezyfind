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
// import NewCart from './Companyinfo';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

export default class SetSubscriptionPlan extends React.Component {

    render() {
    return(
        
       <ScrollView>
           <View>
               <TextInput
                   style={{borderWidth:2, height:41, borderColor:"#F54D30", top:30, borderRadius:10 , padding:10, marginLeft:25, marginRight:25 }}
                   placeholder="3 Months (5% Off)"
                />
                  <Image style={{alignSelf:"flex-end", marginRight:"12%", marginTop:"1%"}} source={require('../assets/d91.png')}/>
             <View style={{marginTop:15}}>

             <View style={{ height: 1, backgroundColor: '#E2AAAA', marginVertical: 25, marginRight:30, marginLeft:30 }} />
             <TouchableOpacity onPress={() => this.props.navigation.navigate('Companyinfo')}  >
                <View style={styles.main}>
                    <View style={{borderRadius:15, borderColor:"#DB3236", borderWidth:1, height:60, backgroundColor: '#E2AAAA',}}>
                    <Image style={{height:45, width:45, marginTop:-25, alignSelf:"center", }} source={require ('../assets/Group418.png')}/>
                        <Text style={styles.text}>Corporate</Text>
                        {/* <Image style={{height:45, width:45, alignSelf:"center", marginTop:"-20%"}} source={require ('../assets/Group418.png')}/> */}
                        <Text style={{ fontSize:10, color:"#E22727",alignSelf:"flex-end",opacity:0.5, marginTop:-30, marginRight:"5%"}}>R150,000.00</Text>
                        <Text style={{ fontSize:17, fontWeight:"bold", color:"#E22727",alignSelf:"flex-end", marginRight:"5%", marginTop:-5}}>R 142,500.00</Text>
                     </View>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>2 Hrs Time Delay</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>Unlimited Category</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>Unlimited Users</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>300 Requests</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>50 specials</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>50 E-Flyers</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>Unlimited Sales Leads</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>100 Keywords</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>CRM</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>PayFast Integration</Text>
                     <Image style={{height:31, width:30, alignSelf:"flex-end", marginTop:-29, marginRight:"5%"}} source={require ('../assets/Group422.png')}/>
                     {/* <Image style={{height:45, width:45,}} source={require ('../assets/Group418.png')}/> */}
                 </View>  
                 </TouchableOpacity>
                 <View style={styles.main}>
                    <View style={{borderRadius:15, borderColor:"#DB3236", borderWidth:1, height:60, backgroundColor: '#E2AAAA',}}>
                    <Image style={{height:45, width:45, marginTop:-25, alignSelf:"center", }} source={require ('../assets/Group418.png')}/>
                        <Text style={styles.text}>Franchisee</Text>
                        {/* <Image style={{height:45, width:45, marginTop:-25, alignSelf:"center", }} source={require ('../assets/Group418.png')}/> */}
                        <Text style={{ fontSize:10, color:"#E22727",opacity:0.5, marginTop:-30, marginRight:"5%", alignSelf:"flex-end"}}>R30,000.00</Text>
                        <Text style={{ fontSize:17, fontWeight:"bold", color:"#E22727", alignSelf:"flex-end", marginRight:"5%", marginTop:-5}}>R 28,500.00</Text>
                     </View>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>3 Hrs Time Delay</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>5 Category</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}> 5 Users</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>200 Requests</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>25 specials</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>25 E-Flyers</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>50 Sales Leads</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>50 Keywords</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>CRM</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>PayFast Integration</Text>
                     <Image style={{height:31, width:30, alignSelf:"flex-end", marginTop:-29, marginRight:"5%"}} source={require ('../assets/Group422.png')}/>
                     {/* <Image style={{height:45, width:45, marginLeft:125, marginTop:-285}} source={require ('../assets/Group418.png')}/> */}
                 </View>  
                 <View style={styles.main}>
                    <View style={{borderRadius:15, borderColor:"#DB3236", borderWidth:1, height:60, backgroundColor: '#E2AAAA',}}>
                    <Image style={{height:45, width:45, marginTop:-25, alignSelf:"center", }} source={require ('../assets/Group418.png')}/>
                        <Text style={styles.text}>SME</Text>
                        {/* <Image style={{height:45, width:45, alignSelf:"center", marginTop:"-20%"}} source={require ('../assets/Group418.png')}/> */}
                        <Text style={{ fontSize:10, color:"#E22727", opacity:0.5, marginTop:-30, marginRight:"5%", alignSelf:"flex-end"}}>R1047.00</Text>
                        <Text style={{ fontSize:17, fontWeight:"bold", color:"#E22727", marginTop:-5, marginRight:"5%", alignSelf:"flex-end"}}>R 994.65</Text>
                     </View>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>4 Hrs Time Delay</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>3 Category</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>3 Users</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>100 Requests</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>10 specials</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>10 E-Flyers</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>10 Sales Leads</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>10 Keywords</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>CRM</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>PayFast Integration</Text>
                     <Image style={{height:31, width:30, alignSelf:"flex-end", marginTop:-29, marginRight:"5%"}} source={require ('../assets/Group422.png')}/>
                     {/* <Image style={{height:45, width:45, marginLeft:125, marginTop:-285}} source={require ('../assets/Group418.png')}/> */}
                 </View>  

                 <View style={styles.main}>
                    <View style={{borderRadius:15, borderColor:"#DB3236", borderWidth:1, height:60, backgroundColor: '#E2AAAA',}}>
                    <Image style={{height:45, width:45, marginTop:-25, alignSelf:"center", }} source={require ('../assets/Group418.png')}/>
                        <Text style={styles.text}>Free</Text>
                        {/* <Image style={{height:45, width:45, alignSelf:"center", marginTop:"-20%"}} source={require ('../assets/Group418.png')}/> */}
                        {/* <Text style={{ fontSize:10, color:"#E22727", marginLeft:218, bottom:30,opacity:0.5}}>R150,000.00</Text> */}
                        <Text style={{ fontSize:17, fontWeight:"bold", color:"#E22727",marginTop:-25, marginRight:"5%", alignSelf:"flex-end"}}>0.00</Text>
                     </View>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>5 Hrs Time Delay</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>3 Category</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>1 Users</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>No Requests</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>NO specials</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>NO  E-Flyers</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>NO Sales Leads</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>100 Keywords</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>CRM</Text>
                     <Text style={{ color:"#545454", marginLeft:29, bottom:0, padding:2, opacity:0.7, fontSize:12}}>PayFast Integration</Text>
                     <Image style={{height:31, width:30, alignSelf:"flex-end", marginTop:-29, marginRight:"5%"}} source={require ('../assets/Group422.png')}/>
                     {/* <Image style={{height:45, width:45, marginLeft:125, marginTop:-285}} source={require ('../assets/Group418.png')}/> */}
                 </View>  
            </View>
            </View> 
        
          
      </ScrollView>

    );
 }
}

// function Cart(props) {
//     return (
//         <NewCart />
//     );
// }

// const NewAppNavigator = createStackNavigator({
//     Home: {
//         screen: SetSubscriptionPlan,
//         navigationOptions: {
//             title: "Set Subscription Plan",
//             // header: null,
           
//         }
//     },
//     Spage: {
//         screen: Cart,
//         navigationOptions: {
//             title: "",
//             // headerLeft : <MyActionBarImage />,
//             header: null,
//             tabBarLabel: <Text style={{ color: "white" }}>Cart</Text>,
//             barStyle: { backgroundColor: "#281b39" },
//         }
//     },
// })

// const AppContainer = createAppContainer(AppNavigator);  
// export default createAppContainer(NewAppNavigator);
const styles = StyleSheet.create({
    main:{
        height: 280,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 26,
        marginRight: 26,
        marginTop:45,


        // position:"absolute"
    },
    image:{
        height:64,
        width:64,
        marginTop:17,
        marginLeft:10
    },
    text:{
        // marginLeft:110,
        // bottom:70,
        fontSize:17,
        fontWeight:"bold",
        color:"#323232",
        marginLeft:20,
        marginTop:-3,
    }
})

// export default SetSubscriptionPlan;