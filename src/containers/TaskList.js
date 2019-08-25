import React,{Component} from 'react';
import {SafeAreaView,View,Text,FlatList,TouchableOpacity,Modal,TextInput,StyleSheet} from 'react-native';
import TaskItem from '../components/TaskItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleModal} from '../actions'

const sampeTaskList=[
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    },
    {
        taskName:"Test task 1",
        taskDescription:"Test task description",
        taskDate:"12 Jly 2019"
    }
]

class TaskList extends Component{

    constructor(props){
        super(props);
        this.state={
            taskList:sampeTaskList
        }
    }

    addTask=()=>{
        console.log("here");
        this.props.toggleModal(true);
    }

    render(){
        const {TestReducer:{isModalOpen}}=this.props;
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:50,borderBottomWidth:1,paddingHorizontal:10}}>
                    <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{
                        this.props.navigation.openDrawer()}}>
                        <Text>Open Drawer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.addTask()} style={{justifyContent:'center'}}>
                        <Text>Add Todo</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:15,marginTop:20,marginBottom:50}}>
                    <FlatList
                        data={sampeTaskList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <TaskItem item={item}/>}
                    />
                </View>
                <Modal
                animationType="fade"
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {this.props.toggleModal(false)}}>
                    <View style={{flex:1,backgroundColor:'#FFF',marginTop:300}}>
                        <Text style={{alignSelf:'flex-end'}} onPress={() => {this.props.toggleModal(false)}}>
                            close
                        </Text>
                        <View>
                            <Text>Task Name</Text>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                    </View>
              </Modal>
            </SafeAreaView>
        )
    }
}

const mapStateToProps=(state)=>{
    return{TestReducer:state.TestReducer}
  }
  
const mapDispatchToProps=(dispatch)=>{
return bindActionCreators({toggleModal},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFF'
    },
    background: {
      width: null,
      height: null
    },
    wrapper: {
      paddingHorizontal: 15,
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      backgroundColor: "transparent",
      borderColor:'#cccccc',
      borderWidth:1,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#FFF'
    },
    button: {
      backgroundColor: "#0088cc",
      paddingVertical: 15,
      marginVertical: 15,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18
    },
  });