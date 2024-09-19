import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCard from './components/ElevatedCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App