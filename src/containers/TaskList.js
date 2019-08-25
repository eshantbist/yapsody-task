import React,{Component} from 'react';
import {SafeAreaView,View,Text,FlatList,TouchableOpacity,Modal,TextInput,StyleSheet,TouchableHighlight} from 'react-native';
import TaskItem from '../components/TaskItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleModal,addNewTask} from '../actions'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class TaskList extends Component{

    constructor(props){
        super(props);
        this.state={
            taskName:'',
            taskDescription:''
        }
    }

    addTask=()=>{
        this.props.toggleModal(true);
    }

    addClicked=()=>{
        if(this.state.taskDescription!='' && this.state.taskName!=''){
            const obj = {
                taskName:`${this.state.taskName}`,
                taskDescription:`${this.state.taskDescription}`            }
            this.props.addNewTask(obj);
            this.props.toggleModal(false);
            this.setState({taskName:'',taskDescription:''})
        }
        else{
            alert('Fill all fields first')
        }
    }

    closeModal=()=>{
        this.props.toggleModal(false); this.setState({taskName:'',taskDescription:''})
    }

    render(){
        const {TestReducer:{isModalOpen,tasks}}=this.props;
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.hamBurger} onPress={()=>{
                        this.props.navigation.openDrawer()}}>
                        <FontAwesome name='bars' size={25} color="#a6a6a6"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.addTask()} style={styles.hamBurger}>
                        <FontAwesome name='plus' size={25} color="#1a1aff"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <TaskItem item={item}/>}
                    />
                </View>
              <Modal
                animationType="fade"
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {this.closeModal()}}>
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.4)'}}>
                  <TouchableHighlight style={{flex:1}} onPress={() => {this.closeModal()}}>
                    <View style={{flex:1,justifyContent:'center',marginHorizontal:10}}>
                      <View style={{shadowOffset: { width: 8, height: 8 },shadowColor: 'gray',shadowOpacity: 0.8,elevation: 2,borderRadius:14,borderWidth:4,borderColor:'#0099cc',borderColor: 'rgba(0,0,0,0.2)'}}>
                        <View style={{borderRadius:10,padding:50,backgroundColor:'white'}}>
                        <Text style={{alignSelf:'flex-end'}} onPress={() => {this.closeModal()}}>
                            CLOSE
                        </Text>
                        <View>
                            <Text>Task Name</Text>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    value={this.state.taskName}
                                    onChangeText={(val)=>{this.setState({taskName:val})}}
                                />
                            </View>
                        </View>
                        <View>
                            <Text>Task Description</Text>
                            <View style={styles.inputWrap}>
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    value={this.state.taskDescription}
                                    onChangeText={(val)=>{this.setState({taskDescription:val})}}
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>this.addClicked()} style={{width:100,padding:10,alignSelf:'center',borderRadius:5,borderWidth:1,alignItems:'center'}}>
                            <Text>Add</Text>
                        </TouchableOpacity>
                        </View>
                      </View>
                     </View>
                  </TouchableHighlight>
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
return bindActionCreators({toggleModal,addNewTask},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FFF'
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        borderBottomWidth:1,
        paddingHorizontal:10
    },
    hamBurger:{
        justifyContent:'center'
    },
    flatListContainer:{
        marginHorizontal:15,
        marginTop:20,
        marginBottom:50
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
  });