import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//for validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(4, 'Should be a minimum of 4 characters')
    .max(16, 'Should be a maximum of 16 characters')
    .required('Field is required')
})


export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)

  const generatePasswordString = (passwordLength: number) => {

  }

  const createPassword = (characters: string, passwordLength: number) => {

    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charCodeAt(characterIndex)
    }

    return result
  }

}

const resetPassswordState = () => { }

return (
  <View>
    <Text>App</Text>
  </View>
)
}

const styles = StyleSheet.create({})