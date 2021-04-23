import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { font_style, textHeader } from '../components/styles';
import Colors from '../constants/Colors';
import HeaderBackground from '../components/HeaderBackground';
import HeaderBackLeft from '../components/HeaderBackLeft';
import Slideshow from 'react-native-image-slider-show';
import { FontAwesome } from '@expo/vector-icons';

const about_me_text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.`;

export default class PartnerDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerBackground: <HeaderBackground />,
        headerStyle: textHeader.header_style,
        headerTitle: <Text style={textHeader.header}>{`Anna Malia`.toUpperCase()}</Text>,
        headerLeft: <HeaderBackLeft navigationProps={navigation} />,
        //headerRight: <HeaderProfileRight navigationProps={navigation} />,
    });

    state = {

    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Slideshow
                        dataSource={[
                            { url: 'https://cdn2.stylecraze.com/wp-content/uploads/2015/01/Isometrics.jpg' },
                            { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-yJUyZYYprTuRinCO8bKEcr8PICRNnmsJfPOm3Q_nJEhRe-s&s' },
                            { url: 'https://cdn2.stylecraze.com/wp-content/uploads/2015/01/Rowing.jpg' }
                        ]}
                        indicatorSize={0}
                        arrowRight={<FontAwesome style={{ padding: 10 }} name="angle-right" size={25} color='gray' />}
                        arrowLeft={<FontAwesome style={{ padding: 10 }} name="angle-left" size={25} color='gray' />}
                    />
                </View>

                <View style={styles.user_detail_view}>
                    <Text style={[font_style.font_bold, styles.text_heading]}>Anna Malia</Text>
                    <Text style={[font_style.font_Book,
                    styles.text_sub_heading]}>{`23y | Female | 5km away | Anaerobic`}</Text>
                    <Text style={[font_style.font_Book, styles.text_style]}>{`Golds Gym, LIG Square Chicago`}</Text>

                    <View style={styles.separator} />

                    <Text style={[font_style.font_bold, styles.text_heading, { marginTop: 10 }]}>About Me</Text>

                    <Text style={[font_style.font_Book, styles.text_style]}>{about_me_text}</Text>

                </View>

                <View style={styles.bottom_view}>
                    <TouchableOpacity
                        style={styles.loginScreenButton}
                        underlayColor='gray'
                        activeOpacity={1}>
                        <Text style={[styles.loginText, font_style.font_bold]}>{'Send Request'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    loginScreenButton: {
        marginTop: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.primaryColor,
        borderRadius: 50,
        width: '100%',
        height: 46,
        justifyContent: 'center',
    },
    loginText: {
        color: Colors.white_color,
        textAlign: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 14
    },
    header: {
        padding: 10,
        alignItems: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        borderWidth: 2,
        borderColor: Colors.lighter_gray,
        marginBottom: 10,
    },
    sign_in_txt: {
        color: Colors.white_color,
        fontSize: 26,
    },
    cross_icon_view: {
        width: 32,
        height: 32,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1, },
        shadowColor: 'black',
        shadowOpacity: .4,

        elevation: 10,


        marginTop: 90,
        marginLeft: 60,
        left: 150,
        top: 0,
        zIndex: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    bottom_view: {
        marginStart: 36,
        marginEnd: 36,
        marginBottom: 20
    },
    text_style: {
        marginTop: 10,
        color: Colors.light_text_color
    },
    mergin_view: {
        marginTop: 6,

    },
    user_detail_view: {
        padding: 20
    },
    text_heading: {
        fontSize: 16,
        color: 'black'
    },
    text_sub_heading: {
        marginTop: 10,
        fontSize: 15,
        color: 'black'
    },
    separator: {
        height: 1,
        backgroundColor: Colors.separator_color,
        marginTop: 15,
        marginBottom:15
      },
});
