import React from "react";
import { View, Text,Button } from "react-native";
import { styles } from "./styles";

const Product = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <Text> Product </Text>
            <Button
            title= "Back to categories"
            onPress={() => navigation.navigate("Categories")}
            />
        </View>
    )
};
export default Product; 