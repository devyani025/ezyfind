import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Keyboard, Image, SafeAreaView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AutogrowInput from 'react-native-autogrow-input';
import Colors from '../constants/Colors';
import { textHeader, font_style } from '../components/styles';
import HeaderBackLeft from '../components/HeaderBackLeft';
import HeaderBackground from '../components/HeaderBackground';

//used to make random-sized messages
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The actual chat view itself- a ScrollView of BubbleMessages, with an InputBar at the bottom, which moves with the keyboard
export default class SingleChat extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerBackground: <HeaderBackground />,
    headerStyle: textHeader.header_style,
    //headerTitle: <Text style={textHeader.header}>{`${navigation.state.params.title}`.toUpperCase()}</Text>,
    headerTitle: <Text style={textHeader.header}>{`Anna Malia`.toUpperCase()}</Text>,
    headerLeft: <TouchableOpacity
      onPress={() => { navigation.navigate('Chat') }} style={textHeader.leftIcon}>
      <Image source={require('./../assets/images/arrow-left_3x.png')} style={{ width: 11, height: 20, alignSelf: 'flex-start' }} />
    </TouchableOpacity>,
    headerRight: <View style={{ marginEnd: 20 }}>
      <Image source={require('../assets/images/admin.jpg')} style={{ width: 32, height: 32, borderRadius: 32 / 2 }} />
    </View>

  });
  constructor(props) {
    super(props);

    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.';

    //create a set number of texts with random lengths. Also randomly put them on the right (user) or left (other person).
    var numberOfMessages = 10;

    var messages = [];

    for (var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(10, 120);

      var direction = getRandomInt(1, 2) === 1 ? 'right' : 'left';

      message = loremIpsum.substring(0, messageLength);

      messages.push({
        direction: direction,
        text: message
      })
    }

    this.state = {
      messages: messages,
      inputBarText: ''
    }
  }



  //fun keyboard stuff- we use these to get the end of the ScrollView to "follow" the top of the InputBar as the keyboard rises and falls
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  //When the keyboard appears, this gets the ScrollView to move the end back "up" so the last message is visible with the keyboard up
  //Without this, whatever message is the keyboard's height from the bottom will look like the last message.
  keyboardDidShow(e) {
    this.scrollView.scrollToEnd();
  }

  //When the keyboard dissapears, this gets the ScrollView to move the last message back down.
  keyboardDidHide(e) {
    this.scrollView.scrollToEnd();
  }

  //scroll to bottom when first showing the view
  componentDidMount() {
    setTimeout(function () {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  //this is a bit sloppy: this is to make sure it scrolls to the bottom when a message is added, but
  //the component could update for other reasons, for which we wouldn't want it to scroll to the bottom.
  componentDidUpdate() {
    setTimeout(function () {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  _sendMessage() {
    this.state.messages.push({ direction: "right", text: this.state.inputBarText });

    this.setState({
      messages: this.state.messages,
      inputBarText: ''
    });
  }

  _onChangeInputBarText(text) {
    this.setState({
      inputBarText: text
    });
  }

  //This event fires way too often.
  //We need to move the last message up if the input bar expands due to the user's new message exceeding the height of the box.
  //We really only need to do anything when the height of the InputBar changes, but AutogrowInput can't tell us that.
  //The real solution here is probably a fork of AutogrowInput that can provide this information.
  _onInputSizeChange() {
    setTimeout(function () {
      this.scrollView.scrollToEnd({ animated: false });
    }.bind(this))
  }

  render() {

    var messages = [];

    this.state.messages.forEach(function (message, index) {
      messages.push(
        <MessageBubble key={index} direction={message.direction} text={message.text} />
      );
    });

    return (
      <View style={styles.outer}>
        <ScrollView ref={(ref) => { this.scrollView = ref }} contentContainerStyle={{ paddingBottom: 20 }} style={styles.messages}>
          {messages}
        </ScrollView>
        <InputBar onSendPressed={() => this._sendMessage()}
          onSizeChange={() => this._onInputSizeChange()}
          onChangeText={(text) => this._onChangeInputBarText(text)}
          text={this.state.inputBarText} />
        <KeyboardSpacer />
        <SafeAreaView style={{backgroundColor:'#fff'}}/>
      </View>
    );
  }
}

//The bubbles that appear on the left or the right for the messages.
class MessageBubble extends Component {
  render() {

    //These spacers make the message bubble stay to the left or the right, depending on who is speaking, even if the message is multiple lines.
    var leftSpacer = this.props.direction === 'left' ? null : <View style={{ width: 100 }} />;
    var rightSpacer = this.props.direction === 'left' ? <View style={{ width: 100, }} /> : null;

    var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];

    var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;

    var arrowStyle = this.props.direction === 'left' ? [styles.arrowBubbleLeft] : [styles.arrowBubbleRight];

    return (
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        {leftSpacer}
        <View style={{
          flexDirection: 'row', flex: 1, marginStart: 16, marginEnd: 16, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}>
          <View style={arrowStyle} />

          <View style={bubbleStyles}>
            <Text style={[bubbleTextStyle, font_style.font_Book]}>
              {this.props.text}
            </Text>
          </View>
        </View>

        {rightSpacer}
      </View>
    );
  }
}

//The bar at the bottom with a textbox and a send button.
class InputBar extends Component {

  //AutogrowInput doesn't change its size when the text is changed from the outside.
  //Thus, when text is reset to zero, we'll call it's reset function which will take it back to the original size.
  //Another possible solution here would be if InputBar kept the text as state and only reported it when the Send button
  //was pressed. Then, resetInputText() could be called when the Send button is pressed. However, this limits the ability
  //of the InputBar's text to be set from the outside.
  componentWillReceiveProps(nextProps) {
    if (nextProps.text === '') {
      this.autogrowInput.resetInputText();
    }
  }

  render() {
    return (
      <View style={styles.inputBar}>
        <TouchableHighlight style={styles.sendButton} onPress={() => this.props.onSendPressed()}>
          <Image source={require('../assets/images/camera_3x.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
        </TouchableHighlight>
        <TouchableHighlight style={styles.sendButton} onPress={() => this.props.onSendPressed()}>
          <Image source={require('../assets/images/clip_3x.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
        </TouchableHighlight>
        <AutogrowInput style={styles.textBox}
          ref={(ref) => { this.autogrowInput = ref }}
          multiline={true}
          defaultHeight={30}
          onChangeText={(text) => this.props.onChangeText(text)}
          onContentSizeChange={this.props.onSizeChange}
          value={this.props.text}
          placeholder="Type message..."
        />
        <TouchableHighlight style={styles.sendButton} onPress={() => this.props.onSendPressed()}>
          <Image source={require('../assets/images/send_btn_3x.png')} style={{ width: 32, height: 32 }} resizeMode="contain" />
        </TouchableHighlight>
      </View>
    );
  }
}

//TODO: separate these out. This is what happens when you're in a hurry!
const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    backgroundColor: Colors.bg_color
  },
  messages: {
    flex: 1,
  },
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: Colors.white_color,

    justifyContent: 'center',
    alignItems: 'center'
  },

  textBox: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10
  },

  sendButton: {
    marginLeft: 5,
    paddingRight: 15,
    width: 32,
    height: 32,
    justifyContent: 'center'
  },

  //MessageBubble

  messageBubble: {
    borderRadius: 5,
    marginTop: 16,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    flex: 1,
  },

  messageBubbleLeft: {
    backgroundColor: Colors.white_color,
  },

  messageBubbleTextLeft: {
    color: 'black'
  },

  messageBubbleRight: {
    backgroundColor: Colors.primaryColor
  },

  messageBubbleTextRight: {
    color: 'white'
  },

  arrowBubbleLeft: {
    width: 0,
    height: 0,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderLeftWidth: 10,
    borderRightColor: Colors.white_color,
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderTopWidth: 10,
    borderBottomColor: Colors.white_color,
    borderBottomWidth: 10,
    bottom: 0,
    left: 0,
    alignItems: 'flex-start'
  },
  arrowBubbleRight: {
    width: 0,
    height: 0,
    position: 'absolute',
    borderLeftColor: Colors.primaryColor,
    borderLeftWidth: 10,
    borderRightColor: 'transparent',
    borderRightWidth: 10,
    borderTopColor: 'transparent',
    borderTopWidth: 10,
    borderBottomColor: Colors.primaryColor,
    borderBottomWidth: 10,
    bottom: 0,
    right: 0,
    alignItems: 'flex-end'
  }
})
