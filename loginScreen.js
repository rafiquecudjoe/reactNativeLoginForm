import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);this.state={email:"",password:""}
     }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.loginText}>Log in</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.user}
            placeholder="Username"
                    placeholderTextColor="#aaaaaa"
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(email) => {
                        this.setState({ email })
                    }}

          />
          <TextInput
            style={styles.pass}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({ password })
                    }}
          />
          <Text style={styles.fpass}>Forgot password?</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.loginbtn}>
            <Text style={styles.btntext}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noaccount}>
          <Text style={styles.noaccounttext}>Dont have an account?</Text>
          <Text style={styles.signup}>Signup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 20,
    marginHorizontal: 50,
    flexDirection: "column",
    justifyContent: "center",
  },
  loginText: {
    marginTop: 100,
    marginBottom: 30,
    fontSize: 50,
    alignSelf: "flex-start",
    color: "#14279B",
  },
  user: {
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
      borderColor: "#5100ad",
      fontSize: 20,
    height:50
  },
  pass: {
    borderBottomWidth: 2,
    marginBottom: 10,
      borderColor: "#5100ad",
      fontSize: 20,
      height:50

  },

  loginbtn: {
    backgroundColor: "#5100ad",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  fpass: {
    alignSelf: "flex-end",
      marginBottom: 30,
    
  },
  btntext: {
    fontSize: 25,
    color: "white",
  },
  noaccount: {
      marginVertical: 20,
      flexDirection: "row",
      justifyContent: "center",
      
    },
    signup: {
        marginLeft: 10,
        fontSize: 16,
        color:"#5100ad",
    },
    noaccounttext:{
        fontSize: 16,
        
        
    }
});
