import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        height: "100%",
        maxWidth: '100%',
        marginRight: "5%",
        marginBottom: "5%",
        marginLeft: "5%",

    },
    listContainer:{
       display: 'flex',
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       marginTop: 10,
    },
    fixedFab:{
       display: "flex",
       flexDirection: "row-reverse",
       justifyContent: "space-between",

    },
    text:{
        fontSize: 25
    },
    checkbox:{
        maxHeight: "100%",
        width: "6%",
        maxWidth: "100%",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid"
    },
    EditText:{
        fontSize: 25,
        textDecorationLine: "line-through",
        opacity: 0.5
    },
    textInput:{
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10
    },
    errorMessage:{
        color: "red",
        textAlign: "center"
    },
    noProduct:{
        marginTop: 20
    }
})


export default styles