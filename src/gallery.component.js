import React, {useState, useEffect} from 'react';
import { View, Image, ScrollView } from 'react-native';

import styles from './styles';

export default function Gallery ({captures=[]}) {
    return (
        <ScrollView 
            horizontal={true}
            style={[styles.bottomToolbar, styles.galleryContainer]} 
        >
            {captures.map(({ uri }) => (
                <View style={styles.galleryImageContainer} key={uri}>
                    <Image source={{ uri }} style={styles.galleryImage} />
                </View>
            ))}
        </ScrollView>
    )
}