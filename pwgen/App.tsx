import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//for validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLenght: Yup.number()
    .min(4, 'Should be a minimum of 4 characters')
    .max(16, 'Should be a maximum of 16 characters')
    .required('Field is required')
})


export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})