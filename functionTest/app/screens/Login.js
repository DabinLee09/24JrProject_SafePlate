import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    } 

    const signUp = async() => {
        const after = await createUserWithEmailAndPassword(auth, email, password);
        console.log('after: ', after)

    const signIn = async() => {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log('after: ', after)
        alert("check your email")
    } 


  return (
    <View style={styles.container}>
        {/* <View style={styles.form}></View> */}
      <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          textContentType="password"
        />

        <Button
          onPress={() => signUp()}
          title="Sign Up"
        />
        <Button
          onPress={() => signUp()}
          title="Sign In"
        />
    </View>
  )
}





const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'column',

      },
      form: {
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
      },
      input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#fff",
      },

})