import React, { PureComponent } from "react";
import {Dimensions,Image,AsyncStorage,Alert,SafeAreaView,TouchableOpacity,View,Text} from 'react-native';

export default  class CustomDrawer extends PureComponent {

  logout(){
      this.props.navigation.navigate('SignIn');
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity onPress={()=>this.logout()} style={{padding:10,position:'absolute',bottom:20,width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#0066cc',flexDirection:'row'}}>
          <Text style={{marginVertical:5,fontSize:16,fontWeight:'700',color:'white'}}>Sign Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}