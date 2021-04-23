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
import { WebView } from "react-native-webview";
import Loader from '../components/loader';
import { font_style, textHeader } from '../components/styles';
import Colors from '../constants/Colors';
import Constants from '../constants/Constant';
import HeaderBackground from '../components/HeaderBackground';
import HeaderBackLeft from '../components/HeaderBackLeft';
import HeaderLeft from '../components/HeaderLeft';
import Slideshow from 'react-native-image-slider-show';
import { FontAwesome } from '@expo/vector-icons';
import { BASE_URL } from './API_baseURL';

export default class TermCondition extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerBackground: <HeaderBackground />,
        headerStyle: textHeader.header_style,
        headerTitle: <Text style={textHeader.header}>{`${Constants.term_condition}`.toUpperCase()}</Text>,
        headerLeft: <HeaderLeft navigationProps={navigation} />,
        headerRight: <Text></Text>,
    });

  

    render() {
        return (
            <View style={styles.container}>
              <ScrollView>
           <View style={{marginTop:5}}>
               <TextInput
                   style={{borderWidth:2, width:'90%', height:47, borderColor:"gray", top:8, left:3, borderRadius:10 ,paddingLeft:10,margin:20}}
                   placeholder="Search for a business"
                />
            <View style={{marginTop:20}}>
            <TouchableOpacity  
            activeOpacity={0.9}
            onPress={()=> {this.props.navigation.navigate('WhiteHouseInteriors')}}>
                <View style={styles.main}>
                  <Image style={styles.image} source={require('../assets/Knipex.png')}/>
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
                 </TouchableOpacity>
            </View>

            <View style={{marginTop:10}}>
                <View style={styles.main}>
                  <Image style={styles.image} source={require('../assets/R25.png')}/>
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
            <View style={{marginTop:10}}>
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
            <View style={{marginTop:10}}>
                <View style={styles.main}>
                  <Image style={styles.image} source={require('../assets/asset.png')}/>
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
            <View style={{marginTop:10}}>
                <View style={styles.main}>
                  <Image style={styles.image} source={require('../assets/asset.png')}/>
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
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main:{
        height: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowRadius: 20,
        elevation: 8,
        marginLeft: 16,
        marginRight: 16,
        marginTop:10,
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
});
