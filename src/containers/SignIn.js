import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
//import console = require('console');

export default class SignIn extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    goToSignUp(){
        this.props.navigation.navigate('SignUp');
    }

    async signIn(){
        const credentials = await AsyncStorage.getItem('credentials');
        let credentialArray = JSON.parse(credentials);
        const {email,password} = this.state;
        console.log(credentialArray);
        if(email!='' && password!=''){
            let user = credentialArray.filter(item=>{
               return (item.username == email && item.password == password)
            })
            if(user.length!=0){
                alert("Signed In successfull")
            }
            else{
                alert("Username or password is wrong")
            }
        }
        else{
            alert("Fill All the fields")
        }
    }

    render(){
        const {email,password} = this.state;
        return (
            <View
              style={[styles.background, styles.container]}
            >
              <View style={styles.container} />
              <View style={styles.wrapper}>
                <View style={styles.inputWrap}>
                  <TextInput
                    placeholder="Email Address"
                    value={email}
                    onChangeText={(val)=>{this.setState({email:val})}}
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
                    onSubmitEditing={()=>{this.signIn()}}
                  />
                </View>
                <TouchableOpacity onPress={()=>{this.signIn()}}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{alignSelf:'center',fontSize:18,color:'gray'}}>
                    Don't have an account? <Text style={{textDecorationLine: 'underline',color:'#0088cc'}} onPress={()=>this.goToSignUp()}>Sign Up</Text>
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