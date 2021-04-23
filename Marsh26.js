import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Modal,
} from 'react-native';
import { color } from 'react-native-reanimated';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, date:"10:27 PM", type:'in',  message: "Hi, I am a bot speaking in Lorem ipsum and want to talk about your offer"},
      ]
    };
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>

          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Image style={{marginTop:10}} source={require('../assets/congratulation10.png')} /> */}
               <Text style={{marginTop:20, fontSize:15}}>Would you like to accept the offer</Text>
               <View style={{flexDirection:"row"}}> 
               <TouchableOpacity
                style={[styles.button, styles.buttonClo]}
                // onPress={() => this.setModalVisible(!modalVisible)}
                onPress={() => this.setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Purchase</Text>
                <Image style={{resizeMode:"center", height:15, width:15, marginTop:-17, marginLeft:10 }} source={require('../assets/noun_Check.png')}/>
                </TouchableOpacity>
                 
                <TouchableOpacity
                style={[styles.butt, styles.buttonClose]}
              >
                <Text style={styles.textSty}>Decline</Text>
                <Image style={{resizeMode:"center", height:15, width:15, marginTop:-17, marginLeft:10 }} source={require('../assets/cros.png')}/>
                </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>


      <View style={{backgroundColor:"#E84B4B", height:30, width:80, alignSelf:"center", marginTop:20, borderRadius:5 }}>
          <Text style={{color:"#FFFFFF", alignSelf:"center", marginTop:5}}>13/05/20</Text>
      </View>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
                 <TouchableOpacity>
                  <Image style={{height:24, width:17 , marginRight:10}} source={require('../assets/M26_1.png')}/>
                 </TouchableOpacity>

                 <TouchableOpacity>   
                <Image style={{height:22, width:15 , marginRight:19}} source={require('../assets/M26_2.png')}/>
                </TouchableOpacity>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={require('../assets/M26_3.png')} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    // backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"white",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    // borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#F9E5E5",
    borderRadius:20,
    padding:5,
    marginRight:150
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop:-10
    // backgroundColor:"#7A7A7A",
    // opacity:0.8
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
  //   padding: 95,
    height:"20%",
    width:"80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    // padding: 10,
    // elevation: 2
    height:30,
    width:120,
    marginTop:40,
    borderWidth:1,
    borderColor:"#9F1D20"

  },
  butt: {
    borderRadius: 10,
    // padding: 10,
    // elevation: 2
    height:30,
    width:120,
    marginTop:40,
    marginLeft:20
  },
  buttonClose: {
    backgroundColor: "#9F1D20",
  },
  
  textStyle: {
    color: "#232323",
    // fontWeight: "bold",
    // textAlign: "center",
    fontSize:15,
    alignSelf:"center",
    marginTop:4,
    marginLeft:10
  },
  textSty: {
    color: "#FFFFFF",
    // fontWeight: "bold",
    // textAlign: "center",
    fontSize:15,
    alignSelf:"center",
    marginTop:5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
}); 