import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from "./styles/styles"


export default function Remove({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>⌫</Text>
        </TouchableOpacity>
    )
}


