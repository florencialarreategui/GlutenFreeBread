import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <Text> Catergories </Text>
            <Button
            title= "Go to products"
            onPress={() => navigation.navigate("Products")}
            />
        </View>
    )
};
export default Categories; 