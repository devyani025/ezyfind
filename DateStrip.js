import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Color from '../constants/Colors';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

var week;

export default class DateStrip extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDate: this.props.selectedDate,
            week: []
        }

    }

    componentDidMount(){
        this.setData(new Date())
    }

    setData = (date) => {
        // week = [];
        // var data = data;
        // data.map(item => {
        //     var object = moment(item, "MM-DD-YYYY");
        //     var entry = {
        //         day: object.format("ddd"),
        //         date: object.format("DD"),
        //         month: object.format("MMM"),
        //         dateObject: object
        //     }
        //     week.push(entry);
        // })

        console.log(date);
        week = [];
        var tommorrow = date;
        for (i = 0; i < 7; i++) {
            var object = moment(tommorrow);
            var entry = {
                day: object.format("ddd"),
                date: object.format("DD"),
                dateObject: object,
                month: object.format("MMM"),
            }
            tommorrow.setDate(tommorrow.getDate() + 1);
            week.push(entry);
        }
        this.setState({week});
        //console.log(week);


        // console.log("week:",week);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ selectedDate: nextProps.selectedDate });
        this.setData(nextProps.data);
    }

    render() {
        // console.log(this.state.selectedDate);
        const {week} = this.state;
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ padding: 10, justifyContent: 'center',flex:1 }} onPress={()=>{
                    var date = week[0].dateObject.toDate();
                    date.setDate(date.getDate() - 7)
                    this.setData(date)}
                    }>
                    <Ionicons name="ios-arrow-back" size={25} />
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ paddingRight: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {/* <View style={{flexDirection:'row'}}> */}
                    {week.map((item, key) => {
                        return (
                            <View style={{ alignItems: 'center', marginLeft: 15, marginRight: 15 }} key={key}>
                                {item.dateObject.isSame(this.state.selectedDate, 'day') ?
                                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#fff', }}>
                                        <Text style={{ fontFamily: 'futura-bold', color: Color.primaryColor }}>Today</Text>
                                    </View>
                                    :
                                    <View>
                                        <View> 
                                            <Text style={{  }}>{item.day}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                            <Text onPress={() => {
                                                //this.setState({selectedDate:item.dateObject})
                                                this.props.onChangeDate(item.dateObject)
                                            }} style={{ fontFamily: 'futura-bold', }}>{item.date}</Text>
                                        </View>
                                        <View>
                                            <Text style={{  }}>{item.month}</Text>
                                        </View>
                                    </View>
                                }

                            </View>
                        );
                    })}
                </ScrollView>
                <TouchableOpacity style={{ padding: 10, justifyContent: 'center',flex:1 }} onPress={()=>{
                    var date = week[6].dateObject.toDate();
                    date.setDate(date.getDate() + 1)
                    this.setData(date)}
                    }>
                    <Ionicons name="ios-arrow-forward" size={25} />
                </TouchableOpacity>
            </View>
        );
    }

}