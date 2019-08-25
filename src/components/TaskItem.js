import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class TaskItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.taskNameText}>{this.props.item.taskName}</Text>
                <Text style={styles.taskDescriptionText}>{this.props.item.taskDescription}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:100,
        marginVertical:10,
        borderWidth:1,
        borderRadius:5,
        padding:10
    },
    taskNameText:{
        fontWeight:'600',
        fontSize:18
    },
    taskDescriptionText:{
        fontSize:15,
        color:'#a6a6a6'
    }
  });