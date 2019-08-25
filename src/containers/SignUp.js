import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            username:'',
            password:'',
        }
    }

    goToSignIn(){
        this.props.navigation.navigate('SignIn');
    }

    async signUp(){
        const {name,username,password} = this.state;
        if(name!='' && username!='' && password!=''){
            const credentialsStorage = await AsyncStorage.getItem('credentials');
            let  credentialsArray = JSON.parse(credentialsStorage);

            if(credentialsArray!=null){
                let userCheck = credentialsArray.filter(item=>{
                    return(item.username==username)
                })
    
                if(userCheck.length==0){
                    credentialsArray.push(this.state)
                    const credentials = JSON.stringify(credentialsArray)
                    AsyncStorage.setItem('credentials',credentials);
                    alert("Signed up successfully")
                }
                else{
                    alert('User already there');
                }
            }
            else{
                let userArray = [];
                userArray.push(this.state);
                let firstCredentials = JSON.stringify(userArray)
                AsyncStorage.setItem('credentials',firstCredentials);
                alert("Signed up successfully")
            }
        }
        else{
            alert("Fill All the fields")
        }

    }

    render(){
        const {name,password,username} = this.state;
        return (
            <View
              style={[styles.background, styles.container]}
            >
              <View style={styles.container} />
              <View style={styles.wrapper}>
                <View style={styles.inputWrap}>
                  <TextInput
                    placeholder="Full Name"
                    value={name}
                    onChangeText={(val)=>{this.setState({name:val})}}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View style={styles.inputWrap}>
                  <TextInput
                    placeholder="Email"
                    value={username}
                    onChangeText={(val)=>{this.setState({username:val})}}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                  />
                </View>
                <View style={styles.inputWrap}>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(val)=>{this.setState({password:val})}}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                  />
                </View>
                <TouchableOpacity onPress={()=>{this.signUp()}}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{alignSelf:'center',fontSize:18,color:'gray'}}>
                    Already have an account? <Text style={{textDecorationLine: 'underline',color:'#0088cc'}} onPress={()=>this.goToSignIn()}>Sign In</Text>
                </Text>
              </View>
              <View style={styles.container} />
            </View>
          );
    }
}
  
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