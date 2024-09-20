import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>&#x1F600;</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding: 8,
        marginBottom:10
    },
    card:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius: 50,
        margin: 4,
        elevation:4,
        shadowOffset:{
            width: 4,
            height: 4,   
        },
        shadowColor:'black',
        shadowOpacity: 0.2,
        shadowRadius: 5
    },
    cardElevated:{
        backgroundColor: 'orange'
    }

})