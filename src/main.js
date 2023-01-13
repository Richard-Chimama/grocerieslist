import {Text} from 'react-native'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from "./screens/HomeScreen"
import AddProduct from './screens/AddProduct'

const Stack = createNativeStackNavigator()

function Main(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{backgroundColor: "#A5A0C0"},
                    headerTitleStyle: {fontWeight: 'bold'}
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add" component={AddProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Main