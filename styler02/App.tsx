import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App