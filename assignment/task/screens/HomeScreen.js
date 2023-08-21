import React, {Component} from "react";
import {Text,View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{
                alignItems: 'center',
                flexDirection:'row',
                
                paddingVertical: 15,
                paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                fontSize: 25,
                textAlign: 'center',
                margin: 20,
              }}
            >
              Welcome To Superstar Villa Hotel 
            </Text>
            <Ionicons
                name="people-outline"
                color={'black'}
                style={{ top: 50,width:50,height:50}}
            />
            </View>

        )
    }
}