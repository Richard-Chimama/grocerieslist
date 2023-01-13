import {useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import styles from "../components/styles/styles"


export default function AddProduct({navigation}){
    const [inputValue, setInputValue] = useState("")
    const [inputValueState, setInputValueState] = useState(false)
    const [error, setError] = useState("")


    return(
      <View>
        <TextInput style={styles.textInput} onChangeText={(text)=>{
          setInputValue(text)
          if(text !== ""){
            setInputValueState(false)
          }
        }
          } value={inputValue}/>
        {inputValueState?<Text style={styles.errorMessage}>{error}</Text>:<Text></Text>}
        <Button title="Add Product" onPress={()=> {
                      if(inputValue === ""){
                        setInputValueState(true)
                        return setError("Please enter a product name!")
                      }else if(inputValue !== ""){
                        navigation.navigate("Home", {text: inputValue})
                      }
                    }}/>
      </View>
    )
}