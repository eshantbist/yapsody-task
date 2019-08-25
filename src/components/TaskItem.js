import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class TaskItem extends Component{
    render(){
        return(
            <View style={{height:100,marginVertical:10,borderWidth:1,borderRadius:5,padding:10}}>
                <Text style={{fontWeight:'600',fontSize:18}}>{this.props.item.taskName}</Text>
                <Text style={{fontSize:15,color:'#a6a6a6'}}>{this.props.item.taskDescription}</Text>
            </View>
        )
    }
}