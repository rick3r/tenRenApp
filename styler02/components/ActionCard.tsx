import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in Montreal</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ENG_Locations.width-1000.format-webp.webp'

                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyText}>
                        From iconic landmarks such as the Notre-Dame Basilica and Gibeau Orange Julep to hidden gems, Google Maps has become an integral tool for navigating and understanding the world around us. Street View allows you to virtually wander from The Main to your favourite coffee shop and now with Immersive View you can visualize every segment of a route before you go — whether you're driving, walking or cycling, letting you virtually explore the best Montreal has to offer. We took a look at the most popular locations in Montreal based on Google Street View clicks:
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://blog.google/intl/en-ca/products/explore-get-answers/google-montreal-20-years-of-exploration-and-discovery/')}
                    style={styles.to1}
                    >
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={() => openWebsite('https://blog.google/intl/en-ca/products/explore-get-answers/google-montreal-20-years-of-exploration-and-discovery/')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        borderRadius: 6,
        marginVertical: 12,
        paddingHorizontal: 16
    },
    elevatedCard: {
        marginHorizontal: 4,
        backgroundColor:'orange',
        elevation: 6,
        shadowColor:'#000',
        shadowOffset:{
            width: 1, 
            height: 1
        }
    },
    headingContainer: {
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        color: 'white'  

    },
    cardImage: {
        width: '100%',
        aspectRatio: 1 / 1
    },
    bodyContainer: {
        padding:8
    },
    bodyText:{
        color:'white'
    },
    footerContainer: {
       padding:8,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-evenly'

    },
    socialLinks: {
        fontSize:16,
        color: 'blue',
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:4,
        borderRadius:6
    },


})