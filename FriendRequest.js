import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderBackLeft from '../components/HeaderBackLeft';
import HeaderBackground from '../components/HeaderBackground';
import { textHeader, font_style, view_style,buttonStyle } from '../components/styles';
import Colors from '../constants/Colors';
const items = [
    {
        name: 'Shanu Tailor',
        uri: 'https://images.unsplash.com/photo-1522098605161-cc0c1434c31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        time: '12:10 PM'
    },
    {
        name: 'Anna Malia',
        uri: 'https://images.unsplash.com/photo-1533202560395-62c7cd5a26b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        time: '11:10 PM'
    },
    {
        name: 'Shinky peter',
        uri: 'https://images.unsplash.com/photo-1464808322410-1a934aab61e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        time: '12.10 PM'
    },
    {
        name: 'Shanu Tailor',
        uri: 'https://images.unsplash.com/photo-1522098605161-cc0c1434c31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        time: '12:10 AM'

    },
    {
        name: 'Anna Malia',
        uri: 'https://images.unsplash.com/photo-1533202560395-62c7cd5a26b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        time: '08:10 PM'
    },
    {
        name: 'Shinky peter ',
        uri: 'https://images.unsplash.com/photo-1522098605161-cc0c1434c31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        time: '12:10 PM'
    },

];

export default class FriendRequest extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerBackground: <HeaderBackground />,
        headerStyle: textHeader.header_style,
        headerTitle: <Text style={textHeader.header}>{`Request`.toUpperCase()}</Text>,
        headerLeft: <HeaderBackLeft navigationProps={navigation} />,
        // headerRight: <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        // <Entypo name='magnifying-glass' size={25} style={{color: 'white'}}/>
        // </View>
      });


    renderItem = ({ item, index }) => {
        return (

            <View style={styles.container}>
                <View style={styles.inputs1}>
                    <Image style={styles.itemImg} source={{ uri: item.uri }} />
                    <View style={{flex:1}}>
                        <View style={styles.inputs}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemTime}>{item.time}</Text>
                        </View>
                        <View style={styles.inputs3}>
                        <View
                                style={{
                                    borderRadius: 20,
                                    borderWidth: 1, backgroundColor: '#FE5665',
                                    borderColor: '#fff', width: 100,
                                    height: 40,justifyContent:'center',marginRight:4
                                }}>
                                <TouchableOpacity style={{justifyContent:'center'}}>
                                    <Text style={{
                                        textAlign: 'center',
                                        alignSelf: 'center',
                                        color:'#fff'}}>Accept</Text>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    borderRadius: 20,
                                    borderWidth: 1, backgroundColor: '#19245A',
                                    borderColor: '#fff', width: 100,
                                    height: 40,justifyContent:'center',marginLeft:4
                                }}>
                                <TouchableOpacity style={{justifyContent:'center'}}>
                                    <Text style={{
                                        textAlign: 'center',
                                        alignSelf: 'center',
                                        color:'#fff'}}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


        );
    };

    render() {
        return (
            <View>

                <FlatList
                    data={items}
                    numColumns={1}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderColor: '#eaeaea',
    },
    itemName: {
        color: Colors.name_txt,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',

    },

    itemImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight:10,
        alignSelf: 'center',
    },
    itemTime: {
        color:Colors.text_color,
        alignSelf: 'center',
        fontSize: 14,

    },
    inputs1: {
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flex:1


    },
    inputs: {
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
         justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:5
    },
    inputs3: {
        marginBottom: 5,
        marginTop: 5,
        flexDirection: 'row',
      
        alignItems: 'center',
       
        marginLeft:15
    },
});