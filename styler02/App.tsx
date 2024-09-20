import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
     
    </SafeAreaView>
  )
}

export default App