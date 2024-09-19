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
    headingText: {},
    card: {},
    cardElevated: {},  
    cardImage: {
        width:'100%',
        aspectRatio: 2/1
    },
    cardBody:{

    },
    cardTitle:{

    },
    cardLabel:{},
    cardDescription:{},
    cardFooter:{}
})