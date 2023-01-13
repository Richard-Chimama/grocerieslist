import {StyleSheet, TouchableOpacity, View, Text} from "react-native"

 const Button = ({onPress, symbol, color, top, left, bottom, right})=>{
    return(
        <>
            <TouchableOpacity
                onPress={onPress}
                style={
                    [styles.button,
                     styles.buttonText,
                    {backgroundColor:color},
                    {top:top},
                    {bottom:bottom},
                    {right:right},
                    {left:left}
                ]}
            >
                <Text style={styles.Color} >{symbol}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'fixed',
        height: "40%",
        width: "20%",
        borderRadius: "50",
    },
    buttonText: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Color:{
        color: "white",
        fontSize: "30"
    }
})

export default Button