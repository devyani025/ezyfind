import React from 'react';
import { Alert, Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';

const { Popover } = renderers;

class PickImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileimage: this.props.image
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.profileimage !== nextProps.image)
            this.setState({ profileimage: nextProps.image });
    }

    pickPofileImage = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);

            var imageData = {
                name: image.path.substring(image.path.lastIndexOf('/') + 1),
                type: image.mime,
                uri:
                    Platform.OS === "android" ? image.path : image.path.replace("file://", "")
            }

            if (this.props.showConfirmation) {
                Alert.alert(
                    'Update Image',
                    'Are you sure you want to update Profile Image?',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        {
                            text: 'OK', onPress: () => {
                                this.setState({ profileimage: imageData.uri });
                                this.props.onImage && this.props.onImage(imageData);
                            }
                        },
                    ],
                    { cancelable: false }
                )
            } else {
                this.setState({ profileimage: imageData.uri });
                this.props.onImage && this.props.onImage(imageData);
            }
        });
    }

    capturePofileImage = () => {
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);

            var imageData = {
                name: image.path.substring(image.path.lastIndexOf('/') + 1),
                type: image.mime,
                uri:
                    Platform.OS === "android" ? image.path : image.path.replace("file://", "")
            }


            if (this.props.showConfirmation) {
                Alert.alert(
                    'Update Image',
                    'Are you sure you want to update Profile Image?',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        {
                            text: 'OK', onPress: () => {
                                this.setState({ profileimage: imageData.uri });
                                this.props.onImage && this.props.onImage(imageData);
                            }
                        },
                    ],
                    { cancelable: false }
                )
            } else {
                this.setState({ profileimage: imageData.uri });
                this.props.onImage && this.props.onImage(imageData);
            }

        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        var status = false;
        console.log(status);
        return this.state.profileimage != nextProps.image;;
    }

    render() {
        const { profileimage } = this.state;
        console.log(profileimage);
        return (
            <View>
                <MenuProvider>
                    <Menu renderer={Popover} rendererProps={{ placement: 'bottom', preferredPlacement: 'bottom', anchorStyle: { backgroundColor: 'transparent', alisnSelf: 'flex-end' } }}>
                        <MenuTrigger customStyles={{ triggerTouchable: { activeOpacity: 0.6, underlayColor: 'transparent' } }}>
                            {/* <View
                                style={{ width: 120, height: 120, padding: 5, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ width: '100%', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                                    <Image style={{ width: 105, height: 105 }} resizeMode='contain' source={profileimage ? { uri: profileimage } : require('../assets/images/profile_select.png')}></Image>
                                </View>
                            </View> */}

                            <Text style={{
                                color: '#194BE6', textAlign: 'center', justifyContent: 'center', marginBottom: 5, marginTop: 5, textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                            }}> Edit Photo</Text>
                        </MenuTrigger>

                        <MenuOptions customStyles={{ optionWrapper: { justifyContent: 'space-between' }, optionText: { fontSize: 18 } }} optionsContainerStyle={{ backgroundColor: 'transparent' }} style={{ padding: 5, borderRadius: 10, backgroundColor: '#ffffffEE' }}>
                            <MenuOption onSelect={() => { this.capturePofileImage() }} text='Take Picture' />
                            <MenuOption onSelect={() => { this.pickPofileImage() }} text='Pick from Gallery' />
                        </MenuOptions>
                    </Menu>
                </MenuProvider>
            </View>
        );
    }
}


const styles = StyleSheet.create({

});
export { PickImage }