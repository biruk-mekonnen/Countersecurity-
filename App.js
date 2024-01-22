import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from 'react';
import { keyGenerator } from "./keyGenerator";

export default function App() {
 
  const [K_msg, setmessage] =useState("");
  const [text, setText] = useState(""); 
  let Generatedkeys = {};




function handelkey(text){


if (text.length<8)
{
 setmessage( "add more characters ")
}
if(text.length == 8)
{
  
  setmessage('');
  Generatedkeys=keyGenerator(text)


}


}


return (
  <View style={styles.container}>
      <TextInput
        style={styles.input}
        minLength={8}
      maxLength={8}
        placeholder="Enter secret key"
        onChangeText={(text) => setText(text)} // Update the state variable with the onChangeText event
        value={text}
      />
       <Button title="Generate Keys"  onPress={() => handelkey(text)} />
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







