import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts =[
        {
            uid:1,
            name:'Tommy Yin',
            department:'IT',
            imageUrl:'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?'
        },
        {
            uid:2,
            name:'Jessica Walker',
            department:'Marketing',
            imageUrl:'https://images.pexels.com/photos/10041251/pexels-photo-10041251.jpeg'
        },
        {
            uid:3,
            name:'Tarik Hassan',
            department:'Sales',
            imageUrl:'https://images.pexels.com/photos/7869002/pexels-photo-7869002.jpeg'
        }
    ]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
    <ScrollView 
        style={styles.container}
        scrollEnabled={false}   
        >
        {contacts.map(({uid, name, department, imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image 
                    source={{ uri: imageUrl }}
                    style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userDepartment}>{department}</Text>
                </View>
            </View>
        ))}
    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    container:{
        paddingHorizontal: 16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#202',
        borderTopLeftRadius:80/2,
        borderBottomLeftRadius:80/2,
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
        

    },
    userImage:{
        width:80,
        aspectRatio:4/4,
        borderRadius: 80/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'bold',
        color:'#090'
    },
    userDepartment:{
        color:'gray'
    },    
})