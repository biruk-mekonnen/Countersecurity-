import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from 'react';
import { keyGenerator } from "./keyGenerator";

export default function App() {
  const [S_key, setText] = useState("");
  const [K_msg, setmessage] =useState("");

PC_1_TABLE =
[53,18,45,56,31,24,14,
  39,28,5,21,3,38,48,
  40,0,52,43,35,8,55,
  19,20,2,58,29,16,4,
  60,47,26,7,15,30,32,
  10,50,61,34,37,11,41,
  63,6,51,22,27,12,25,
  1,17,57,42,36,46,13]

  PC_2_TABLE = [
		13, 16, 10, 23,  0,  4,
		 2, 27, 14,  5, 20,  9,
		22, 18, 11,  3, 25,  7,
		15,  6, 26, 19, 12,  1,
		40, 51, 30, 36, 46, 54,
		29, 39, 50, 44, 32, 47,
		43, 48, 38, 55, 33, 52,
		45, 41, 49, 35, 28, 31
	]

  left_rotations = [
		1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1
	]




function handelkey(text)
{
if (text.length<8)
{
 setmessage( "add more characters ")
}
if(text.length == 8)
{
  setmessage('');
  keyGenerator(text)}
}


return (
  <View style={styles.container}>
      <TextInput
        style={styles.input}
        minLength={8}
      maxLength={8}
        placeholder="Enter secret key"
        onChangeText={(text)=>handelkey(text)}
      />
      <Text style={styles.msg}>{K_msg}</Text>
       <Text style={styles.text}>{}</Text>
       
    </View>
);

}


 
  

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
  msg : {
    color: 'red',
  },
});







