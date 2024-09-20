import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg' }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra, Uttar Pradesh, India</Text>
                    <Text style={styles.cardDescription}>
                    The Taj Mahal is a magnificent white marble mausoleum, symbolizing eternal love, renowned for its intricate architecture and serene reflection on the Yamuna River.                    </Text>
                    <Text style={styles.cardFooter}>12 min away</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    card: {
        width:360,
        height:360,
        borderRadius: 6,
        marginVertical: 12,
        paddingHorizontal: 10
    },
    cardElevated: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor:'#000',
        shadowOffset:{
            width: 1, 
            height: 1
        }
    },  
    cardImage: {
        height:130,
        width:'100%',
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    
    },
    cardBody:{
        flex: 1,
        flexGrow:1,
        paddingHorizontal:12

    },
    cardTitle:{
        color: 'blue',
        fontWeight: '400',
        fontSize:16,
        marginBottom: 4

    },
    cardLabel:{
        color:'grey',
        fontSize: 14,
        marginBottom: 4
    },
    cardDescription:{
        color:'#000',
        fontSize: 12,
        marginBottom: 6
    },
    cardFooter:{}
})