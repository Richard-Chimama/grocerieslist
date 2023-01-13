import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Checkbox from './Checkbox';
import Remove from './Remove';
import styles from './styles/styles.js';


export default function ListItem({array, checked, remove}){
    return(
        <View>
            {array.length > 0? array.map((item, index)=>
                <View key={index} style={styles.listContainer}>
                    <Checkbox isChecked={item.isBought} onPress={() => checked(index)} />
                    {item.isBought ? <Text style={styles.EditText}>{item.item}</Text>:<Text style={styles.text}>{item.item}</Text>}
                    <Remove onPress={()=> remove(index)} />
                </View>
            ):
            <Text style={styles.noProduct}>THE IS NO PRODUCT IN THE SHOPPING LIST!!</Text>
            }
        </View>
    )
}