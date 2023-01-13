import React, {useState, useEffect} from 'react';
import {View} from "react-native";
import styles from '../components/styles/styles.js';


import RoundButton from "../components/Fab"
import ListItem from '../components/ListItem';


export default function HomeScreen({navigation, route}){
    useEffect(()=>{
        if(route.params){
            handleAddItem(route.params.text)
        }else{
            getList()//this set the data into the listState variable  
        }
        
    }, [ route.params?.text ])


    //initial data to show when the app first load
    const data = [
        {id:"1", item: "Milk", isBought: false},
        {id:"2", item: "Sugar", isBought: false},
        {id:"3", item: "Cheese", isBought: true},
        {id:"4", item: "Juice", isBought: false},

    ]

    //initializing the state
    const initialListState = []
    const [list, setList] = useState(initialListState)

    //this open the alert state
    const [isOpen, setIsOpen] = useState(false)

    //setting data into listState variable
    const getList = ()=>{
        setList(data)
    }

    /**
     * function update the state of the product being bought
     * by toggling isBought boolean falue to true or false
     * @param {*} index stand for the position of the product in the list
     * 
     */
    const handleListChange = (index)=>{
        setList(prevlist =>{
            const newList = [...prevlist]
            newList[index].isBought = !newList[index].isBought
            return newList
          })
    }

    /**
     * function remove the product from the list 
     * @param {*} index represent the position of the product to be removed
     */
    const handleDelete = (index) =>{
        setList(prevlist =>{
          const temp = prevlist.filter((_, itemI)=> itemI !== index)
          return temp
        })
      }

      /**
       * function add a product into the dataset
       * @param {*} inputValue 
       */
    const handleAddItem = (inputValue)=>{
        setList(prevlist =>{
            return [...prevlist, {
                id: list.length + 1,
                item: inputValue,
                isBought: false
            }]
        })
    }

      /**
       * This clear the data in the list and close the alert
       * prompt screen.
       */
    const handleClerList = ()=>{
        setList(initialListState)
        onClose()
    }

    const onClose =()=>setIsOpen(false)


    return(
      <View style={styles.container}>
        <ListItem 
          array={list} 
          checked={handleListChange}
          remove={handleDelete}
          />
        
        <View style={styles.fixedFab}>
          <RoundButton 
              symbol="+"
              color="#1234AB"
              onPress={()=>{
              navigation.navigate('Add')
                  }}  />
        <RoundButton
          symbol="⎼"
          color="red"
          onPress={()=>{
              if(list.length > 0){
                  handleClerList()
                }
        }} 
     /></View>
      </View>

      


    

    )
}