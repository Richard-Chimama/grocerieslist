import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from "./styles/styles"

export default function Checkbox({isChecked, onPress}){
    return(
        <TouchableOpacity style={styles.checkbox} onPress={onPress}>
            {isChecked?<Text>✅</Text>:<Text> </Text>}
        </TouchableOpacity>
    )
}


